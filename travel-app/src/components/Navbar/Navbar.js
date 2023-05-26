import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems.js";

class Navbar extends Component {
  state = {
    clicked: false,
    isLoggedIn: false
  };

  // Funzione per gestire il clic sull'icona del menu
  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }));
  };

  // Funzione per gestire il login dell'utente
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  // Funzione per gestire il logout dell'utente
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { clicked, isLoggedIn } = this.state;

    return (
      <nav className="NavbarItems">
        {/* Titolo del navbar */}
        <h1 className="navbar-logo">I viaggi del maaestro</h1>
        {/* Icona per aprire/chiusa il menu */}
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Voci di menu */}
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            // Nascondi "Login" e "Sign up" se l'utente è già autenticato
            if (
              (item.title === "Login" || item.title === "Sign up") &&
              isLoggedIn
            ) {
              return null;
            }
            // Nascondi "Logout" se l'utente non è autenticato
            else if (item.title === "Logout" && !isLoggedIn) {
              return null;
            }
            // Mostra "Login" solo se l'utente non è autenticato
            else if (item.title === "Login" && !isLoggedIn) {
              return (
                <li key={index}>
                  {/* Link per il login che chiama la funzione handleLogin */}
                  <Link
                    className={item.cName}
                    to={item.url}
                    onClick={this.handleLogin}
                  >
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            }

            // Altrimenti, mostra le altre voci di menu
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {/* Mostra "Logout" solo se l'utente è autenticato */}
          {isLoggedIn && (
            <li>
              {/* Link per il logout che chiama la funzione handleLogout */}
              <Link
                className="nav-links"
                to="/"
                onClick={this.handleLogout}
              >
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
