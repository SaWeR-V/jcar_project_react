import axios from "axios";

export async function sendMessage(formId) {

    const form = document.getElementById(formId);

    const data = {
        radioOption: form.radio_option.value,
        name: form.name.value,
        phone: form.phone.value,
        comment: form.comment.value
    };

    return axios.post('/api/sendMessage', data)
    .then(response => {
        return response.status;
    })
    .catch(error => {
        throw error;
    });
}