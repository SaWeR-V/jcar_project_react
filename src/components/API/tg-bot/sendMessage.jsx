import axios from "axios";

export function sendMessage() {
    const TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN; 
    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const form = document.getElementById('bot_response');

    form.onsubmit = async function(e) {
        e.preventDefault();

        
        let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Откуда обратились: </b>${this.radio_option.value}\n`
        message += `<b>Отправитель: </b>${this.name.value}\n`
        message += `<b>Телефон: </b>${this.phone.value}\n`
        message += `<b>Комментарий: </b>${this.comment.value}\n`

        try {
            return axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
            .then(response => response)

        } catch (error) {
            return error
        }
        
    }
}