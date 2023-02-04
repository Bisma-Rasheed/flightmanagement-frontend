import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Store/reducers/flightStore";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    let navigate = useNavigate();
    const routeParams = useParams();
    const dispatch = useDispatch();
    const { currentUser, loader } = useSelector((state) => state.flightapp);

    const email = routeParams.id;

    useEffect(() => {
        dispatch(getUser({ email: email }))
    }, []);


    return (!loader ?
        <>
            <div className="upperdiv">
                <nav style={{ color: "black" }} className="navbar1">{currentUser.email}<Link style={{ color: "aliceblue" }} to="/">Log out</Link></nav>
                <span className="meridiv">
                    <div>
                        <p className="p1">Welcome {currentUser.name}</p>
                    </div>
                </span>
            </div>
        </>:<h1>Loading...</h1>
    )
}

export default Dashboard;