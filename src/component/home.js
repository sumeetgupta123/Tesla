
import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import { Link } from 'react-router-dom';
import about from '../assets/about.png'

export const Home = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);

    }
    useEffect(() => {
        return () => {
            console.log(isOpen)
        }
    }, [isOpen])
    return (
        <div className="col-12 float-left parent-container">
            <div className="homeimage">
            </div>
            <div className="col-12 float-left no_pad label">
                <div className="col-12 align-center ">Electric car, solar and clean energy</div>
                <button className="about-btn" onClick={togglePopup}>
                    <img src={about} alt="i" className="about-btn" />
                </button>

                {isOpen && <Popup
                    content={<>
                        <b className="pop-head">About Tesla</b>
                        <p className="pop-body">Tesla’s mission is to accelerate the world’s transition to sustainable energy.</p>
                        <p className="pop-body">Tesla continues to make products accessible and affordable to more and more people, ultimately accelerating the advent of clean transport and clean energy production. Electric cars, batteries, and renewable energy generation and storage already exist independently, but when combined, they become even more powerful – that’s the future we want</p>
                    </>}
                    handleClose={togglePopup}
                />}
                <div className="col-12 float-left btn-container">
                    <Link to="/Allcars" onClick={() => props.getcarloader}>
                        <button className="btn btn-secondary home-btn">ALL CARS</button>
                    </Link>
                </div>
            </div>


        </div>

    )
}
