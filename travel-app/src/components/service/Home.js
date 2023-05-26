import { Outlet } from "react-router-dom";
import HomeHero from "../Hero/HomeHero";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import Trip from "./Trip";



const Home = () => {
  return (
    <>
        
        <HomeHero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        title="Il tuo viaggio La tua storia"
        text="Scegli la tua destinazione preferita."
        btnClass="show"
        buttonText="Viaggi"
        url="/travels"
      />
        <Trip />
        <Footer />
    </>
  );
}

export default Home;
