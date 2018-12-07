import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/" className="active">Home</Link>
            {" | "}
            <Link to="/about" className="active">About</Link>
            {" | "}
            <Link to="/courses" className="active">Courses</Link>
        </nav>
    );
};

export default Header;