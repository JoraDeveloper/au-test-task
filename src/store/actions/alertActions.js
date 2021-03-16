import {CHANGE_MESSAGE} from "../types";

const {CHANGE_ALERT} = require("../types");

export const showAlert = () => {
    return {
        type: CHANGE_ALERT,
        payload: true
    }
}

export const hideAlert = () => {
    return {
        type: CHANGE_ALERT,
        payload: false
    }
}

export const changeMessage = message => {
    return {
        type: CHANGE_MESSAGE,
        payload: message
    }
}