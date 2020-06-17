import '../public/css/body.css'
import React, {Component} from 'react'

import TestList from './TestList'
import SampleDetails from './SampleDetails'
import Results from './Results'

class Body extends Component{
    render(){
        return(
            <section className = "body-section">
                    <div className = "row">
                        <div className="col-md-6">
                            <TestList/>
                        </div>
                        <div className="col-md-6">
                            <div className = "row">
                                <SampleDetails/>
                            </div>
                            <div className="row">
                                <Results/>
                            </div>  
                        </div>
                    </div>
            </section>
        )
    }
}

export default Body