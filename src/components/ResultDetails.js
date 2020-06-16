import React, { Component } from 'react'

class ResultDetails extends Component{
    render(){
        return(
            <div className = "result-details">
                <div>
                    <h4>Homoglobin</h4>
                    <p>Normal 6.1%</p>
                </div>
                <div>
                    <div>
                        <i className="fas fa-user"></i> 
                        Elly Chemjor
                    </div>
                    <div>
                        <i class="fas fa-stethoscope"></i>
                        Dr. Matiko
                    </div> 
                    <div>
                        <i class="far fa-calendar"></i>
                        26/02/20
                    </div>
                    <div>
                        Manual
                    </div>
                    <div>

                    </div>
                    
                </div>
            </div>
        )
    }
}
export default ResultDetails