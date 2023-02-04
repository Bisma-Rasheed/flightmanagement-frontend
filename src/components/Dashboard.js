import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Store/reducers/flightStore";
import { useParams, Link } from "react-router-dom";

const Dashboard = () => {

    const routeParams = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.flightapp);

    const fbID = routeParams.id;

    useEffect(() => {
        dispatch(getUser({ id: fbID }))
    }, []);


    return (
        <>
            <nav style={{ color: "black" }} className="navbar1">{currentUser.email}<Link style={{ color: "aliceblue" }} to="/">Log out</Link></nav>
            <span className="meridiv">
                <div>
                    <p className="p1">Welcome {currentUser.name}</p>
                </div>
            </span>
        </>
    )
}

export default Dashboard;