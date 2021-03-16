import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Header.scss';
import {showStatusInput, hideStatusInput, saveStatus} from "../../store/actions/statusAction";

const Header = props => {
    const {isSelected, form: {value: formValue}} = useSelector(store => store.status);
    const dispatch = useDispatch();
    const [statusValue, setStatusValue] = useState(formValue);




    const toggleInputHandler = () => {
        if(isSelected) {
            dispatch(hideStatusInput())
        } else {
            dispatch(showStatusInput())
            setStatusValue(formValue);
        }
    }

    const saveStatusHandler = () => {
        dispatch(saveStatus(statusValue))
        dispatch(hideStatusInput());
    }


    let alertChildren;
    if (isSelected) {
        alertChildren = (
            <div className="header__status--input">
                <input
                    type="text"
                    value={statusValue}
                    onChange={e => setStatusValue(e.target.value)}
                />
                <button
                    tabIndex="0"
                    onClick={saveStatusHandler}
                >
                    OK
                </button>
            </div>
        )
    } else {
        alertChildren = (
            <div className="header__status--text">
                {formValue}
            </div>
        )
    }



    return (
        <header className="header">
            <div className="header__greeting">
                <h1>
                    <span className="header__greeting--hello">Здравствуйте</span>,
                    <span id="br"><br /></span> Человек №3596941
                </h1>
            </div>

            <div className="header__change-btn">
                <button onClick={toggleInputHandler}>
                    {isSelected ? 'Отмена' : 'Сменить статус'}
                </button>
            </div>

            <div className="header__status--alert">
                {alertChildren}
            </div>

        </header>
    )
};

export default Header;