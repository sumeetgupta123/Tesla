import React, { Component } from 'react'
import loader from '../assets/loading.gif'

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-container"> 
            <div className="loader-child">
            <img className="loader-gif" src={loader} alt="loading please wait"/>

            </div>
            </div>
        )
    }
}

