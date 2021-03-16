import React from 'react';
import './SelectRow.scss';
import arrow from '../../../assets/arrow-down.svg';
console.log(arrow);

const SelectRow = React.forwardRef(({ options = [], ...attributes }, ref) => {

    const renderOptions = () => {
        return options.map((option, index) => {
            const {value, attributes} = option;
            return <option key={index} {...attributes} className="select__option">{value}</option>
        })
    }

    return (
        <div className='form-row__select select'>
            <select
                ref={ref}
                {...attributes}
                className="select__form"
            >
                {renderOptions()}
            </select>
        </div>
    )
})

export default SelectRow;