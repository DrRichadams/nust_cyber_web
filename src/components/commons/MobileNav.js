import React from "react"
import { useNavigate } from "react-router-dom"
import { FiMenu } from "react-icons/fi";

const MobileNav = () => {
    const navigate = useNavigate()
    return (
        <div className="mobile_nav_container">
             <div onClick={() => navigate("/")} className="main_nav_brand"><span>Nust</span> | Cyber Security Team</div>
             <FiMenu className="mobile_menu_icon" size={25} />
        </div>
    )
}

export default MobileNav