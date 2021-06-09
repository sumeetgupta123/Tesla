import React, { Component } from 'react'
import logo from '../../assets/black-tesla.jpg'

export default class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="col-12 float-left Account-container">
                    <div className="col-12 float-left Account-card">
                    <div className="col-12 float-left my-3">
                        <div className="col-4 float-left alignitem">
                            <span className="circle float-left">1
                            <span className="line"></span>
                            </span>
                            <img src={logo} alt="farmer" className="farmer-logo float-left" />
                        </div>
                        <div className="col-8 float-left ">
                            <h4>Become a Seller</h4>
                            <p className="my-3">In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the visual
                            form of a document or a typefacewithout relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>
                    </div>
                    <div className="col-12 float-left my-3">
                        <div className="col-4 float-left alignitem">
                            <span className="circle float-left">2
                            <span className="line"></span>
                            </span>
                            <img src={logo} alt="farmer" className="farmer-logo float-left" />
                        </div>
                        <div className="col-8 float-left ">
                            <h4>Farmer buy insurance</h4>
                            <p className="my-3">In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the visual
                            form of a document or a typefacewithout relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>
                    </div>
                    <div className="col-12 float-left my-3">
                        <div className="col-4 float-left alignitem">
                            <span className="circle float-left">3
                            <span className="line"></span>
                            </span>
                            <img src={logo} alt="farmer" className="farmer-logo float-left" />
                        </div>
                        <div className="col-8 float-left ">
                            <h4>You approve insurance</h4>
                            <p className="my-3">In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the visual
                            form of a document or a typefacewithout relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>
                    </div>
                    <div className="col-12 float-left my-3">
                        <div className="col-4 float-left alignitem">
                            <span className="circle float-left">4
                          
                            </span>
                            <img src={logo} alt="farmer" className="farmer-logo float-left" />
                        </div>
                        <div className="col-8 float-left ">
                            <h4>You get paid</h4>
                            <p className="my-3">In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the visual
                            form of a document or a typefacewithout relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>
                    </div>
                    <div className="col-12 float-left my-3 centeralign">
                        <button className="account-btn">Get started</button>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}
