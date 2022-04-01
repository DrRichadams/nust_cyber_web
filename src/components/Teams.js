import React from "react"
import banner1e from "../resources/banner1e.jpg"
import { FiPlus, FiMinus } from "react-icons/fi"

const Teams = () => {
    const [ teams, setTeams ] = React.useState([
        {
            id: Math.random(),
            name: "Gold/ Operations Team",
            description: "Competition officials that organize, run and manage the competition. They solicit for sponsorship, manage the budget and handle all communication including complaints. The team is headed by Dr. Bhunu Shava.",
            color: "gold"
        },
        {
            id: Math.random(),
            name: "Yellow Team",
            description: "Competition officials that are responsible for the event logistics including food, venue, and program design. The team is headed by Dr. Mercy Chitauro.",
            color: "yellow"
        },
        {
            id: Math.random(),
            name: "Black Team",
            description: "Penetration testing professionals simulating external hackers attempting to gain unauthorised access to competition teams’ systems. The objective is not to disable the networks, but to set things up that create a learning environment for the students. Headed by Mr. Reghardt Joubert. Deputized by Mr. Nashima Etutega.",
            color: "#01050f"
        },
        {
            id: Math.random(),
            name: "Blue Team",
            description: "Competition support members who provide overall administrative support to the competition. They develop documentation and rules. Co-headed by Prof. Fungai Bhunu Shava and Dr. Attlee M. Gamundani.",
            color: "blue"
        },
        {
            id: Math.random(),
            name: "Orange Team",
            description: "These are customer service professionals who evaluate to crate or technically end users who will be requesting services from the white team –  Co-headed by Mr. Julius Silaa & Mr. Isaac Nhamu.",
            color: "orange"
        },
        {
            id: Math.random(),
            name: "White | Competition Team",
            description: "The institution competitive teams consisting of students competing in an NNCSC event.",
            color: "#fff"
        },
        {
            id: Math.random(),
            name: "Silver Team",
            description: "Competition support members responsible for the infrastructure and provide technical support. They create and build the networks the competing students will have to defend. This team also deals with the physical workstations, routers, virtual and cloud environments of the competition. headed by Mr. Chitauro",
            color: "silver"
        },
        {
            id: Math.random(),
            name: "Green Team",
            description: "Competition officials, who observe team performance in their competition area, judge and evaluate team performance and rule compliance. They are the scorekeepers during the event.  Headed by Chief Inspector Vaino D. Vaino. Deputized by Mrs. Maria-Ambondo Iita",
            color: "green"
        },
    ])
    const [ current, setCurrent ] = React.useState(1)
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
                <div className="team_options">
                    {
                        teams && teams.map((item, index) => (
                            <div 
                                key={item.id} 
                                className="team_option"
                                style={{ opacity: current === index + 1 ? 1:0.45 }}
                                onClick={() => setCurrent(index + 1)}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
                {
                    teams && teams.map((team, index) => (
                        <div 
                            className="sin_team_box" 
                            style={{ 
                                    backgroundColor: "#01050f", 
                                    color:"#fff", 
                                    display: current === index + 1 ? "block":"none"}}>
                            <div className="team_box_name">{team.name}</div>
                            <hr />
                            <div className="team_box_brief">{team.description}</div>
                            <div 
                                className="badge"
                                style={{ backgroundColor: team.color }}></div>
                        </div>
                    ))
                }
            </div>
            <div className="teams_box_details_mobile">
                {
                    teams && teams.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="tbdm_box"
                            onClick={() => setCurrent(index + 1)}>
                            <div className="tbdm_title">{item.name} {index + 1 === current ? <FiMinus size={20} />:<FiPlus size={20} />} </div>
                            <div 
                                className="tbdm_details"
                                style={{ display: index + 1 === current ? "block":"none" }}>
                                    {item.description}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Teams