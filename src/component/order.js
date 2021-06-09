import React from 'react';

import WhiteFront from '../assets/white-s.jpg';
import WhiteSide from '../assets/whiteside.JPG';
import WhiteRear from '../assets/whiterear.JPG';

import RedFront from '../assets/redmodelS.jpg';
import RedSide from '../assets/redside.JPG';
import RedRear from '../assets/redrear.JPG';


import BlackFront from '../assets/blackmodelS.png';
import BlackSide from '../assets/blackside.JPG';
import BlackRear from '../assets/blackrear.JPG';

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            Color: [
                {
                    carmodel: {
                        white: WhiteFront,
                        red: RedFront,
                        black: BlackFront
                    }
                },
                {
                    carmodel: {
                        white: WhiteSide,
                        red: RedSide,
                        black: BlackSide
                    }
                },
                {
                    carmodel: {
                        white: WhiteRear,
                        red: RedRear,
                        black: BlackRear
                    }
                },
            ],
            Interior: [
                { name: "All Black", color: "black" , price : 0 },
                { name: "Walnut Beige ", color: "beige" , price : 2000},
                { name: "All White ", color: "white" , price : 2000},
            ],
        }
    }

 
    componentDidMount = () => {
        fetch('https://tesla-app-server.herokuapp.com/models/modelS/configure')
            .then(res => res.json())
            .then(orders => {
                console.log(orders);
                this.setState({ orders })
            })
        this.setState({
            ...this.state,
        })

    }
    handleClick() {
        this.setState({
            SelfDrive: !this.state.SelfDrive
        })
    }
    render() {
        const { orders, Color, Interior } = this.state; //de-structuring of state
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="col-12 float-left no_pad order-container" >
                <div className="col-12 col-md-12 col-xl-8 float-left no_pad fixed-layout">
                    <div className="col-12 float-left no_pad">
                        <Slider className="Slider" {...settings}>
                            {Color.map((u, i) => (0 === this.props.activeColorIndex ? <div key={i}>
                                <img src={u.carmodel.white} alt={i} className="model-tesla" />
                            </div> : null))}
                            {Color.map((u, i) => (1 === this.props.activeColorIndex ? <div key={i}>
                                <img src={u.carmodel.red} alt={i} className="model-tesla" />
                            </div> : null))}
                            {Color.map((u, i) => (2 === this.props.activeColorIndex ? <div key={i}>
                                <img src={u.carmodel.black} alt={i} className="model-tesla" />
                            </div> : null))}
                        </Slider>
      
                    </div>

                </div>
                <div className="col-12 col-md-12 col-xl-4 float-left no_pad scroll-layout">
                    <div className="col-12 float-left no_pad mt-40">
                        <h1 className="align-center">{this.props.carName}</h1>
                    </div>
                    {orders && <div className="col-12 float-left no_pad height-50">
                        {orders.variants.map((u, i) => (<div key={i} className="col-12 float-left no_pad car-specsinfo">
                            <div className="col-4 float-left">
                                <label className="col-12 float-left head">{i === this.props.activeIndex ? orders.variants[i].range + 'Mi' : ''}</label>
                                <span className="col-12 float-left values">{i === this.props.activeIndex ? 'Est. Range' : ''}</span>
                            </div>
                            <div className="col-4 float-left">
                                <label className="col-12 float-left head">{i === this.props.activeIndex ? orders.variants[i].topSpeed + 'Mph' : ''}</label>
                                <span className="col-12 float-left values">{i === this.props.activeIndex ? 'Top Speed' : ''}</span>
                            </div>
                            <div className="col-4 float-left">
                                <label className="col-12 float-left head">{i === this.props.activeIndex ? orders.variants[i].acceleration.time + 's' : ''}</label>
                                <span className="col-12 float-left values">{i === this.props.activeIndex ? '0-60 Mph' : ''}</span>
                            </div>

                        </div>
                        ))}
                    </div>}

                    {orders && <div className="col-12 float-left no_pad mt-40 align-center">
                        {orders.variants.map((u, i) => (
                            <button
                                className={i === this.props.activeIndex ? 'col-10 category-btn Selected' : 'col-10 category-btn'}
                                onClick={() => this.props.setCarDetails(u, i,u.price)}
                                key={i} >
                                <span className="col-6 float-left">{orders.variants[i].variantName}</span>
                                <span className="col-6 float-right">$ {orders.variants[i].price}</span>

                            </button>
                        ))}
                    </div>}
                    <div className="col-12 float-left no_pad mt-20 align-center">
                        <h2>Paint</h2>
                        {orders && <div className="col-12 float-left mt-40">
                            {orders.paints.map((u, i) => (
                                <button
                                    className={i === this.props.activeColorIndex ? 'paint-btn Selected' : 'paint-btn'}
                                    onClick={() => this.props.setCarColor(u,i,u.price)}
                                    key={i}>
                                    <img src={orders.paints[i].src} alt={i} className="paint-img" />
                                    <span className="color-name">{i === this.props.activeColorIndex ? orders.paints[i].name : ''}</span>
                                    <span className="color-price">{i === this.props.activeColorIndex ? (orders.paints[i].price === 0 ? 'Included' : '$' + orders.paints[i].price) : ''}</span>

                                </button>
                            ))}
                        </div>}
                    </div>
                    <div className="col-12 float-left no_pad mt-80 align-center">
                        <h2>Wheels</h2>
                        {orders && <div className="col-12 float-left mt-40">
                            {orders.wheels.map((u, i) => (
                                <button
                                    className={i === this.props.activeWheelIndex ? 'wheel-btn Selected' : 'wheel-btn'}
                                    onClick={() => this.props.setCarWheel(u,i,u.price)}
                                    key={i}>
                                    <img src={orders.wheels[i].src} alt="{i}" className="wheel-img" />
                                    <span className="wheel-name">{i === this.props.activeWheelIndex ? orders.wheels[i].name : ''}</span>
                                    <span className="wheel-price">{i === this.props.activeWheelIndex ? (orders.wheels[i].price === 0 ? 'Included' : '$' + orders.wheels[i].price) : ''}</span>

                                </button>
                            ))}
                        </div>}
                    </div>
                    <div className="col-12 float-left no_pad mt-80 align-center">
                        <h2>Interiors</h2>
                        {Interior && <div className="col-12 float-left mt-40">
                            {Interior.map((u, i) => (
                                <button
                                    className={i === this.props.activeInteriorIndex ? 'paint-btn Selected' : 'paint-btn'}
                                    onClick={() => this.props.setCarInterior(u,i,u.price)} id={i}
                                    key={i} style={{ backgroundColor: u.color }}>
                                    <span className="color-name">{i === this.props.activeInteriorIndex ? u.name : ''}</span>
                                    <span className="color-price">{i === this.props.activeInteriorIndex ? (u.price === 0 ? 'Included' : '$' + u.price) : ''}</span>

                                </button>
                            ))}
                        </div>}
                    </div>
                    <div className="col-12 float-left mt-80 ">
                        <h3 className="align-center ">Full Self-Drving Capabilities</h3>
                        {orders && <span className="col-12 float-left align-center" style={{ color: "gray" }}>${orders.selfDriving.price}</span>}
                        <ul>
                        <li className="col-12 float-left head-rule mt-20">Navigate on Autopilot </li>
                        <li className="col-12 float-left head-rule">Auto lane change </li>
                        <li className="col-12 float-left head-rule"> Auto parking</li>
                        <li className="col-12 float-left head-rule"> Summon</li>
                        <li className="col-12 float-left head-rule"> Full self-Driving Computer</li>
                        <li className="col-12 float-left head-rule"> Traffic-light and stop sign control</li>
                        </ul>
                   
                        <div className="col-12 float-left no_pad align-center">
                            <button className="self-btn mt-20" onClick={this.handleClick} >{this.state.SelfDrive ? 'Remove' : 'Add'}</button>
                        </div>
                    </div>
                    <div className="col-12 float-left no_pad mt-40 align-center">
                        <h2>Order your Model S </h2>
                        <span className="col-12 float-left values"> Estimated Delivery : 6 - 8 Weeks</span>
                        {orders && <Link to="/OrderPlaced"  onClick={() => this.props.changeOrderState(orders)}>
                            <button className="btn orderplace-btn mt-20" >ORDER</button>
                        </Link>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Order