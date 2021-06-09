import React from 'react'
import logo from '../../assets/logo.png'
import notify from '../../assets/about.png'

export default function head() {
    return (
        <div>
            <div className="col-12 float-left headorder">
                <img src={logo} alt="logo" className="head-img"></img>
                <div className="float-right">
                    <button className="butn">
                        <img src={notify} alt="notify" className="notify-img"></img>
                    </button>
                    <button className="butn">
                        <img src={notify} alt="notify" className="notify-img"></img>
                    </button>
                    <button className="butn">
                        <img src={notify} alt="notify" className="notify-img"></img>
                        <span className="count">12</span>
                    </button>
                    <button className="butn">
                        <img src={notify} alt="notify" className="notify-img"></img>
                      Send me
                    </button>
                </div>
            </div>
        </div>
    )
}
