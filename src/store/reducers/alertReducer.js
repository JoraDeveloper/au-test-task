import {CHANGE_ALERT, CHANGE_MESSAGE} from "../types";

const initialState = {
    isShow: false,
    message: ''
}


export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ALERT:
            return {
                ...state, isShow: action.payload
            }
        case CHANGE_MESSAGE:
            return {
                ...state, message: action.payload
            }
        default: return state;
    }
}