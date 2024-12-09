import React from "react";

export default function About(props) {
  return (
    <>
      <section class="page-section mb-0" id="about">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase">
            {props.title}
          </h2>

          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
        </div>
      </section>
    </>
  );
}
