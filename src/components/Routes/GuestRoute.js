import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const GuestRoute = () => {
    const { user } = useAuth();
    return !user ? <Outlet/> : <Navigate to="/home"/>;
};

export default GuestRoute;