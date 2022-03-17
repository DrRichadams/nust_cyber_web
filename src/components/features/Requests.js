import React from "react"

const Requests = ({request_details, handleAlterData}) => {

    const members = request_details.filter(member => member.isMember === true)
    return(
        <div className="requests_container">
            <h3 className="requests_title"><span>Members</span> | People who are part of the team</h3>
            <div className="requests_box">
                {
                    members && members.map(req => {
                        return(
                            <div className="sin_req_box" key={req.id}>
                                <div className="req_fname_box">{req.fname}</div>
                                <div className="req_lname_box">{req.lname}</div>
                                <div className="req_snum_box">{req.snumber}</div>
                                <div className="req_gender_box">{req.gender}</div>
                                <div className="req_email_box">{req.email}</div>
                                <div className="req_cell_box">{req.cell}</div>
                                <button className="btn_remove_member" onClick={() => handleAlterData(req.id)}>Remove from team</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Requests