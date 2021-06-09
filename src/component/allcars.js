import React, { Component } from 'react'
import Logo1 from '../assets/home.png';
import Logo2 from '../assets/modelthree.jpg';
import Logo3 from '../assets/modelx.jpg';
import Logo4 from '../assets/modely.jpg';
import { Link } from 'react-router-dom';
import Loader from './Loader'
class Allcars extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: null,
            topwall: [Logo1, Logo2, Logo3, Logo4],

        };
    }


    componentDidMount = () => {
        // fetch('https://tesla-app-server.herokuapp.com/models/all')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({ data })
        //     })
        setTimeout(() => {
            this.props.getcarloader()
        }, 500);
    
    }
 


    render() {
        const { topwall } = this.state;
        return (
            <div className="col-12 float-left child-container">               
                {this.props.loading ? <Loader /> : null}
                <div className="col-12 child-heading"><h5>ALL MODELS</h5></div>
                <div className="col-12 float-left mt-70">
                    {this.props.data && this.props.data.elements.map((user, j) => (<div key={j} id={j}>
                        <Link to="/Cardetails" onClick={() => this.props.changeState(user.displayName,user.range,topwall[j],user)}>
                            <div className="col-12 col-md-6 col-xl-3 float-left " key={j} id={j}>
                                <div className="car-cards">
                                    <img src={topwall[j]} alt={j} className="car-image" />

                                    <span className="col-6 float-left displayname my-1">{user.displayName}</span>
                                    <span className="col-6 float-right range my-1">{user.range}Mi</span>
                                    <div className="col-12 float-left no_pad my-1">
                                        <span className="col-3 float-left value">{user.acceleration ? user.acceleration.time : 'N/A'}s</span>
                                        <span className="col-3 float-left value">{user.topSpeed ? user.topSpeed : 'N/A'} Mph</span>
                                        <span className="col-3 float-left value">{user.peakPower ? user.peakPower : 'N/A'} HP</span>
                                        <span className="col-3 float-left value">$78490</span>

                                    </div>
                                    <div className="col-12 float-left no_pad my-1">
                                        <span className="col-3 float-left label-cr">0-60</span>
                                        <span className="col-3 float-left label-cr">Top speed</span>
                                        <span className="col-3 float-left label-cr">peak power</span>
                                        <span className="col-3 float-left label-cr">starts</span>

                                    </div>

                                </div>
                            </div>

                        </Link>
                    </div>))}
                </div>
            </div>
        )
    }
}

export default Allcars