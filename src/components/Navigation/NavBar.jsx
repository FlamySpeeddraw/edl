import React from "react";
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom";
 
export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-element"><Link to="/">Garde corps</Link></div>
            <BrowserView className="navbar-element">
                <Link to="/excel">Excel</Link>
            </BrowserView>
        </div>
    );
};