export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fa-solid fa-house-user",
    showLoggedIn: true,
    showLoggedOut: true,
  },
  {
    title: "Viaggi",
    url: "/travels",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info",
    showLoggedIn: true,
    showLoggedOut: true,
  },
  {
    title: "Prenotazioni",
    url: "/bookings",
    cName: "nav-links",
    icon: "fa-solid fa-briefcase",
    showLoggedIn: true,
    showLoggedOut: true,
  },

  {
    title: "Login",
    url: "/login",
    cName: "nav-links",
    icon: "fa-solid fa-address-book",
    showLogin: true,
    showSignUp: true,
  },
  {
    title: "Sign up",
    url: "/users",
    cName: "nav-links",
    icon: "fas fa-user-plus",
    showLogin: true,
    showSignUp: true,
  },
  {
    title: "Logout",
    url: "/",
    cName: "nav-links",
    icon: "fas fa-sign-out-alt",
    showLogin: false,
    showSignUp: false,
  }
];
