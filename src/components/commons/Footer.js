import React from "react"
import {
    FiMail,
    FiPhoneCall,
    FiFacebook,
} from "react-icons/fi";

const Footer = () => {
    return(
        <div className="footer_container">
            <div className="footer_about">
                <div className="footer_logos"></div>
                <div className="footer_about_title1">NUST CYBER TEAM</div>
                <div className="footer_about_title2">NUST</div>
                <div className="footer_about_message">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam perferendis illo aspernatur. Doloremque iusto consequatur consectetur harum iure molestias ipsam voluptatem dolores sint dicta, maiores repellat expedita corporis incidunt eveniet.
                </div>
            </div>
            <div className="footer_newsletter">
                <div className="footer_newsletter_message1">
                    We have interesting stuff all the time.
                </div>
                <div className="footer_newsletter_message2">
                    Signup for our newsletter
                </div>
                <form className="footer_newsletter_form">
                    <input type="text" className="newsletter_input" placeholder="Email" />
                    <button className="newsletter_submit_btn">Submit</button>
                </form>
            </div>
            <div className="footer_contacts">
                <div className="footer_contact_message">
                    Get in touch with us
                </div>

                <div className="cap_mail_box cont_box">
                    <FiMail size={20} />
                    <div className="cap_email">proxyserver7798@gmail.com</div>
                </div>
                <div className="cap_cell_box cont_box">
                    <FiPhoneCall size={20} />
                    <div className="cap_cell">0813694757</div>
                </div>
                <div className="cap_cell_box cont_box">
                    <FiFacebook size={20} />
                    <div className="cap_cell">NustCyberTeam</div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer