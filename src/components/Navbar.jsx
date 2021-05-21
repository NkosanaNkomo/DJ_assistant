import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px"
    }
    return (
        <div className="navBar">
            <nav>  
                <Link to="/">
                <h2>Home</h2>
                </Link>
                <Link to="/clock">
                <h2>Clock</h2>
                </Link>
                <Link to="/zodiac">
                <h2>Zodiac</h2>
                </Link>
                <Link to ="/mixes">
                <h2>Mixes</h2>
                </Link>
                {/* <Link to ="/genrebycountry">
                <h2>Genres</h2>
                </Link> */}
                <Link to ="/todolist">
                <h2>To Get List</h2>
                </Link>


                
            </nav>
            
        </div>
    );
}

export default Navbar;