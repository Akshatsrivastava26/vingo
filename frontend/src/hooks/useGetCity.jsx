import React, { use } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { serverUrl } from '../App.jsx';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';

function useGetCity() {
    const dispatch=useDispatch();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(position);
            const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=YOUR_API_KEY`)
    });
    }, []);
}

export default useGetCity