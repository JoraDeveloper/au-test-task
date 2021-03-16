const {SUBMIT_FORM} = require("../types");

export const submitForm = () => {
    return {
        type: SUBMIT_FORM,
        payload: Date.now()
    }
}