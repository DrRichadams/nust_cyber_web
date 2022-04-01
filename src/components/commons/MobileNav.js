import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import MobileMenu from "../modals/MobileMenu";


const MobileNav = () => {
    const navigate = useNavigate()
    const [ isMobileMenu, setIsMobileMenu ] = useState(true)
    const triggerMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu)
    }
    return (
        <div className="mobile_nav_container">
            <MobileMenu
                isMobileMenu = {isMobileMenu}
                triggerMobileMenu = {triggerMobileMenu}
            />
             <div onClick={() => navigate("/")} className="main_nav_brand"><span>Nust</span> | Cyber Security Team</div>
             <FiMenu 
                className="mobile_menu_icon" 
                size={25} 
                onClick={() => triggerMobileMenu()}/>
        </div>
    )
}

export default MobileNav