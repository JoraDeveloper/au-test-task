import {HIDE_STATUS_INPUT, SAVE_STATUS, SHOW_STATUS_INPUT} from "../types";

const initialState = {
    isSelected: false,
    form: {
        value: 'Прежде чем действовать, надо понять',
        validate: {}
    }
}


export default function statusReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_STATUS_INPUT:
            return {
                ...state, isSelected: true
            }
        case HIDE_STATUS_INPUT:
            return {
                ...state, isSelected: false
            }
        case SAVE_STATUS:
            return {
                ...state, form: {...state.form, value: action.payload}
            }
        default: return state;
    }
}