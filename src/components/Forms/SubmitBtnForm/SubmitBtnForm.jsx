import React from 'react';
import './SubmitBtnForm.scss';
import {useDispatch, useSelector} from "react-redux";
import {submitForm} from "../../../store/actions/formActions";

const SubmitBtnForm = ({}) => {
    const data = useSelector(store => store.form.forms.find(item => item.id === 6));

    const getTime = () => {
        const months = {
            '01': 'января',
            '02': 'февраля',
            '03': 'марта',
            '04': 'апреля',
            '05': 'мая',
            '06': 'июня',
            '07': 'июля',
            '08': 'августа',
            '09': 'сентября',
            '10': 'октября',
            '11': 'ноября',
            '12': 'декабря',
        }

        if(!data.date) {
            return 'никогда не производились';
        }

        let [date, time] = new Date(data.date).toLocaleString().split(', ');
        date = date.split('.');
        date = `${date[0][0] === '0' ? date[0][1] : date[0]} ${months[date[1]]} ${date[2]}`;
        return `${date} в ${time}`;
    }



    return (
        <div className="form-row__submit submit">
            <button className="submit__btn">Изменить</button>
            <p className="submit__description">{`последние изменения ${getTime()}`}</p>
        </div>
    )
}

export default SubmitBtnForm;