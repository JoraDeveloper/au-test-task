import {HIDE_STATUS_INPUT, SAVE_STATUS, SHOW_STATUS_INPUT} from "../types";

export const showStatusInput = () => {
    return {
        type: SHOW_STATUS_INPUT
    }
}

export const hideStatusInput = () => {
    return {
        type: HIDE_STATUS_INPUT
    }
}

export const saveStatus = value => {
    return {
        type: SAVE_STATUS,
        payload: value
    }
}