import React from "react";

export default function Footer(props) {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">
                <i class="fa-solid fa-location-dot"></i> Bellingham, WA
              </p>
            </div>

            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Social</h4>

              <a
                class="btn btn-outline-light btn-social mx-1"
                href="https://github.com/tomcruzana"
                target="_blank"
              >
                <i class="fa-brands fa-fw fa-github"></i>
              </a>
              <a
                class="btn btn-outline-light btn-social mx-1"
                href="https://dev.to/tommyc"
                target="_blank"
              >
                <i class="fa-brands fa-fw fa-dev"></i>
              </a>
            </div>

            <div class="col-lg-4">
              <h4 class="text-uppercase mb-4">Favorite Quote</h4>
              <figure class="text-center">
                <blockquote class="blockquote fst-italic">
                  <p>"The Only Constant in Life Is Change"</p>
                </blockquote>
                <figcaption class="blockquote-footer text-light">
                  <cite title="Source Title">Heraclitus</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </footer>

      <div class="copyright py-4 text-center text-white">
        <div class="container">
          <small>
            <span class="date-year">{currentYear}</span> &copy; All Rights
            Reserved.
          </small>
        </div>
      </div>
    </>
  );
}
