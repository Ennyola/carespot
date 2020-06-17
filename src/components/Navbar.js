import '../public/css/navbar.css'
import React, {Component} from 'react'
import  faker from 'faker'


class Navbar extends Component{
    render(){
        return(
            <nav className = "Navbar">
                <span className = "brand">
                    <i className="fas fa-heartbeat"></i>
                    <span className = "logo"> Carespot </span> - Ilara Health medical clinic
                </span>
                <span className = "nav-config">
                    <ul className = "nav">
                       <li > <i className="navicons fas fa-cog"></i> </li>
                       <li> <i className="navicons fas fa-bell"></i> </li>
                       <li id = "user"> 
                          <img src={faker.image.avatar()} alt="avatar"/>
                          <span className = "username"> John Smith </span>
                       </li>
                      <li> <i id = "collapse-icon" data-toggle = "collapse" data-target = "#links" className="fas fa-angle-down"></i> </li> 
                    </ul>
                </span>
                <ul className = "collapse" id = "links">
                    <li className = "collapse-links"> <i className="side-icons fas fa-th"></i>  Dashboard</li>
                    <li className = "collapse-links"><i className="side-icons fas fa-user"></i> Patients</li>
                    <li className = "collapse-links"> <i className="side-icons fas fa-vial"></i> Lab Tests</li>
                    <li className = "collapse-links"><i className="side-icons far fa-comment-alt"></i> Messaging</li>
                    <li className = "collapse-links"> <i className="side-icons far fa-heart"></i>Loyalty</li>
                    <li className = "collapse-links"><i className="side-icons fas fa-cog"></i>Settings</li>
                    <li className = "collapse-links">
                        <i className="side-icons fas fa-bell"></i>
                        Notifications
                    </li>
                </ul>
                
            </nav>
        )
    }

}

export default Navbar