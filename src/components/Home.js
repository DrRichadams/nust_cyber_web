import React, { useState } from "react"
import banner from "../resources/banner1.jpg"
import Footer from "./commons/Footer"
import nncsc_logo from "../resources/nncsc-logo.png"
import icc_logo from "../resources/icc-logo.png"
import csc_logo from "../resources/cscheader.png"
import pro_pic from "../resources/images.jpg"
import cap1 from "../resources/cap1.jpg"
import cap2 from "../resources/cap2.jpg"
import cap3 from "../resources/cap3.jpg"
import cap4 from "../resources/cap4.jpg"
import { 
     FiUserCheck,
     FiMail,
     FiPhoneCall,
     FiInstagram,
     FiFacebook,
     FiLinkedin,
     FiChevronUp
} from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


const Home = () => {

    const navigate = useNavigate()

    const [ captains, setCaptains ] = useState([
        {
            id: 1, name: "Tinashe", surname: "Chifamba", email: "tc@gmail.com", cell: "00000000",
            social: [
                { instagram: "https://www.instagram.com/tcchifamba" },
                { facebook: "https://www.facebook.com/tcchifamba" },
                { linkedIn: "https://www.linkedIn.com/tcchifamba" },
            ],
            img: cap1
        },
        

        {
            id: 2, name: "Ulrigh", surname: "Dewit", email: "ul@gmail.com", cell: "00000000",
            social: [
                { instagram: "https://www.instagram.com/ulright" },
                { facebook: "https://www.facebook.com/ulright" },
                { linkedIn: "https://www.linkedIn.com/ulright" },
            ],
            img: cap2
        },

        {
            id: 3, name: "Owen", surname: "Uchezuba", email: "ou@gmail.com", cell: "00000000",
            social: [
                { instagram: "https://www.instagram.com/owenuchez" },
                { facebook: "https://www.facebook.com/owenuchez" },
                { linkedIn: "https://www.linkedIn.com/owenuchez" },
            ],
            img: cap3
        },

        {
            id: 4, name: "Adriaan", surname: "Gobbler", email: "ag@gmail.com", cell: "00000000",
            social: [
                { instagram: "https://www.instagram.com/adriangb" },
                { facebook: "https://www.facebook.com/adriangb" },
                { linkedIn: "https://www.linkedIn.com/adriangb" },
            ],
            img: cap4
        },
    ])

    return(
        <div className="home_container">
            {/* <div className="banner_image">
                <img src={banner} alt="Banner" />
            </div> */}
            
            <div className="home_details_banner">
                <h1><span>NUST</span> CYBER SECURITY TEAM</h1>
                <h4>Your exciting journey into <span>Cyber</span> <span>Security</span> begins here.</h4>
                <div className="join_anime">
                    <p className="join_anime_moving" onClick={() => navigate("/register")}>Join the family</p>
                    <FiChevronUp className="join_anime_icon" size={30}/>
                </div>
            </div>

            <div className="comps_title">THE YEARLY COMPETITIONS TO PREPARE FOR</div>

            <div className="competitions_banner">
                <div className="competition_box">
                    <img src={nncsc_logo} alt="" />
                    <h3 className="comp_name">NNCSC</h3>
                    <p>
                    Cybersecurity Awareness to curb Remote Working Risks.
                    </p>
                    <a href="https://nncsc.com/#" className="visit_comp_btn" target="_blank">Visit Website</a>
                </div>

                <div className="competition_box">
                    <img src={icc_logo} alt="" />
                    <h3 className="comp_name">ICC</h3>
                    <p>
                    International Cybersecurity Challenge.
                    </p>
                    <a href="https://ecsc.eu/icc/" className="visit_comp_btn" target="_blank">Visit Website</a>
                </div>

                <div className="competition_box">
                    <img src={csc_logo} alt="" />
                    <h3 className="comp_name">SANReN CSC</h3>
                    <p>
                    Cyber Security Challenge.
                    </p>
                    <a href="https://www.csc.ac.za/" className="visit_comp_btn" target="_blank">Visit Website</a>
                </div>
            </div>
            <div className="about_sec">
                <div className="about_titles">
                    <h4>You want to know about us? come with me!</h4>
                    <p>A message from bla bla bla</p>
                </div>
                <div className="about_container">
                    <div className="pro_pic">
                        <img src={pro_pic} alt="" />
                    </div>
                    <div className="about_message">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Totam, similique ea. Laboriosam voluptatibus dicta culpa 
                        suscipit repellendus, maiores quaerat id numquam eligendi 
                        accusantium distinctio qui adipisci amet optio dolor est mollitia 
                        aperiam perferendis molestiae ipsa delectus aspernatur libero eum 
                        laudantium. Neque delectus, voluptatibus et est dolor nesciunt 
                        perferendis mollitia alias cumque minima, cupiditate eveniet 
                        pariatur vitae praesentium at? Repellendus magnam exercitationem, 
                        doloremque blanditiis dolorem odit rem id, dignissimos ducimus 
                        corrupti sint officiis architecto quo commodi reprehenderit 
                        incidunt vel repudiandae dolore.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Totam, similique ea. Laboriosam voluptatibus dicta culpa 
                        suscipit repellendus, maiores quaerat id numquam eligendi 
                        accusantium distinctio qui adipisci amet optio dolor est mollitia 
                        aperiam perferendis molestiae ipsa delectus aspernatur libero eum 
                        laudantium. Neque delectus, voluptatibus et est dolor nesciunt 
                        perferendis mollitia alias cumque minima, cupiditate eveniet 
                        pariatur vitae praesentium at? Repellendus magnam exercitationem, 
                        doloremque blanditiis dolorem odit rem id, dignissimos ducimus 
                        corrupti sint officiis architecto quo commodi reprehenderit 
                        incidunt vel repudiandae dolore.
                    </div>
                </div>
            </div>
            <br /><br />
            <hr />
            <h2 className="cap_title">Team captains</h2>
            <div className="team_captains">
                {
                    captains.map(cap => {
                        return(
                            <div className="cap_box" key={cap.id}>
                                <div className="img_box">
                                    <img src={cap.img} alt="" />
                                </div>
                                <div className="contact_BOX">
                                    <div className="cap_name_box cont_box">
                                        <FiUserCheck size={20} />
                                        <div className="cap_name">{cap.name} {cap.surname}</div>
                                    </div>
                                    <div className="cap_mail_box cont_box">
                                        <FiMail size={20} />
                                        <div className="cap_email">{cap.email}</div>
                                    </div>
                                    <div className="cap_cell_box cont_box">
                                        <FiPhoneCall size={20} />
                                        <div className="cap_cell">{cap.cell}</div>
                                    </div>
                                </div>
                                <div className="social_box">
                                    {
                                        cap.social.map(soc => (<>
                                            {
                                                soc.instagram && <div className="insta soc">
                                                    <a key={Math.random()} href={soc.instagram} target="_blank"><FiInstagram size={25} /></a>
                                                    
                                            </div>
                                            }
                                            {
                                                soc.facebook && <div className="face soc">
                                                    <a key={Math.random()} href={soc.facebook} target="_blank"><FiFacebook size={25} /></a>
                                                    
                                                </div>
                                            }
                                            {
                                                soc.linkedIn && <div className="linkd soc">
                                                    <a key={Math.random()} href={soc.linkedIn} target="_blank"><FiLinkedin size={25} /></a>
                                                    
                                                </div>
                                            }</>
                                        )) 
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;