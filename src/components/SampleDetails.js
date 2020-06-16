import React, { Component } from 'react'

class SampleDetails extends Component{
    render(){
        return(
            <div className = "sample-details">
                <div className = "details-header">
                    <h5>Homoglobin</h5>
                    <p className = "rate">Normal 6.1%</p>
                </div>
                <div className = "details-body">
                    <div>
                        <i className="fas fa-user"></i> 
                        Elly Chemjor
                    </div>
                    <div>
                        <i className="fas fa-stethoscope"></i>
                        Dr. Matiko
                    </div> 
                    <div>
                        <i className="fas fa-calendar"></i>
                        26/02/20
                    </div>
                    <div>
                        <i className="fas fa-x-ray"></i>
                        Hemocue
                    </div>
                    <div>
                        <i className="fas fa-file-medical-alt"></i>
                        Manual
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
export default SampleDetails