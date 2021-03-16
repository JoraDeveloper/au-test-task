import React, {useEffect, useState, useRef} from 'react';
import './Forms.scss';
import {useForm} from 'react-hook-form';
import FormRow from "./FormRow/FormRow.jsx";
import SelectRow from "./SelectForm/SelectRow.jsx";
import InputTextForm from "./InputTextForm/InputTextForm.jsx";
import CheckboxForm from "./CheckboxForm/CheckboxForm.jsx";
import {useDispatch, useSelector} from "react-redux";
import SubmitBtnForm from "./SubmitBtnForm/SubmitBtnForm.jsx";
import {submitForm} from "../../store/actions/formActions";
import {changeMessage, hideAlert, showAlert} from "../../store/actions/alertActions";

const Forms = ({}) => {

    const {register, handleSubmit, errors, watch, reset} = useForm();
    const [select, password, confirmPassword, email, checkbox] = useSelector(store => store.form.forms);
    const [selectOptions, setSelectOptions] = useState(select.options);
    const dispatch = useDispatch();
    const selectRef = useRef(selectOptions);
    const watchPassword = watch(password.form.name);

    //?????
    useEffect(() => {
        let opt = selectRef.current;

        opt = opt
            .sort((a, b) => b.population - a.population)
            .filter(item => Number(item.population) > 50000)
            .map(item => item.city);
        const [largeCity] = opt.splice(0, 1);
        opt.sort().unshift(largeCity);
        opt = opt.map(item => ({value: item}));

        selectRef.current = opt;
        setSelectOptions(opt);
    },[selectRef])



    let onSubmit = data => {
        console.log(data);
        dispatch(submitForm())
        dispatch(changeMessage(JSON.stringify(data, null, 2)));
        dispatch(showAlert());
        reset();
    }
    onSubmit = handleSubmit(onSubmit);
    return (
        <section className='form'>
            <form onSubmit={onSubmit}>

                <FormRow label={select.label} description={select.description} id={select.form.id}>
                    <SelectRow
                        {...select.form}
                        options={selectOptions}
                        ref={register}
                    />
                </FormRow>

                <hr/>

                <FormRow
                    id={password.form.id}
                    label={password.label}
                    description={password.description}
                >
                    <InputTextForm
                        {...password.form}
                        errors={errors[password.form.name]?.message}
                        className="input-text__password"
                        ref={register({
                            required: 'Укажите пароль',
                            minLength: {
                                value: 5,
                                message: 'Используйте не менее 5 символов'
                            }
                        })}
                    />
                </FormRow>

                <FormRow
                    id={confirmPassword.form.id}
                    label={confirmPassword.label}
                    description={confirmPassword.description}
                >
                    <InputTextForm
                        {...confirmPassword.form}
                        className='input-text__password'
                        errors={errors[confirmPassword.form.name]?.message}
                        ref={register({
                            required: 'Укажите пароль',
                            validate: value => value === watchPassword || 'Пароли не совпадают'
                        })}
                    />
                </FormRow>

                <hr/>

                <FormRow label={email.label} id={email.form.id} description={email.description}>
                    <InputTextForm
                        {...email.form}
                        errors={errors[email.form.name]?.message}
                        ref={register({
                            required: 'Укажите E-mail',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Неверный E-mail'
                            }
                        })}
                    />
                </FormRow>

                <FormRow label={checkbox.label} id={checkbox.form.id}>
                    <CheckboxForm
                        ref={register}
                        {...checkbox.form}
                        text={checkbox.text}
                    />
                </FormRow>

                <FormRow>
                    <SubmitBtnForm />
                </FormRow>
            </form>
        </section>
    )
}

export default Forms;