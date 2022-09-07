import * as actionTypes from '../actions/actionTypes';

const initialState = {
    registerUser: [],
    loading:false,
    error: null
}

const RegistrationReducer = (state= initialState, action) =>{
    switch(action.type){
        case actionTypes.PENDING_REGISTER_USER:
            {
                return{
                    ...state,
                    loading:"true"
                }
            }
            case actionTypes.POST_REGISTER_USER:
            {
                return{
                    ...state,
                    registerUser: action.payload,
                    loading:"false"
                }
            }
            case actionTypes.ERROR_REGISTER_USER:
            {
                return{
                    ...state,
                    error: action.payload,
                    loading:"false"
                }
            }
            default:
                return state;
    }
}
export default RegistrationReducer;