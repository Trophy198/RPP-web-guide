import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import "./Destination.css";

const Destination = () => {
    return(
        <div className="destination">
        <h1>기능</h1>
        <p>여기 문구에는 표현이 들어가야함</p>
        <div className="first-des">
            <div className="des-text">
                <h2>RUST++ 설명</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur incidunt, deserunt ratione aperiam commodi. Est quis cumque ratione dolorum fuga ullam, voluptas deleniti error veniam magni excepturi? Nisi, quidem.
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