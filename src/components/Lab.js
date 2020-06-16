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
                <Sidebar/>
                <Body/>
            </div>
        )
    }

}

export default Lab