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
                       <li > <i className="fas fa-cog"></i> </li>
                       <li> <i className="fas fa-bell"></i> </li>
                       <li> 
                          <img src={faker.image.avatar()} alt="avatar"/>
                          <span className = "username"> John Smith </span>
                       </li>
                     <a href="" data-toggle = "collapse" data-target = "#links"> <li> <i className="fas fa-angle-down"></i> </li> </a>
                    </ul>
                </span>
                <ul className = "collapse" id = "links">
                    <li> <i className="side-icons fas fa-th"></i>  Dashboard</li>
                    <li><i className="side-icons fas fa-user"></i> Patients</li>
                    <li> <i className="side-icons fas fa-vial"></i> Lab Tests</li>
                    <li><i className="side-icons far fa-comment-alt"></i> Messaging</li>
                    <li> <i className="side-icons far fa-heart"></i>Loyalty</li>
                </ul>
                
            </nav>
        )
    }

}

export default Navbar