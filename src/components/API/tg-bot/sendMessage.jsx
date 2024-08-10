import axios from "axios";

export async function sendMessage() {

    const TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN; 
    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const form = document.getElementById('bot_response');

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Откуда обратились: </b>${form.radio_option.value}\n`
    message += `<b>Отправитель: </b>${form.name.value}\n`
    message += `<b>Телефон: </b>${form.phone.value}\n`
    message += `<b>Комментарий: </b>${form.comment.value}\n`

    return axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then(response => {
        return response.status;
    })
    .catch(error => {
        throw error;
    });
}