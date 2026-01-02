import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { serverUrl } from '../App.jsx';
import { useDispatch } from 'react-redux';
import { setMyShopData } from '../redux/ownerSlice.js';



function useGetMyShop() {
    const dispatch=useDispatch();
    useEffect(() => {
        const fetchShop =async ()=>{
            try {
                const result = await axios.get(`${serverUrl}/api/shop/get-my`,{withCredentials:true});
                dispatch(setMyShopData(result.data));

            } catch (error) {
                console.log(error);
                
            }
        }
        fetchShop();
    }, []);
}

export default useGetMyShop