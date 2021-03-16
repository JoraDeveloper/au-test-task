import React from 'react';
import './FormRow.scss';

const FormRow = ({children, label, id, description}) => {
    return (
        <div className='form__form-row form-row'>
            <label htmlFor={id} className="form-row__label">{label}</label>
            <div className="form-row__content">
                {children}
            </div>
            <p className="form-row__description">{description}</p>
        </div>
    )
}

export default FormRow;