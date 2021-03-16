import cities from '../../assets/cities.json';
import {SUBMIT_FORM} from "../types";

const initialState = {
    forms: [
        {
          id: 1,
          label: 'Ваш город',
            options: cities,
          form: {
              name: 'select',
              id: 'select',
          },
          description: ''
        },
        {
            id: 2,
            label: 'Пароль',
            form: {
                type: 'password',
                name: 'password',
                id: 'password'
            },
            description: 'Ваш новый пароль должен содержать не менее 5 символов.'
        },
        {
            id: 3,
            label: 'Пароль еще раз',
            form: {
                type: 'password',
                name: 'confirmPassword',
                id:'confirmPassword'
            },
            description: 'Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.'
        },
        {
            id: 4,
            label: 'Электронная почта',
            form: {
                type: 'text',
                name: 'email',
                id: 'email'
            },
            description: 'Можно изменить адрес, указанный при регистрации.'
        },
        {
            id: 5,
            label: 'Я согласен',
            text: 'принимать актуальную информацию на емейл',
            form: {
                type: 'checkbox',
                name: 'checkbox',
                id: 'checkbox'
            },
        },
        {
            id: 6,
            date: 0
        }
    ]


}

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_FORM: {
            let forms = [...state.forms]
            forms = forms.map(form => {
                if (form.id === 6) {
                    return {
                        ...form,
                        date: action.payload
                    }
                }
                return form;
            })
            console.log(forms);
            return {
                ...state,forms
            }
        }
        default: return state;
    }
}