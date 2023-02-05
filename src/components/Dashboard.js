import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Store/reducers/flightStore";
import { useParams, Link, Navigate } from "react-router-dom";
import Card from "./Card";
import airplane from '../images/icons8-airplane-animate.gif';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    let navigate = useNavigate();
    const routeParams = useParams();
    const dispatch = useDispatch();
    const { currentUser, loader } = useSelector((state) => state.flightapp);

    const fbID = routeParams.id;

    useEffect(() => {
        dispatch(getUser({ id: fbID }))
    }, []);


    return (!loader ?
        <>
        
        <nav style={{ color: "black" }} className="navbar1">Email: {currentUser.email}<Link style={{ color: "aliceblue", textAlign:"end", padding:'320px' }} to="/">Log out</Link></nav>
            <div className="upperdiv">   
                <span>
                    <div className="span">
                        <p className="p1">Welcome, {currentUser.name}</p>
                        <img style={{marginLeft:'650px'}} src={airplane}/>
                    </div>
                </span>
                <div className="card_div">
                    {currentUser.flight.map((flight,index)=>
                        <Card from={flight.from}
                            to={flight.to}
                            dep={flight.dateOfDep}
                            arrival={flight.dateOfArrival}
                            type={flight.flightType}
                        />
                    )}
                </div>
            </div>
            
         </>:<h1>Loading...</h1>)
    
}

export default Dashboard;