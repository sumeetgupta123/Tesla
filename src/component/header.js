import React from 'react'
import Tesla from '../assets/tes-icon.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="col-12 float-left parent-container">
              <Link to="/">
              <img src={Tesla} alt="car" className="logo" />
              </Link>
                  

        </div>

    )
}