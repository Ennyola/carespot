import '../public/css/navbar.css'
import React, {Component} from 'react'
import  faker from 'faker'


class Navbar extends Component{
    render(){
        return(
            <nav className = "Navbar">
                <span className = "brand">
                    <i class="fas fa-heartbeat"></i>
                    <span className = "logo"> Carespot </span> - Ilara Health medical clinic
                </span>

            
                <span className = "nav-config">
                    <ul className = "nav">
                       <li > <i class="fas fa-cog"></i> </li>
                       <li> <i class="fas fa-bell"></i> </li>
                       <li> 
                         <img src={faker.image.avatar()} alt="avatar"/>
                         <span className = "username"> John Smith </span>
                        </li>
                       <li> <i class="fas fa-angle-down"></i> </li>
                    </ul>
                </span>
                
            </nav>
        )
    }

}

export default Navbar