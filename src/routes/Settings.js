import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";

function Settings () {
    return(
        <>
          <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Settings"
        url="/"
        btnClass="hide"
        />
        </>
    )
}

export default Settings;