import { Component } from 'react';
import "./Navbar.css";
import { Menu } from "./Menu";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({ clicked:!this.state.clicked})
    }
    render() {
        return (
             <nav className='NavbarItems'>
                <Link to="/" className='navbar-logo-links'>
                    <h1 className='navbar-logo'>RUST++</h1>
                    </Link>
                
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {Menu.map((item, index) =>{
                        return(
                            <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                        )
                    })}
                    <button>Discord</button>
                </ul>
             </nav>
        );
    }
}

export default Navbar;