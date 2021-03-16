import React from 'react';
import './CheckboxForm.scss';

const CheckboxForm = React.forwardRef(({text, ...attributes}, ref) => {
    return (
        <div className="form-row__input-checkbox input-checkbox">
            <label className="input-checkbox__container">
                <input {...attributes} ref={ref} className="input-checkbox__form" />
                    <span className="input-checkbox__checkmark"></span>
            </label>
            <p className="input-checkbox__description">{text}</p>
        </div>
    )
})

export default CheckboxForm;