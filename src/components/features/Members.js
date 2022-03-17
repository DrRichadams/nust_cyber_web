import React from "react"

const Members = ({request_details, handleReverse}) => {
    const members = request_details.filter(member => member.isMember === false)
    return(
        <div className="members_container">
            <h3 className="requests_title"><span>Removed</span> | People who were purposely removed from the team</h3>
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
                                <button className="btn_remove_member" onClick={() => handleReverse(req.id)}>Add back</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Members