import React, { Component } from 'react'

class ResultDetails extends Component{
    render(){
        return(
            <div className = "result-details">
                <div className = "details-header">
                    <h4>Homoglobin</h4>
                    <p>Normal 6.1%</p>
                </div>
                <div className = "details-body">
                    <div>
                        <i className="fas fa-user"></i> 
                        Elly Chemjor
                    </div>
                    <div>
                        <i class="fas fa-stethoscope"></i>
                        Dr. Matiko
                    </div> 
                    <div>
                        <i class="fas fa-calendar"></i>
                        26/02/20
                    </div>
                    <div>
                        <i class="fas fa-x-ray"></i>
                        Hemocue
                    </div>
                    <div>
                        <i class="fas fa-file-medical-alt"></i>
                        Manual
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
export default ResultDetails