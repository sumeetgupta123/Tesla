import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Decline from './decline'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Policy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
            showAccount: false,
            HideAccount: true,
            tableRow: [
                { Code: '0987', Name: 'ABCD crop insurance', policyCount: '1,23,234', Newpolicy: '23,234' },
                { Code: '0987', Name: 'ABCD crop insurance', policyCount: '1,23,234', Newpolicy: '23,234' },
                { Code: '0987', Name: 'ABCD crop insurance', policyCount: '1,23,234', Newpolicy: '23,234' },
                { Code: '0987', Name: 'ABCD crop insurance', policyCount: '1,23,234', Newpolicy: '23,234' },
                { Code: '0987', Name: 'ABCD crop insurance', policyCount: '1,23,234', Newpolicy: '23,234' },
                { Code: '0987', Name: 'ABCD crop insurance', policyCount: '1,23,234', Newpolicy: '23,234' },
            ],
            tableRowAproval: [
                { Code: '0987', Name: 'Raj chowdhary', Age: '19', policytaken: 'ABCD crop insurance', location: 'Delhi' },
                { Code: '0987', Name: 'manoj', Age: '39', policytaken: 'ABsdCD crop insurance', location: 'Delhi' },
                { Code: '0987', Name: 'ABe sdfsd', Age: '29', policytaken: 'ABsdCD crop insurance', location: 'mumbai' },
                { Code: '0987', Name: 'AB sdfse', Age: '19', policytaken: 'AsdfBCD crop insurance', location: 'Delhi' },
                { Code: '0987', Name: 'AB dfge', Age: '59', policytaken: 'ABsdfCD crop insurance', location: 'Bangalore' },
                { Code: '0987', Name: 'AB fghtre', Age: '39', policytaken: 'AaBCD crop insurance', location: 'Jaipur' },
            ],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.ApprovedAccount = this.ApprovedAccount.bind(this);
        this.HideAccount = this.HideAccount.bind(this);

    }
    async ApprovedAccount() {
        this.setState({ showAccount: true, HideAccount: false })
    }
    async HideAccount() {
        this.setState({ showAccount: false, HideAccount: true })
    }
    async handleClick() {
        this.setState({ modalShow: true });
    }
    async handleHide() {
        this.setState({ modalShow: false });
    }
    render() {
        return (
            <div>
                <div className="col-12 float-left top-card">
                    <p>Home / Dashboard</p>
                    <input type="text bottom" placeholder="Search Insurance" className="Search-input" />
                    <button className="Search-btn bottom">Search</button>
                    <div className="col-12 float-left my-5">
                        <Tabs defaultActiveKey="All Policies" id="sellertabs"  >
                            <Tab eventKey="All Policies" title="All Policies" >
                                <div className="col-12 float-left top-card my-3">
                                    <div className="col-6 float-left my-3">
                                        <h3>Manage Policies </h3>
                                    </div>
                                    <div className="col-6 float-left my-3">
                                        <button className="account-btn float-right">Create New Policy</button>
                                    </div>
                                    <div className="col-12 float-left my-3">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Policy Code</th>
                                                    <th>Policy Name</th>
                                                    <th className="centeralign">No. of policy taken</th>
                                                    <th className="centeralign">No. of new application</th>
                                                    <th className="centeralign">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.tableRow.map((item, i) => (<tr key={i}>
                                                    <td >{item.Code}</td>
                                                    <td>{item.Name}</td>
                                                    <td className="centeralign">{item.policyCount}</td>
                                                    <td className="centeralign">{item.Newpolicy}</td>
                                                    <td className="col-12 float-left">
                                                        <button className="col-6 float-left edit-btn"> Edit</button>
                                                        <button className="col-6 float-left delete-btn"> Delete</button>
                                                    </td>
                                                </tr>))}
                                            </tbody>
                                        </Table>

                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Approval" title="Approval " >
                                {this.state.HideAccount && <div className="col-12 float-left top-card my-3">
                                    <div className="col-6 float-left my-3">
                                        <h3>Manage Policies </h3>
                                    </div>

                                    <div className="col-12 float-left my-3">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>Buyer Name</th>
                                                    <th className="centeralign">Age</th>
                                                    <th className="centeralign">Policy Taken</th>
                                                    <th className="centeralign">Location</th>
                                                    <th className="centeralign">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.state.tableRowAproval.map((item, i) => (<tr key={i}>
                                                    <td >{item.Code}</td>
                                                    <td>{item.Name}</td>
                                                    <td className="centeralign">{item.Age}</td>
                                                    <td className="centeralign">{item.policytaken}</td>
                                                    <td className="centeralign">{item.location}</td>
                                                    <td className="col-12 float-left">
                                                        <button className="col-6 float-left edit-btn" onClick={this.ApprovedAccount}> Approve</button>
                                                        <button className="col-6 float-left delete-btn" onClick={this.handleClick}> Decline</button>
                                                    </td>
                                                </tr>))}

                                            </tbody>
                                        </Table>
                                        <Decline
                                            show={this.state.modalShow}
                                            onHide={this.handleHide}
                                        />

                                    </div>
                                </div>}
                                {this.state.showAccount &&
                                    <div className="col-12 float-left top-card my-3">
                                        <button className="back-btn" onClick={this.HideAccount}> Go back</button>

                                    </div>}

                            </Tab>
                        </Tabs>
                    </div>


                </div>
            </div>

        )
    }
}