import React, {Component} from 'react'

class TestList extends Component{
    render(){
        return(
            <div className = "test-list">
                <div className = "search">
                    <i className="fas fa-search"></i>
                    <input type="text" className = "form-control" placeholder = "search patients"/>
                </div>
                <div className = "list">
                    <div className = "result-list">
                        <div className = "first-item">
                            <div className="row">
                                <span className = "sample-result"> Homoglobin (Mass/Volume) In Blood </span>
                            </div>
                            <div className="row">
                                <div> 
                                    <i className="fas fa-user"></i> 
                                    Elly Chemjor
                                </div>
                                <div>
                                    <i className="fas fa-stethoscope"></i>
                                    Dr. Matiko
                                </div> 
                            </div>  
                        </div>
                            
                        <div className = "second-item">
                            <div className="row">
                               <span className = "rate"> Normal 6.1%  </span>
                            </div>
                            <div className="row">
                                26/02/20
                            </div>     
                        </div>
                        
                    </div>
                    
                    
                    
                    <div className = "result-list">
                        <div className = "first-item">
                            <div className="row">
                                <span className = "sample-result"> Homoglobin (Mass/Volume) In Blood </span>
                            </div>
                            <div className="row">
                                <div> 
                                    <i className="fas fa-user"></i> 
                                    Elly Chemjor
                                </div>
                                <div>
                                    <i className="fas fa-stethoscope"></i>
                                    Dr. Matiko
                                </div> 
                            </div>  
                        </div>
                            
                        <div className = "second-item">
                            <div className="row">
                                <span className = "rate"> Normal 6.1%  </span>
                            </div>
                            <div className="row">
                                26/02/20
                            </div>     
                        </div>  
                    </div>
                    
                    <div className = "result-list">
                        <div className = "first-item">
                            <div className="row">
                                <span className = "sample-result"> Homoglobin (Mass/Volume) In Blood </span>
                            </div>
                            <div className="row">
                                <div> 
                                    <i className="fas fa-user"></i> 
                                    Elly Chemjor
                                </div>
                                <div>
                                    <i className="fas fa-stethoscope"></i>
                                    Dr. Matiko
                                </div> 
                            </div>  
                        </div>
                            
                        <div className = "second-item">
                            <div className="row">
                                <span className = "rate"> Normal 6.1%  </span>
                            </div>
                            <div className="row">
                                26/02/20
                            </div>     
                        </div>  
                    </div>
                    
                </div>
                
                
            </div>
        )
            
        
    }
}
export default TestList