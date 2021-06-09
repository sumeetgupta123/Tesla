import React from 'react'
import check from '../assets/check.jpg';
import happy from '../assets/happy.JPG';

import WhiteFront from '../assets/white-s.jpg';
import RedFront from '../assets/redmodelS.jpg';
import BlackFront from '../assets/blackmodelS.png';

import { Link } from 'react-router-dom';
// import html2canvas from 'html2canvas'
// import { jsPDF } from "jspdf";
class OrderPlaced extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedCars: [{ model: WhiteFront }, { model: RedFront }, { model: BlackFront }],
            totalPriceupdate:null
            
        }
      
    }
    componentDidMount = () => {
        fetch('https://tesla-app-server.herokuapp.com/models/modelS/configure')
            .then(res => res.json())
            .then(orderplace => {
                this.setState({ 
                    orderplace,
                    totalPriceupdate : this.props.total  + this.props.variantPrice + this.props.colorPrice + this.props.wheelPrice + this.props.interiorPrice + orderplace.selfDriving.price
                
                })
            })
         console.log(this.state.totalPriceupdate, this.props.variantPrice);
    }
    printReceipt() {
        window.print();
    }

    // savePDF() {

    //     const printArea = document.getElementById("printWrapper");

    //     html2canvas(printArea).then(canvas => {
    //         const dataURL = canvas.toDataURL();
    //         var doc = new jsPDF("p", "px", "a4");

    //         var width = doc.internal.pageSize.getWidth();
    //         var height = doc.internal.pageSize.getHeight();
    //         doc.addImage(dataURL, 'JPEG', 0, 0, width, height);

    //         doc.save('saved.pdf')
    //     })

    // }
    render() {
        const { orderplace, SelectedCars } = this.state;
  
        return (
            <div>


                <div className="col-12 float-left parent-container align-center" id="printWrapper"  >

                    <div className="col-12 float-left mt-80 flex-box">
                        <img src={check} alt="check" style={{ height: '50px' }} />
                        <h2>Your Order Is Complete</h2>
                    </div>
                    <div className="col-12 float-left mt-20 flex-box">
                        <img src={happy} alt="happy" />
                    </div>
                    <div className="col-12 float-left mt-40 flex-box">
                        <h1>{this.props.carName}</h1>

                    </div>
                    {this.props.selectedCarModel && <div className="col-12 float-left pad-0-150">
                        <div className="col-4 float-left">
                            <label className="col-12 float-left head">{this.props.selectedCarModel.range} Mi</label>
                            <span className="col-12 float-left values">Est. Range</span>
                        </div>
                        <div className="col-4 float-left">
                            <label className="col-12 float-left head">{this.props.selectedCarModel.topSpeed} Mph</label>
                            <span className="col-12 float-left values">Top Speed</span>
                        </div>
                        <div className="col-4 float-left">
                            <label className="col-12 float-left head">{this.props.selectedCarModel.acceleration.time} Sec</label>
                            <span className="col-12 float-left values">0-60 mph</span>
                        </div>

                    </div>}
                    <div className="col-12 float-left flex-box">
                        {SelectedCars.map((u, i) => (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <img src={this.props.activeColorIndex === i ? u.model : null} key={i} style={{ width: (this.props.activeColorIndex === i ? '40%' : '0%') }} />
                        ))}
                    </div>
                    <div className="col-12 float-left no_pad mt-40 flex-box pad-0-35">
                        {this.props.selectedCarModel && <button
                            className="col-10 category-btn no_pad Selected">
                            <span className="col-6 float-left ">{this.props.selectedCarModel.variantName}</span>
                            <span className="col-6 float-right">$ {this.props.selectedCarModel.price}</span>
                        </button>}

                    </div>
                    <div>
                        <div className="col-12 float-left pad-0-35 d-flex mt-20">
                            {this.props.selectedCarColor && <span className="col-6 float-left">
                                <span className="col-12 float-left head-order" >{this.props.selectedCarColor.name}</span>
                                <span className="col-12 float-left values-order" >{this.props.selectedCarColor.price === 0 ? 'Included' : '$' + this.props.selectedCarColor.price}</span>
                            </span>}
                            {this.props.selectedCarColor && <div className="col-6 float-left align-center ">
                                <img src={this.props.selectedCarColor.src} alt="{i}" className="paint-image" />
                            </div>}
                        </div>
                        {this.props.selectedCarWheel && <div className="col-12 float-left pad-0-35 d-flex mt-40">
                            <span className="col-6 float-left">
                                <span className="col-12 float-left head-order" >{this.props.selectedCarWheel.name}</span>
                                <span className="col-12 float-left values-order" >{this.props.selectedCarWheel.price === 0 ? 'Included' : '$' + this.props.selectedCarWheel.price}</span>
                            </span>
                            <div className="col-6 float-left align-center ">
                                <img src={this.props.selectedCarWheel.src} alt="{i}" className="wheel-img-order" />
                            </div>
                        </div>}
                        {this.props.selectedCarInterior && <div className="col-12 float-left pad-0-35 d-flex mt-40">
                            <span className="col-6 float-left">
                                <span className="col-12 float-left head-order" >{this.props.selectedCarInterior.name}</span>
                                <span className="col-12 float-left values-order" >{this.props.selectedCarInterior.price === 0 ? 'Included' : '$' + this.props.selectedCarInterior.price}</span>
                            </span>
                            <div className="col-6 float-left align-center ">
                                {/* <img src={this.props.selectedCarColor.src} alt="{i}" className="paint-image" /> */}
                                <button className="paint-btn" style={{ backgroundColor: this.props.selectedCarInterior.color }}></button>
                            </div>
                        </div>}
                        {orderplace && <div className="col-12 float-left pad-0-35 d-flex mt-40">
                            <span className="col-12 float-left">
                                <span className="col-12 float-left head-order" >Full Self Driving Capability</span>
                                <span className="col-12 float-left values-order" >${orderplace.selfDriving.price}</span>
                            </span>
                        </div>}
                        <div className="col-12 float-left no_pad flex-box mt-40">
                            <span className="final-price">${this.state.totalPriceupdate}
                    </span>
                        </div>
                        <div className="col-12 float-left no_pad flex-box mt-40 mb-100">
                            <span>
                                <Link to="/Cardetails">
                                    <button className="explore-btn mb-20" >Explore {this.props.carName} </button>
                                </Link>

                                <button className="invoice-btn mb-20" onClick={this.printReceipt}>Download Invoice</button>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderPlaced