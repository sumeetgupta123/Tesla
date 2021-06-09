import React, { Component } from 'react'
import tag from '../../assets/about.png'
import { Link } from 'react-router-dom';

export default class dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

            Insurance: [
                {
                    "additionalEligibility": "Additonal Info by Seller",
                    "additionalFeatures": "string",
                    "createdOn": "2021-05-20T06:16:19.991Z",
                    "crop": "Rice",
                    "cropSeason": "kharif",
                    "id": 0,
                    "loanee": "Loanee, Non-Loanee",
                    "lowerAge": "55 years",
                    "maximumFarmLandArea": "25 Hectares",
                    "minimumFarmLandArea": "2 Hectared",
                    "name": "pradhan Mantri Fasal Bima Yojna",
                    "policyTransfer": true,
                    "premiumRatesAndSubsidies": "2.0% of Si or Actuarial rate whichever is less and 5%of SI for annuak commercial/Horticultural Crop",
                    "reinsured": true,
                    "riskType": "string",
                    "sellerId": 0,
                    "status": true,
                    "upperAge": "25 years"
                },
                {
                    "additionalEligibility": "Additonal Info by Seller",
                    "additionalFeatures": "string",
                    "createdOn": "2021-05-20T06:16:19.991Z",
                    "crop": "Paddy",
                    "cropSeason": "rabi",
                    "id": 1,
                    "loanee": "Loanee, Non-Loanee",
                    "lowerAge": "55 years",
                    "maximumFarmLandArea": "25 Hectares",
                    "minimumFarmLandArea": "2 Hectared",
                    "name": "pradhan Mantri Fasal Bima Yojna",
                    "policyTransfer": false,
                    "premiumRatesAndSubsidies": "2.0% of Si or Actuarial rate whichever is less and 5%of SI for annuak commercial/Horticultural Crop",
                    "reinsured": false,
                    "riskType": "string",
                    "sellerId": 0,
                    "status": true,
                    "upperAge": "25 years"
                },
                {
                    "additionalEligibility": "Additonal Info by Seller",
                    "additionalFeatures": "string",
                    "createdOn": "2021-05-20T06:16:19.991Z",
                    "crop": "Wheat",
                    "cropSeason": "rabi",
                    "id": 2,
                    "loanee": "Loanee, Non-Loanee",
                    "lowerAge": "55 years",
                    "maximumFarmLandArea": "25 Hectares",
                    "minimumFarmLandArea": "2 Hectared",
                    "name": "pradhan Mantri Fasal Bima Yojna",
                    "policyTransfer": true,
                    "premiumRatesAndSubsidies": "2.0% of Si or Actuarial rate whichever is less and 5%of SI for annuak commercial/Horticultural Crop",
                    "reinsured": false,
                    "riskType": "string",
                    "sellerId": 0,
                    "status": true,
                    "upperAge": "25 years"
                },
                {
                    "additionalEligibility": "Additonal Info by Seller",
                    "additionalFeatures": "string",
                    "createdOn": "2021-05-20T06:16:19.991Z",
                    "crop": "Oats",
                    "cropSeason": "zaid",
                    "id": 3,
                    "loanee": "Loanee, Non-Loanee",
                    "lowerAge": "55 years",
                    "maximumFarmLandArea": "25 Hectares",
                    "minimumFarmLandArea": "2 Hectared",
                    "name": "pradhan Mantri Fasal Bima Yojna",
                    "policyTransfer": false,
                    "premiumRatesAndSubsidies": "2.0% of Si or Actuarial rate whichever is less and 5%of SI for annuak commercial/Horticultural Crop",
                    "reinsured": true,
                    "riskType": "string",
                    "sellerId": 0,
                    "status": true,
                    "upperAge": "25 years"
                },
                {
                    "additionalEligibility": "Additonal Info by Seller",
                    "additionalFeatures": "string",
                    "createdOn": "2021-05-20T06:16:19.991Z",
                    "crop": "Barley",
                    "cropSeason": "Kharif",
                    "id": 4,
                    "loanee": "Loanee, Non-Loanee",
                    "lowerAge": "55 years",
                    "maximumFarmLandArea": "25 Hectares",
                    "minimumFarmLandArea": "2 Hectared",
                    "name": "pradhan Mantri Fasal Bima Yojna",
                    "policyTransfer": false,
                    "premiumRatesAndSubsidies": "2.0% of Si or Actuarial rate whichever is less and 5%of SI for annuak commercial/Horticultural Crop",
                    "reinsured": true,
                    "riskType": "string",
                    "sellerId": 0,
                    "status": true,
                    "upperAge": "25 years"
                }


            ]
        }
    }


    render() {
        return (
            <div>
                <div className="col-12 float-left top-card">
                    <p>Home / Dashboard</p>
                    <input type="text" placeholder="Search Insurance" className="Search-input" />
                    <button className="Search-btn">Search</button>
                </div>
                <div className="col-12 float-left">
                    <div className="col-12 help-card float-left">
                        <div className="col-8 float-left">
                            <h4>Need help picking Insurance</h4>
                            <p>Not Sure which Insurance is best for you, we are free to help you</p>
                        </div>
                        <div className="col-4 float-right">
                            <button className="Search-btn float-left my-3">Try our insurance finder</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 float-left my-2 p-0">
                    {this.state.Insurance.map((item, i) => (<div key={item.id} className="col-4 float-left">
                        <div className="col-12 float-left detail-card">
                            <img src={tag} alt="logo" className="tag-img float-left"></img>
                            <p className="col-8 float-left ">{item.name}</p>
                            <p className="float-right">{item.cropSeason}</p>
                            <div className="col-12 float-left p-0">
                                <div className="col-6 float-left p-0">
                                    <label className="col-12 float-left">Crop Name</label>
                                    <span className="col-12 float-left details">{item.crop}</span>
                                </div>
                                <div className="col-6 float-left p-0">
                                    <label className="col-12 float-left">Reinsured</label>
                                    <span className="col-12 float-left details">{item.reinsured ? 'Yes' : 'No'}</span>
                                </div>

                            </div>
                            <div className="col-12 float-left p-0 centeralign my-3" >
                                <Link to="/viewmore">
                                    <button className="read-btn" onClick={() => this.props.changeState(item, item.crop)}>Read more</button>
                                </Link>
                            </div>
                        </div>
                    </div>))}
                </div>

            </div>
        )
    }
}
