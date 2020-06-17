import React , {Component} from 'react'

class Results extends Component{
    render(){
        return(
            <div className = "test-results">
                <h5>Results</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <span>
                            MID count | 10^3 uL| 0.10-0.90 <br/>
                            <strong> 5.3  </strong>
                        </span>
                    </div>
                    <div className="col-sm-6">
                        <span>
                             Absolute LYM count| 10^3/uL | 0.60-4.10 
                             <br/>
                            <strong>3.2</strong>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <span>
                            MID count | 10^3 uL | 0.10-0.90 <br/>
                            <strong> 0.5  </strong>
                        </span>
                    </div>
                    <div className="col-sm-6">
                        <span>
                            GRA count | 10^3 uL | 2.00-7.8 <br/>
                            <strong> 10  </strong>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <span>
                            LYM % | % | 20.0-50.0 <br/>
                            <strong> 32</strong>
                        </span>
                    </div>
                    <div className="col-sm-6">
                        <span>
                            MID % | % | 3.0-10.0 <br/>
                            <strong> 0.5  </strong>
                        </span>
                    </div>
                </div>

                <button className = "btn btn-primary">
                    <i className="fas fa-pen"></i>
                    Edit values
                </button>
            </div>
        )
    }
}

export default Results