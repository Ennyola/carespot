import React, { Component } from 'react'

class SampleDetails extends Component{
    render(){
        return(
            <div className = "sample-details">
                <div className = "details-header">
                    <h5>Homoglobin</h5>
                    <p className = "rate">Normal 6.1%</p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <span>
                            <i className="details-icon fas fa-user"></i> 
                            Elly Chemjor
                        </span>
                    </div>
                    <div className="col-md-4">
                        <span>
                            <i className="details-icon fas fa-stethoscope"></i>
                            Dr. Matiko
                        </span> 
                    </div>
                    <div className="col-md-4">
                        <span>
                            <i className="details-icon fas fa-calendar"></i>
                            26/02/20
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <span>
                            <i className="details-icon fas fa-x-ray"></i>
                            Hemocue
                        </span>
                    </div>
                    <div className="col-md-4">
                        <span>
                            <i className="details-icon fas fa-file-medical-alt"></i>
                            Manual
                        </span> 
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
            </div>
        )
    }
}
export default SampleDetails