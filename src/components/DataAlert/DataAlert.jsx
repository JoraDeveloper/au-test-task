import React from 'react';
import './DataAlert.scss';
import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../../store/actions/alertActions";

const DataAlert = ({}) => {
    const {isShow: show, message} = useSelector(store => store.alert);
    const dispatch = useDispatch();


    const closeBtnHandler = () => dispatch(hideAlert());
    if (show) {
        return (
            <div className='data-alert'>
                <div className="data-alert__close-btn" onClick={closeBtnHandler}>
                    <img src="../../assets/close-alert.svg"/>
                </div>
                <div className="data-alert__message">
                    <pre>
                        {message}
                    </pre>
                </div>
            </div>
        )
    }
    return null;
}

export default DataAlert;