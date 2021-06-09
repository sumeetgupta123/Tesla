import React, { Component } from 'react'
import banner from '../../assets/banner.jpg'
import './landing.css'
export default class Viewmore extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="col-12 top-card">
                    <p>Home / Dashboard / View more</p>
                </div>
                <div className="col-12 float-left more-wrap">
                    <img src={banner} alt="banner" className="banner" />
                    <div className="col-12 float-left my-5">
                        <h5 className="float-left">{this.props.cropName} Crop Insurance</h5>
                        <button className="float-right account-btn">Buy now</button>
                    </div>
                    <div className="col-12 float-left ">
                        <span className="col-12 float-left p-0 label-more my-3">Eligibility</span>
                        <span className="col-12 float-left p-0 sub-label ">Upper age : {this.props.CropDetails.upperAge}</span>
                        <span className="col-12 float-left p-0 sub-label ">Lower age : {this.props.CropDetails.lowerAge} </span>
                        <span className="col-12 float-left p-0 sub-label ">Policy aplicable for: {this.props.CropDetails.loanee}</span>
                        <span className="col-12 float-left p-0 sub-label ">Minimum Farm Land Area Required : {this.props.CropDetails.minimumFarmLandArea}</span>
                        <span className="col-12 float-left p-0 sub-label ">Maximum Farm Land Area Permitted : {this.props.CropDetails.maximumFarmLandArea}</span>
                        <span className="col-12 float-left p-0 sub-label ">Additional Eligibility Criteria : {this.props.CropDetails.additionalEligibility} </span>
                    </div>
                    <div className="col-12 float-left ">
                        <span className="col-12 float-left p-0 label-more my-3">Crops Covered Under Schemes</span>
                        <span className="col-12 float-left p-0 sub-label ">Crop season : {this.props.CropDetails.cropSeason}</span>
                        <span className="col-12 float-left p-0 sub-label ">Crop : {this.props.CropDetails.crop} </span>
                    </div>
                    <div className="col-12 float-left ">
                        <span className="col-12 float-left p-0 label-more my-3">Risk Covered Under Scheme</span>
                        <span className="col-12 float-left p-0 sub-label ">Prevented Sowing/Planting Risk : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>           
                        <span className="col-12 float-left p-0 sub-label my-3">Standing Crop (Sowing to Harvesting) : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>
                    </div>
                    <div className="col-12 float-left ">
                        <span className="col-12 float-left p-0 label-more my-3">Additional Features</span>
                        <span className="col-12 float-left p-0 sub-label ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>
                        <span className="col-12 float-left p-0 sub-label my-3">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>           
                    </div>
                    <div className="col-12 float-left ">
                        <span className="col-12 float-left p-0 label-more my-3">Premium Rates & Subsidies</span>
                        <span className="col-12 float-left p-0 sub-label ">{this.props.CropDetails.premiumRatesAndSubsidies}</span>
                       
                    </div>
                    <div className="col-12 float-left ">
                        <span className="col-12 float-left p-0 label-more my-3">Other Details</span>
                        <span className="col-12 float-left p-0 sub-label ">Is the policy reinsured : {this.props.CropDetails.reinsured ? 'Yes':'No'}</span>
                        <span className="col-12 float-left p-0 sub-label ">Does this policy allow for the policy transfer from any other existing policy ?  : {this.props.CropDetails.policyTransfer ? 'Yes':'No'}</span>
                       
                    </div>
                    <div className="col-12 float-left my-5 centeralign">
                 
                        <button className="account-btn">Buy now</button>
                    </div>
                </div>

            </div>
        )
    }
}
