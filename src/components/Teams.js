import React from "react"
import banner1e from "../resources/banner1e.jpg"

const Teams = () => {
    const [ teams, setTeams ] = React.useState([
        {
            id: Math.random(),
            name: "Gold/ Operations Team",
            description: "Competition officials that organize, run and manage the competition. They solicit for sponsorship, manage the budget and handle all communication including complaints. The team is headed by Dr. Bhunu Shava."
        },
        {
            id: Math.random(),
            name: "Yellow Team",
            description: "Competition officials that are responsible for the event logistics including food, venue, and program design. The team is headed by Dr. Mercy Chitauro."
        },
        {
            id: Math.random(),
            name: "Black Team",
            description: "Penetration testing professionals simulating external hackers attempting to gain unauthorised access to competition teams’ systems. The objective is not to disable the networks, but to set things up that create a learning environment for the students. Headed by Mr. Reghardt Joubert. Deputized by Mr. Nashima Etutega."
        },
        {
            id: Math.random(),
            name: "Blue Team",
            description: "Competition support members who provide overall administrative support to the competition. They develop documentation and rules. Co-headed by Prof. Fungai Bhunu Shava and Dr. Attlee M. Gamundani."
        },
        {
            id: Math.random(),
            name: "Orange Team",
            description: "These are customer service professionals who evaluate to crate or technically end users who will be requesting services from the white team –  Co-headed by Mr. Julius Silaa & Mr. Isaac Nhamu."
        },
        {
            id: Math.random(),
            name: "White | Competition Team",
            description: "The institution competitive teams consisting of students competing in an NNCSC event."
        },
        {
            id: Math.random(),
            name: "Silver Team",
            description: "Competition support members responsible for the infrastructure and provide technical support. They create and build the networks the competing students will have to defend. This team also deals with the physical workstations, routers, virtual and cloud environments of the competition. headed by Mr. Chitauro"
        },
        {
            id: Math.random(),
            name: "Green Team",
            description: "Competition officials, who observe team performance in their competition area, judge and evaluate team performance and rule compliance. They are the scorekeepers during the event.  Headed by Chief Inspector Vaino D. Vaino. Deputized by Mrs. Maria-Ambondo Iita"
        },
    ])
    return(
        <div className="teams_container">
            <div className="teams_header">
                {/* <img src={banner1e} alt="" /> */}
                <div className="register_infos teams_top_titles">
                    <h3 className="register_title">NNCSC STRUCTURE</h3>
                    <p className="register_message"><span>Teams</span> | The different factions that make up nncsc</p>
                </div>
            </div>
            <div className="teams_primary_title">Teams</div>
            <div className="teams_box_details">
                {
                    teams && teams.map(team => (
                        <div className="sin_team_box">
                            <div className="team_box_name">{team.name}</div>
                            <hr />
                            <div className="team_box_brief">{team.description}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Teams