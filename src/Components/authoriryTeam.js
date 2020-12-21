import React, { Component } from 'react'
export default class authority extends Component {
 
    render() {
        console.log(this.props.DataTeam);
        var status = this.props.status?"btn-success authority": "btn-danger disabled "
        var textStatus =this.props.status?"Ready":"Busy"
        return (
               <div className="container_team px-2 mb-0 mt-2">
               <div className="team rounded-pill">
               <div className="p-1 ml-2 mr-1 bg-white rounded-circle"> <img className="png_team" src="./png/best-employee.png" alt="" /></div>
               <div className="team_name">
                   <p style={{fontSize: '14px'}} className="p-0 mt-2 ml-1 font-weight-bold mb-0">Team 1</p>
                   <span style={{fontSize: '10px', position: 'relative', left: '2px', top: '-6px', paddingTop: '3px', paddingBottom: '3px'}} className={`px-2 span_status ${status} text-white rounded-pill `}>{textStatus}</span>
               </div>
               <img className="mx-auto" src="./png/giphy1.gif" style={{height: '25px'}} alt="" />
               <button onClick={()=>{this.props.update(this.props.teamID)}} className={` author ml-auto p-2 ${status} border-0 mr-2 rounded-circle`}><img className="img_author" style={{width: '24px', height: '24px'}} src="./png/direct-selection.png" alt="" /></button>
               </div>
           </div>
        )
    }
}
