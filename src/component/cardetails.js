import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cardetails extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()  
        this.state = {
            showing: false,
            hiding: true
        }
    }
    componentDidMount = () => {
        fetch('https://tesla-app-server.herokuapp.com/models/modelS/configure')
            .then(res => res.json())
            .then(carSpecs => {
                console.log(carSpecs);
                this.setState({ carSpecs })
            })
    }
    executeScroll = () => this.myRef.current.scrollIntoView({ behavior: 'smooth' })
    render() {
        const { carSpecs, showing, hiding } = this.state;
        return (
            <div className="col-12 float-left no_pad">
                <div className="details-container">
                    <div className="col-12 details-top no_pad">
        <h2 className="col-12 float-left center"> {this.props.carName}</h2>
                        <img src={this.props.topwall} alt="car" className="top-img" />
                        <div className="col-12 align-center po-abs">
                            <Link to="/Order">
                                <button className="btn btn-dark order-btn  ">ORDER</button>
                            </Link>
                            <button className="scroller" onClick = {this.executeScroll}></button>
                        </div>

                    </div>
                    <div className="col-12 details-bottom no_pad" ref={this.myRef}>
                        <img src={this.props.BottomWall} alt="car" className="bottom-img" />
                        <div className="bottom-right">
                            {carSpecs && <h4 className="col-12 float-left">{this.props.carName} Specs</h4>}

                            <div className="col-12 float-left mt-40">
                                <div className="col-6 col-md-6 col-xl-4 float-left">
                                    {carSpecs && <button className="details-btn" style={{ backgroundColor: (hiding ? '#ffffff3d' : '') }} onClick={() => this.setState({ showing: false, hiding: true })}>{carSpecs.variants[0].variantName}</button>}
                                </div>
                                <div className="col-6 col-md-6 col-xl-8 float-left">
                                    {carSpecs && <button className="details-btn" style={{ backgroundColor: (showing ? '#ffffff3d' : '') }} onClick={() => this.setState({ showing: true, hiding: false })}>{carSpecs.variants[1].variantName}</button>}
                                </div>
                                {carSpecs && <div style={{ display: (showing ? 'block' : 'none') }} className=" col-12 float-left no_pad">
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Range</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].range} Mi</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Power train</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].powertrain}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Peak Power</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].peakPower}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Acceleration</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].acceleration.speed}s {carSpecs.variants[1].acceleration.time}mph</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Top Speed</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].topSpeed} Mph</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Drag Coefficient</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].dragCoefficient}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Weight</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].weight} Lbs</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Wheels</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].wheels[0]}" or {carSpecs.variants[1].wheels[1]}"</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Cargo Capacity</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].cargo}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Charging</label>
                                        <span className="col-12 float-left">{carSpecs.variants[1].superchargingMax}</span>
                                    </div>
                                </div>}
                                {carSpecs && <div style={{ display: (hiding ? 'block' : 'none') }} className=" col-12 float-left no_pad">
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Range</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].range}Mi</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Power train</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].powertrain}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Peak Power</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].peakPower}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Acceleration</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].acceleration.speed}s {carSpecs.variants[0].acceleration.time}mph</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Top Speed</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].topSpeed} Mph</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Drag Coefficient</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].dragCoefficient}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Weight</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].weight} Lbs</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Wheels</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].wheels[0]}" or {carSpecs.variants[0].wheels[1]}"</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Cargo Capacity</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].cargo}</span>
                                    </div>
                                    <div className="col-6 float-left">
                                        <label className="col-12 float-left">Charging</label>
                                        <span className="col-12 float-left">{carSpecs.variants[0].superchargingMax}</span>
                                    </div>
                                </div>}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


export default Cardetails