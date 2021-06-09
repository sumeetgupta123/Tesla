import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: [
                { name: 'Dashboard', router: '/dashboard' },
                { name: 'My Account', router: '/account' },
                { name: 'Educational videos', router: '/education' },
                { name: 'Help & Support', router: '/help' },
            ]
        }
    }


    render() {

        return (

            <div className="float-left sidenavbar">
                {this.state.menu.map((item, i) => (
                    <div className="col-12 p-0 float-left menubtn" key={i}>
                        <NavLink className="menubtn"
                            activeStyle={{
                               
                                color: "deeppink"
                            }}
                            to={item.router}
                        >
                            <span className="text " >{item.name}</span>
                        </NavLink>
                    </div>))}
            </div>

        )
    }
}
