import React from "react";

export default function Header(props) {
  return (
    <>
      <header class="masthead bg-primary text-white">
        <div class="container d-flex justify-content-between">
          <div>
            <img
              class="masthead-avatar mb-5"
              src="assets/img/avataaars.svg"
              alt="..."
            />

            <h3 class="masthead-heading text-uppercase mb-0">Thomas Cruzana</h3>

            <p class="masthead-subheading font-weight-light mb-0">
              Full-Stack Software Developer
            </p>
          </div>

          <div>
            <div class="window">
              <div class="controls">
                <button class="buttons close" id="close"></button>
                <button class="buttons maximize" href="#"></button>
                <button class="buttons minimize" href="#"></button>
                <div class="title">Terminal</div>
              </div>
              <div class="bash p-2">
                <span id="span">-</span>
                <span class="type-it">Hello, welcome!</span>
                <br />
                <span id="span">-</span>
                <span class="type-it">
                  I am a Full-stack Software developer with over 3 years of
                  experience developing apps used daily by thousands of users.
                  Skilled in Java, Spring Boot, React and SQL.
                </span>
                <br />
                <div class="result">
                  <span id="span2">
                    Error : This command has to be run under the root user.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
