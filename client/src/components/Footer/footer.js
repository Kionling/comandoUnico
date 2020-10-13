import React from "react";
import { Link } from "react-router-dom";
import FooterStyles from "../Footer/footer.css";
function Footer() {
  return (
    <div>
      <footer class="page-footer #37474f blue-grey darken-3">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Comando Unico</h5>
              <p class="grey-text text-lighten-4">
                Pagina official del grupo Comando Unico 
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="https://github.com/Kionling">
                    Daniel Jauregui (Full Stack Engineer) on github
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Daniel's portfolio page 
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2020 Copyright Comando Unico
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
