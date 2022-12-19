import main from "../assets/main.png"
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Destination from "../components/Destination";
import videoBg from '../assets/videoBg.mp4';
function Home () {
    return(
        <>
        <Navbar/>
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
        </div>
        <div className="hero-text">
            <h1>rustPlusPlus ~ Rust+ Discord Bot</h1>
             <p className="link-texts">A NodeJS Discord Bot that uses the <a href="https://github.com/liamcottle/rustplus.js" className="link-text" target="_blank" rel="noreferrer">rustplus.js</a> library to utilize the power of the <a href="https://rust.facepunch.com/companion" className="link-text" target="_blank" rel="noreferrer">Rust+ Companion App</a> with additional Quality-of-Life features.</p>
            <Link to="/settings" className="show">
            Get Start
            </Link>
        </div>
        <Destination/>
        </>
    )
}

export default Home;