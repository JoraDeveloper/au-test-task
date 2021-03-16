import {combineReducers} from "redux";
import statusReducer from "./statusReducer";
import formReducer from "./formReducer";
import alertReducer from "./alertReducer";


export default combineReducers({
    status:statusReducer,
    form: formReducer,
    alert: alertReducer
})