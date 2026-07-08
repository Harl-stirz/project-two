// 
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='navigation'>
            <h2>Recroot</h2>
            <nav>
                <Link to="/find-a-job">Find a Job</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/case-studies">Case studies</Link>
            </nav>
            <button>Book a Demo</button>
        </div>
    );
}

export default Header;
