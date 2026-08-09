import { useEffect, useRef, useState } from "react";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";
import commands from "./commands.json";

function TerminalOutput({ response }) {
  function getHref(item) {
    if (item.email) {
      return `mailto:${item.email[0]}@${item.email[1]}`;
    }

    return item.url;
  }

  if (response?.type === "link") {
    return (
      <p className="terminal-output">
        <a href={response.url} target="_blank" rel="noreferrer">
          {response.text}
        </a>
      </p>
    );
  }

  if (response?.type === "readMore") {
    return (
      <div className="terminal-output">
        <p>{response.preview}</p>
        <p className="terminal-read-more">Read more...</p>
      </div>
    );
  }

  if (response?.type === "links") {
    return (
      <div className="terminal-output terminal-links">
        {response.items.map((item) => (
          <p key={item.label}>
            {item.icon ? (
              <i
                aria-hidden="true"
                className={`hn hn-${item.icon} terminal-contact-icon`}
              />
            ) : null}
            <span>{item.label}: </span>
            <a href={getHref(item)} target="_blank" rel="noreferrer">
              {item.text}
            </a>
          </p>
        ))}
      </div>
    );
  }

  if (response?.type === "projects") {
    return (
      <div className="terminal-output terminal-projects">
        {response.items.map((project) => (
          <article className="terminal-project" key={project.title}>
            <h2>
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.icon ? (
                  <i
                    aria-hidden="true"
                    className={`hn hn-${project.icon} terminal-inline-icon`}
                  />
                ) : null}
                <span>{project.title}</span>
              </a>
            </h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    );
  }

  return <p className="terminal-output">{response}</p>;
}

export default function App() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([]);
  const [readMoreQueue, setReadMoreQueue] = useState([]);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const requestedPath = window.location.pathname;
    const normalizedPath = requestedPath.replace(/\/+$/, "") || "/";

    if (normalizedPath === "/resume") {
      window.location.replace("/resume/thomascruzana-resume.pdf");
      return;
    }

    if (normalizedPath !== "/") {
      setLines([
        {
          command: "404",
          response: `Error 404: Route not found: ${requestedPath}. Returning to main terminal.`,
        },
      ]);
      window.history.replaceState(null, "", "/");
    }
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [lines]);

  function handleSubmit(event) {
    event.preventDefault();

    const typedCommand = input.trim();
    const commandKey = typedCommand.toLowerCase();

    if (commandKey === "clear") {
      setLines([]);
      setReadMoreQueue([]);
      setInput("");
      return;
    }

    if (!typedCommand && readMoreQueue.length > 0) {
      const [nextParagraph, ...remainingParagraphs] = readMoreQueue;
      setLines((currentLines) => [
        ...currentLines,
        {
          command: null,
          response:
            remainingParagraphs.length > 0
              ? {
                  type: "readMore",
                  preview: nextParagraph,
                  more: remainingParagraphs,
                }
              : nextParagraph,
        },
      ]);
      setReadMoreQueue(remainingParagraphs);
      setInput("");
      return;
    }

    const response = typedCommand
      ? commands[commandKey] ?? `Unknown command: ${typedCommand}`
      : "";

    if (response?.type === "readMore") {
      setReadMoreQueue(Array.isArray(response.more) ? response.more : [response.more]);
    } else if (typedCommand) {
      setReadMoreQueue([]);
    }

    if (response?.openNewTab && response.url) {
      window.open(response.url, "_blank", "noopener,noreferrer");
    }

    setLines((currentLines) => [
      ...currentLines,
      {
        command: typedCommand,
        response,
      },
    ]);
    setInput("");
  }

  function focusPrompt(event) {
    if (event.target.closest("a")) {
      return;
    }

    inputRef.current?.focus();
  }

  return (
    <main className="terminal-screen" onClick={focusPrompt}>
      <section className="terminal-content" aria-label="Developer introduction">
        <header className="terminal-header">
          <h1>Thomas Cruzana</h1>
          <p>Full-Stack Software Engineer</p>
          {lines.length === 0 ? (
            <p className="terminal-hint">type help to begin</p>
          ) : null}
        </header>
        <div className="terminal-session" aria-live="polite">
          {lines.map((line, index) => (
            <div className="terminal-entry" key={`${line.command}-${index}`}>
              {line.command !== null ? (
                <p className="terminal-command">&gt;&gt; {line.command}</p>
              ) : null}
              {line.response ? (
                <TerminalOutput response={line.response} />
              ) : null}
            </div>
          ))}
          <form
            className="terminal-prompt"
            onClick={() => inputRef.current?.focus()}
            onSubmit={handleSubmit}
          >
            <label htmlFor="terminal-input">&gt;&gt;&nbsp;</label>
            <span
              className="terminal-input-wrap"
              style={{ "--cursor-offset": `${input.length}ch` }}
            >
              <input
                id="terminal-input"
                ref={inputRef}
                aria-label="Terminal prompt"
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                maxLength={12}
                spellCheck="false"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <span className="terminal-input-cursor" aria-hidden="true" />
            </span>
          </form>
          <div ref={terminalEndRef} />
        </div>
      </section>
    </main>
  );
}
