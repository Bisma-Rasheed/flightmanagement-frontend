import React from "react";
import fbimg from '../images/icons8-facebook.png';
import { useDispatch } from "react-redux";
import { currentuser, loggingIn } from '../Store/reducers/flightStore';

const Home = () => {

    const dispatch = useDispatch();

    dispatch(loggingIn(false));
    dispatch(currentuser({}));

    const handleClick = (e) => {
        e.preventDefault();
        window.location.replace('http://localhost:3001/auth/facebook')
    }
    return (
        <>
        <h1>Welcome to Flight Management System</h1>
            <div className="maindiv">
                <div className='button' onClick={handleClick}>
                    <img src={fbimg} />
                    <p>Continue With Facebook</p>
                </div>
            </div>
        </>
    )
}

export default Home;