import '../public/css/lab.css'
import React, {Component} from 'react'


import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Body from './Body'

class Lab extends Component{
    render(){
        return(
            <div className = "Lab">
                <Navbar/>      
                    <div className="row">
                        <div className="col-md-2"><Sidebar/></div>
                        <div className="col-md-10"><Body/></div>
                    </div> 
            </div>
        )
    }

}

export default Lab