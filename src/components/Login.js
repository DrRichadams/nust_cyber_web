import React from "react"
import { FiChevronRight } from "react-icons/fi";
import banner1a from "../resources/banner1b.jpg"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="login_container">
            <div className="login_banner">
                {/* <img src={banner1a} alt="" /> */}
                <div className="register_infos">
                    <h3 className="register_title">Welcome user, login below</h3>
                    <p className="register_message"><span>Login</span> | authorised access only</p>
                </div>
            </div>
            <form onSubmit={() => navigate("/dashboard")} className="login_form">
                <h2>LOGIN</h2>
                <div className="login_uname login_box">
                    <label>Email</label>
                    <input type="text" id="username" />
                </div>
                <div className="login_pwd login_box">
                    <label>Password</label>
                    <input type="text" id="password" />
                </div>
                <div className="login_box">
                    <button className="login_btn">
                        <p className="login_text_btn">LOGIN</p>
                        <FiChevronRight className="login_icon" size={20}/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login