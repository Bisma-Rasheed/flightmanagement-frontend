import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { destroySession } from '../Store/reducers/flightStore';

const Logout = () => {
    const dispatch =useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(destroySession());
        navigate('/');
    },[])

    return (
    <>
    </>)
}

export default Logout;