import React, { useState } from "react"
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom"

const MainNav = () => {

    const navigate = useNavigate()

    

    return (
        <nav className="main_nav_container">
            <div onClick={() => navigate("/")} className="main_nav_brand"><span>Nust</span> | Cyber Security Team</div>
            <div className="main_nav_links">
                <ul> 
                    <li onClick={() => navigate("/teams")}>Teams</li>
                    <li onClick={() => navigate("/login")}>Login</li>
                </ul>
                <button onClick={() => navigate("/register")} className="CTA">
                    <p>JOIN US</p>
                    <FiExternalLink size={20}/>
                </button>
            </div>
        </nav>
    )
}

export default MainNav