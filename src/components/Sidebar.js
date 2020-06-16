import '../public/css/sidebar.css'
import React, {Component} from 'react'

class Sidebar extends Component{

    render(){
        return(
            <aside className = "Sidebar">
                <ul>
                    <li> <i className="side-icons fas fa-th"></i> Dashboard </li>
                    <li><i className="side-icons fas fa-user"></i> Patients</li>
                    <li> <i className="side-icons fas fa-vial"></i> Lab Tests</li>
                    <li><i className="side-icons far fa-comment-alt"></i> Messaging</li>
                    <li> <i className="side-icons far fa-heart"></i>Loyalty</li>
                </ul>
                
            </aside>
        )
    }
}
export default Sidebar