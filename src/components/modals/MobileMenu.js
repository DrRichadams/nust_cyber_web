import React from "react"
import ReactDOM from "react-dom"
import "../../App.css"
import { FiX } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const MobileMenu = ({
    isMobileMenu,
    triggerMobileMenu
}) => {
    const navigate = useNavigate()
    return ReactDOM.createPortal (
        <div 
            className={ isMobileMenu ? "mobile_menu_container hide_mobile_menu":"mobile_menu_container show_mobile_menu" }>
            <FiX 
                color="#fff" 
                size={30} 
                className="close_menu_btn"
                onClick={() => triggerMobileMenu()}/>

                <div className="mobile_menu_btns">
                    <button className="teams_mob_btn" onClick={() => { navigate("/teams"); triggerMobileMenu()}}>Teams</button>
                    <button className="login_mob_btn" onClick={() => { navigate("/login"); triggerMobileMenu()}}>Login</button>
                    <button className="join_mob_btn" onClick={() => { navigate("/register"); triggerMobileMenu()}}>Join Us</button>
                </div>
        </div>,
        document.querySelector("#mobile_menu_modal")
    )
}

export default MobileMenu

