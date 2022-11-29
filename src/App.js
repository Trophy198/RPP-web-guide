import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Settings from "./routes/Settings";
import Commands from "./routes/Commands";



export default function App() {
  return (
   <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/commands" element={<Commands/>}/>
    </Routes>
    
   </div>
    
  );
}
