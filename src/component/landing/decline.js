import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'


export default class Decline extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header className="p-60">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5>Are you sure you want to decline this Insurance Policy</h5>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="p-60">
                    <textarea className="float-left col-12 textarea" aria-labelledby="nrtxt" name="textarea" placeholder="Type here"
                        maxlength="500">
                    </textarea>
                    <div className="col-12 float-left my-3 centeralign p-0">
                        <button className="col-12 account-btn ">Decline</button>
                    </div>
                    <div className="col-12 float-left centeralign p-0">
                        <button className="col-12 close-btn" onClick={this.props.onHide}>Close</button>
                    </div>

                </Modal.Body>
            </Modal>
        )
    }
}