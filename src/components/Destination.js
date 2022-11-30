import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import "./Destination.css";

const Destination = () => {
    return(
        <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you asdfevnk</p>
        <div className="first-des">
            <div className="des-text">
                <h2>Taal Volcano, Batangas</h2>
                <p>One of the most iconic
                    viasdasfhfjvflj;jwg
                    sffjeoidn;lkvnz;ewa
                    fhsaiofha;;
                </p>
            </div>
            <div className="image">
                <img alt="img" src={Mountain1}/>
                <img alt="img" src={Mountain2}/>
            </div>
        </div>
        </div>
    )
}
export default Destination;