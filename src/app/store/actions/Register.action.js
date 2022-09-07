import * as actionTypes from './actionTypes';
import axios from "axios";

export const PENDING_REGISTER_USER = () => ({
    type: actionTypes.PENDING_REGISTER_USER,
})
export const POST_REGISTER_USER = (payload) => ({
    type: actionTypes.POST_REGISTER_USER,
    payload
})
export const ERROR_REGISTER_USER = (payload) => ({
    type: actionTypes.ERROR_REGISTER_USER,
    payload
})
export const RegisterUser = (data) => {
    return async (dispach) => {
        try {
            dispach(PENDING_REGISTER_USER());
            const res = await axios.post("https://reqres.in/api/register", data);
            dispach(POST_REGISTER_USER(res.data))
            window.location.href = "/login";
        } catch (error) {
            dispach(ERROR_REGISTER_USER(error));
        }
    }
}