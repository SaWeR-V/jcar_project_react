import './RecallOrderModal.css'
import { icons } from '../icons';
import { sendMessage } from '../API/tg-bot/sendMessage';
import { createPortal } from "react-dom";
import { useEffect } from 'react';
import { checkInputs } from '../functions/checkInputs';


export function RecallOrderModal({setModalStat, car, setChoosenCar, setPopupContent}) {
    const modal = document.getElementById('modal');

    function tgResponse(e) {
        e.preventDefault();
        sendMessage('bot_response_modal').then(status => {
            if (status === 200) {
                setPopupContent({success: 'Запрос успешно отправлен - ожидайте звонка!'});
            } else {
                setPopupContent({error: 'Произошла ошибка при отправке запроса'});
            }
            setModalStat(false);
        })
    };

    useEffect(() => {
        checkInputs('.modal_popup_recall_form_btn', '.modal_modal_input_row, .modal_radio_option')
    });

    return (
        createPortal(
                <div className="modal_recall_order_window">
                    <div className="modal_recall_order_frame">
                        <button className="modal_recall_order_window_close" onClick={() => {setModalStat(false); setChoosenCar([])}}>
                            <svg viewBox='0 0 24 24' fill='white'>{icons.cross}</svg>
                        </button>
                        <div className="modal_recall_form">
                            <p className='modal_recall_order_confirm'>
                                Вы собираетесь заказать доставку <span className='modal_car_name_confirm'>{car.car_name}</span>.<br/>Просьба указать ваше имя и контактный телефон - мы скоро вам перезвоним!
                            </p>
                            <form className='modal_modal_inputs' id='bot_response_modal' onInput={() => checkInputs('.modal_popup_recall_form_btn', '.modal_modal_input_row, .modal_radio_option')}>
                                <input type="text" className="modal_modal_input_row" name="name" required placeholder='Ваше имя'/>
                                <input type="text" className="modal_modal_input_row" name="phone" required placeholder='Ваш номер телефона'/>
                                <textarea type="text" className="hidden" name="comment" value={`\n${car.car_name}\n\n******\n\n${car.car_chars.trim()}`} readOnly/>

                                <div className='modal_recall_from'>
                                    <p>Укажите, откуда вам перезвонить?</p>
                                    <div className="recall_from_items">
                                        <label className='recall_from_item'>
                                            <input className="modal_radio_option" type="radio" name="radio_option" id="radioVladivostok" value='Владивосток' required/>Владивосток
                                        </label>
                                        <label className='recall_from_item'>
                                            <input className="modal_radio_option" type="radio" name="radio_option" id="radioSochi" value='Сочи' required/>Сочи
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className='modal_popup_recall_form_btn' onClick={tgResponse}>Заказать звонок</button>
                            </form>
                            <p className="privacy_policy">
                                Отправляя данные, вы соглашаетесь с <br/><a className='privacy_policy_link'>политикой конфиденциальности</a>
                            </p>
                        </div>    
                    </div>
                </div>
        , modal)
    )
}