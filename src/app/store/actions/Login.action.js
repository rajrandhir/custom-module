import * as actionTypes from './actionTypes';
import axios from "axios";
// import { toast } from 'react-toastify';

export const PENDING_LOGIN_USER = () => ({
    type: actionTypes.PENDING_LOGIN_USER,
})
export const POST_LOGIN_USER = (payload) => ({
    type: actionTypes.POST_LOGIN_USER,
    payload
})
export const ERROR_LOGIN_USER = (payload) => ({
    type: actionTypes.ERROR_LOGIN_USER,
    payload
})

const url = "https://reqres.in/api/login";

export const loginUser = (data) => {
    return async (dispach) => {
        try {
            dispach(PENDING_LOGIN_USER());
            const res = await axios.post(url, data);
            // console.log(res.status)
            dispach(POST_LOGIN_USER(res.data));            
            localStorage.setItem("token",res.data.token);        
            if(res?.status === 200){
                // toast.success("login successfully!!")
                window.location.href = "/"                
            }else{
                window.location.href = "/login"
            }
           
        } catch (error) {
            dispach(ERROR_LOGIN_USER(error));
        }
    }
}