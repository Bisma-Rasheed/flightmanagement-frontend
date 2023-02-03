import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../Store/reducers/flightStore";

const Dashboard = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser())
    },[]);
    return (
        <>
            <h1>hello world</h1>
        </>
    )
}

export default Dashboard;