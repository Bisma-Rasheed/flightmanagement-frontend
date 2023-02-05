import React from "react";
import fbimg from '../images/icons8-facebook.png';
import { useDispatch } from "react-redux";
import { currentuser, loggingIn, destroySession } from '../Store/reducers/flightStore';
import Lottie from 'lottie-react';
import plane from '../images/plane.json';
import anime from '../images/lottieanime.json';
import flight from '../images/Flights.json';
import mapplane from '../images/mapflight.json'

const Home = () => {

    const dispatch = useDispatch();

    dispatch(loggingIn(false));
    dispatch(currentuser({}));
    dispatch(destroySession());

    const handleClick = (e) => {
        e.preventDefault();
        window.location.replace('http://localhost:3001/auth/facebook')
    }
    return (
        <>
            <nav style={{padding:'15px', fontSize:'30px', fontWeight:'bold'}} className="navbar1">Welcome to Flight Management System</nav>
            <div className="maindiv">

                <span>
                    <Lottie style={{ height: '70vh', marginTop:'80px' }} animationData={anime} loop={true} />
                    <Lottie style={{ height: '70vh', marginTop:'80px' }} animationData={mapplane} loop={true} />
                </span>
                <div className='button' onClick={handleClick}>
                    <img src={fbimg} />
                    <p>Continue With Facebook</p>
                </div>
            </div>
        </>
    )
}

export default Home;