import axios from "axios";

export async function sendMessage(formId) {

    const form = document.getElementById(formId);

    const data = {
        radioOption: form.radio_option.value,
        name: form.name.value,
        phone: form.phone.value,
        comment: form.comment.value
    };

    return axios.post('http://192.168.0.101:5000/api/sendMessage', data)
    .then(response => {
        return response.status;
    })
    .catch(error => {
        throw error;
    });
}