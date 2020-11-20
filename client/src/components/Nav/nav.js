import React from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import NavStyles from "./navbar.css";
import Comando from "./NavAssets/Comando.png"
import { usePerformanceContext } from "../../Utils/GlobalState"
import API from "../../Utils/API";
import refreshUserInformation from "../../Utils/onRefresh"
function Nav() {
  const [state, dispatch] = usePerformanceContext();

  const handleLogout = () => {
    API.logout().then(() => { refreshUserInformation(dispatch)}).catch(err =>{
      console.log(err)
    })
  }

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  });
  return (
    <div>
      <nav>
        <div class="nav-wrapper #37474f blue-grey darken-3">
          <Link to="/" class="brand-logo" id="nav-header">
            {/* <img className="ComandoUnico" src={Comando}/> */}
          </Link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to="/agenda">Agenda</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/agenda">Agenda</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
