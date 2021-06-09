import React, { Component } from 'react'
import Head from './head'
import Nav from './nav'
import Dashboard from './dashboard'
import Account from './account'
import Viewmore from './Viewmore'
import './landing.css'
import Policy from './policy'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';

export default class landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            CropDetails: [{ crop: '' }],
            cropName: null,
        }
    }
    changeState = (Cropdata, cropName) => {
        this.setState({
            CropDetails: Cropdata,
            cropName: cropName
        }, () => {
            console.log(this.state.CropDetails, this.state.cropName)
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <Head />
                    <Nav />
                    <Switch>
                    <Redirect exact from="/landing" to="/dashboard" />
                        <Route exact path="/dashboard" >
                            <div className="col-12 float-left container-dash">
                                <Dashboard changeState={this.changeState}/>
                            </div>
                        </Route>
                        <Route exact path="/account" >
                            <div className="col-12 float-left container-dash">
                                <Account />
                            </div>
                        </Route>
                     
                        <Route exact path="/viewmore" >
                            <div className="col-12 float-left container-dash">
                                <Viewmore CropDetails={this.state.CropDetails} cropName={this.state.cropName} />
                            </div>
                        </Route>
                        <Route exact path="/education" >
                            <div className="col-12 float-left container-dash">
                                <Policy />
                            </div>
                        </Route>
                     
                    </Switch>
                </div>
            </Router>
        )
    }
}
