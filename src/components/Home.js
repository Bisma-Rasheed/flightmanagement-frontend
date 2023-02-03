import React from "react";
import fbimg from '../images/icons8-facebook.png';

const Home = () => {

    const handleClick = (e) => {
        e.preventDefault();
        alert('clicked');
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