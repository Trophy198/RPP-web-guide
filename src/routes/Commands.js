import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";

function Commands () {
    return(
        <>
          <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Commands"
        url="/"
        btnClass="hide"
        />
        </>
    )
}

export default Commands;