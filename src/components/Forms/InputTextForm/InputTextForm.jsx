import React from 'react';
import './InputTextForm.scss';

const InputTextForm = React.forwardRef(({errors, ...attributes}, ref) => {
    return (
        <>
            <div className={`form-row__input-text input-text ${errors && 'error'}`}>
                <input
                    {...attributes}
                    ref={ref}
                />
            </div>
            <div className="input-text__error">{errors}</div>
        </>
    )
})

export default InputTextForm;