import React , {Component} from 'react'

class Results extends Component{
    render(){
        return(
            <div className = "test-results">
                <h5>Results</h5>
                <div className="row">
                    <div className="col-sm-5">
                        <p>MID count|10^3 uL|0.10-0.90</p>
                        5.3
                    </div>
                    <div className="col-sm-5">
                        <p>MID count|10^3 uL|0.10-0.90</p>
                            5.3

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                    <p>MID count|10^3 uL|0.10-0.90</p>
                        5.3
                    </div>
                    <div className="col-sm-5">
                    <p>MID count|10^3 uL|0.10-0.90</p>
                        <p>5.3</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                    <p>MID count|10^3 uL|0.10-0.90</p>
                        <p>5.3</p>
                    </div>
                    <div className="col-sm-5">
                    <p>MID count|10^3 uL|0.10-0.90</p>
                        <p>5.3</p>
                    </div>
                </div>
            <div className = "edit-values">
                <i className="fas fa-pen"></i>
                Edit values
            </div>
            </div>
        )
    }
}

export default Results