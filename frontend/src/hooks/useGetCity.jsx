import React, { use } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { serverUrl } from '../App.jsx';
import { useDispatch } from 'react-redux';
import { setCity, setUserData } from '../redux/userSlice.js';
import { useSelector } from 'react-redux';

function useGetCity() {
    const dispatch=useDispatch();
    const {userData}=useSelector((state)=>state.user);
    const apiKey=import.meta.env.VITE_GEO_API_KEY;
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`);
            dispatch(setCity(result?.data?.results[0].city));
    });
    }, [userData]);
}

export default useGetCity