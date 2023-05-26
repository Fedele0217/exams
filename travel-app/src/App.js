import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Booking from "./components/Booking/Booking";
import EditBooking from "./components/BookingChange/EditBooking";
import NewBooking from "./components/BookingChange/NewBooking";
import User from "./components/User/User";
import NewUser from "./components/UserForm/NewUser";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/service/Home";
import EditUser from "./components/UserForm/EditUser";
import Login from "./components/User/Login";
import Travel from "./components/Travels/Travel";
import NewTravels from "./components/TravelsForm.js/NewTravels";
import EditTravels from "./components/TravelsForm.js/EditTravels";

function App() {
  const handleLogin = () => {
    // Funzione di callback per gestire il login
    console.log("login effettuato con successo"); // Esempio di azione da eseguire dopo il login
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />} // Passa la funzione di callback onLogin al componente Login
        />
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/bookings/edit/:id" element={<EditBooking />} />
        <Route path="new" element={<NewBooking />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/new" element={<NewUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/travels" element={<Travel/>} />
        <Route path="/travels/new" element={<NewTravels/>} />
        <Route path="/travels/edit/:id" element={<EditTravels/>} />
      </Routes>
    </Router>
  );
}

export default App;
