import car from "../assets/12.jpg"
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Home () {
    return(
        <>
        <Navbar/>
        <div className="hero">
            <img alt="HerpImg" src={car}/>
        </div>
        <div className="hero-text">
            <h1>rustPlusPlus ~ Rust+ Discord Bot</h1>
             <p>A NodeJS Discord Bot that uses the <a href="https://github.com/liamcottle/rustplus.js" target="_blank" rel="noreferrer">rustplus.js</a> library to utilize the power of the <a href="https://rust.facepunch.com/companion" target="_blank" rel="noreferrer">Rust+ Companion App</a> with additional Quality-of-Life features.</p>
            <Link to="/settings" className="show">
            Get Start
            </Link>

        </div>
        </>
    )
}

export default Home;