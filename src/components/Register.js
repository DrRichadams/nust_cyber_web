import React from "react"
import banner1a from "../resources/banner1a.jpg"
import { v4 as uuidv4 } from 'uuid';
import db from "../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ userDetails, setUserDetails ] = React.useState({
        id: "",
        fname: "",
        lname: "",
        snumber: "",
        gender: "",
        email: "",
        cell: "",
        isMember: true,
    })

    const updateUser = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userDetails)

        addNew(userDetails)
        alert(`Welcome to the NUST CYBER CLUB ${userDetails.fname}`)
        setUserDetails({
            id: "",
            fname: "",
            lname: "",
            snumber: "",
            gender: "",
            email: "",
            cell: "",
            isMember: true,
        })
        navigate("/")
    }

    const addNew = async (userData) => {
        const new_id = uuidv4()
          const docRef = doc(db, "members", new_id);
          const payload = {
            id: new_id,
            fname: userData.fname,
            lname: userData.lname,
            snumber: userData.snumber,
            gender: userData.gender,
            email: userData.email,
            cell:userData.cell,
            isMember: true,
          };
          await setDoc(docRef, payload);
        };

    return (
        <div className="register_container">
            <div className="register_banner">
                {/* <img src={banner1a} alt="" /> */}
                <div className="register_infos">
                    <h3 className="register_title">Hello aspiring hacker</h3>
                    <p className="register_message"><span>Register</span> | provide your details below</p>
                </div>
            </div>

            <div className="register_prompt">Provide the required details below</div>
            <form className="register_form" onSubmit={(e) => handleSubmit(e)}>
                <div className="register_content">
                    <div className="firstname_box detail_box">
                        <label className="detail_label">Firstname</label>
                        <input required = "required" type="text" className="details_input" id="fname" value={userDetails.fname} onChange={(e) => updateUser(e)} />
                    </div>
                    <div className="lastname_box detail_box">
                        <label className="detail_label">Lastname</label>
                        <input required = "required" type="text" className="details_input" id="lname" value={userDetails.lname} onChange={(e) => updateUser(e)} />
                    </div>
                    <div className="studentnumber_box detail_box">
                        <label className="detail_label">Student Number</label>
                        <input required = "required" type="text" className="details_input" id="snumber" value={userDetails.snumber} onChange={(e) => updateUser(e)} />
                    </div>
                    <div className="gender_box detail_box">
                        <label className="detail_label">Gender</label>
                        <input required = "required" type="text" className="details_input" id="gender" value={userDetails.gender} onChange={(e) => updateUser(e)} />
                    </div>
                    <div className="email_box detail_box">
                        <label className="detail_label">Email</label>
                        <input required = "required" type="email" className="details_input" id="email" value={userDetails.email} onChange={(e) => updateUser(e)} />
                    </div>
                    <div className="cell_box detail_box">
                        <label className="detail_label">Cell</label>
                        <input required = "required" type="text" className="details_input" id="cell" value={userDetails.cell} onChange={(e) => updateUser(e)} />
                    </div>

                    <div className="submit_box detail_box">
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register