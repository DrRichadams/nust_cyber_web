import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiLogOut } from "react-icons/fi";
import Requests from "./features/Requests";
import Members from "./features/Members";
import db from "../firebase"
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const Dashboard = () => {

    const [fromData, setfromData] = useState([]); 

  useEffect(() => { 
    
    let unmounted = false
    
      onSnapshot(collection(db, "members"),(snapshot) => {
            //console.log("From Firebase",snapshot.docs.map((doc) => doc.data()));
            let tempData = snapshot.docs.map((doc) => doc.data())
            if(!unmounted) {
            setfromData([
                ...tempData
            ])
            }
          }
        )

        return () => unmounted = true
        
  },[])

  useEffect(() => {
    console.log(fromData)
    setRequest_details([...fromData])
  }, [fromData])


    const navigate = useNavigate()
    const [ mode, setMode ] = React.useState({
        requests: true,
        members: false
    })

    const scolor = {
        t: "rgb(1,161,231)",
        f: "#f5f5f5"
    }

    const handleModeChange = (e) => {
        if(e.target.id == "requests") setMode({requests: true, members: false})
        if(e.target.id == "members") setMode({requests: false, members: true})
    }

    const [ request_details, setRequest_details ] = React.useState([
    //     { id: 1, firstName: "Richard", lastName: "Mutambisi", student_number: "221002707", gender: "male", email: "proxyserver7798@gmail.com", cell: "0813694757", isMember: true},
    //     { id: 2, firstName: "Melin", lastName: "Rodriguez", student_number: "221002707", gender: "male", email: "proxyserver7798@gmail.com", cell: "0813694757", isMember: true},
    //     { id: 3, firstName: "Shelly", lastName: "Thomas", student_number: "221002707", gender: "female", email: "proxyserver7798@gmail.com", cell: "0813694757", isMember: false},
    //     { id: 4, firstName: "Ashley", lastName: "Knoll", student_number: "221002707", gender: "female", email: "proxyserver7798@gmail.com", cell: "0813694757", isMember: true},
    //     { id: 5, firstName: "Golam", lastName: "Bilbo", student_number: "221002707", gender: "male", email: "proxyserver7798@gmail.com", cell: "0813694757", isMember: false},
    ])

    // useEffect(() => {
    //     console.log("My requests", request_details)
    // }, [request_details])

    const handleAlterData = (id) => {
        let tempData = request_details.find(item => item.id === id)
        tempData.isMember = false
        alterData(tempData, id)
    }

    const alterData = async (userData, id) => {
        const docRef = doc(db, "members", id);
        const payload = {
            id,
            fname: userData.fname,
            lname: userData.lname,
            snumber: userData.snumber,
            gender: userData.gender,
            email: userData.email,
            cell:userData.cell,
            isMember: false,
        };
        console.log("My altered", payload)
        await setDoc(docRef, payload);
      };

      const handleReverse = (id) => {
        let tempData = request_details.find(item => item.id === id)
        tempData.isMember = true
        reversedData(tempData, id)
      }

      const reversedData = async (userData, id) => {
        const docRef = doc(db, "members", id);
        const payload = {
            id,
            fname: userData.fname,
            lname: userData.lname,
            snumber: userData.snumber,
            gender: userData.gender,
            email: userData.email,
            cell:userData.cell,
            isMember: true,
        };
        console.log("My altered", payload)
        await setDoc(docRef, payload);
      };

    return (
        <div className="dashboard_container">
            <nav className="dash_nav">
                <div onClick={() => navigate("/")} className="main_nav_brand"><span>Nust</span> | Cyber Security Team</div>
                <div className="main_nav_links">
                    <ul>
                        <li id="requests" onClick={(e) => handleModeChange(e)} style={{backgroundColor: mode.requests ? scolor.t: scolor.f, color: mode.requests ? scolor.f: scolor.t}}>Members</li>
                        <li id="members" onClick={(e) => handleModeChange(e)} style={{backgroundColor: mode.members ? scolor.t: scolor.f, color: mode.members ? scolor.f: scolor.t}}>Removed</li>
                    </ul>
                    <button className="CTA">
                        <p>Signout</p>
                        <FiLogOut size={20}/>
                    </button>
                </div>
            </nav>
            <div className="dash_contents">
                {
                    mode.requests ? 
                    <Requests request_details={request_details} handleAlterData={handleAlterData} /> 
                    : <Members request_details={request_details} handleReverse={handleReverse} />
                }
            </div>
        </div>
    )
}

export default Dashboard