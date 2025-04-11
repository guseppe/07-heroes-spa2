import { types } from "../types/type";

export const AuthReducer = (state = {}, action) =>{
    switch (action.type) {
        case types.login:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            };
        case types.logout:
            return {
                loggedIn: false,
            };
        default:
            return state;
    }

}