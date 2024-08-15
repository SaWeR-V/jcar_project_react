import { icons } from '../icons';
import { sendMessage } from '../API/tg-bot/sendMessage';
import './RecallOrderModal.css'

import { createPortal } from "react-dom";

export function RecallOrderModal({setModalStat, car, setChoosenCar}) {
    const modal = document.getElementById('modal');

    function tgResponse(e) {
        e.preventDefault();
        sendMessage().then(status => {
            if (status === 200) {
                setPopupContent({success: 'Запрос успешно отправлен - ожидайте звонка!'});
            } else {
                setPopupContent({error: 'Произошла ошибка при отправке запроса'});
            }
        })
    };

    return (
        createPortal(
                <div className="mobile_recall_order_window">
                    <div className="mobile_recall_order_frame">
                        <button className="mobile_recall_order_window_close" onClick={() => {setModalStat(false); setChoosenCar([])}}>
                            <svg viewBox='0 0 24 24' fill='white'>{icons.cross}</svg>
                        </button>
                        <div className="mobile_recall_form">
                            <p className='mobile_recall_order_confirm'>
                                Вы собираетесь заказать доставку <span className='mobile_car_name_confirm'>{car.car_name}</span>.<br/>Просьба указать ваше имя и контактный телефон - мы скоро вам перезвоним!
                            </p>
                            <form className='mobile_modal_inputs' id='bot_response'>
                                <input type="text" className="mobile_modal_input_row" name="name" required placeholder='Ваше имя'/>
                                <input type="text" className="mobile_modal_input_row" name="phone" required placeholder='Ваш номер телефона'/>
                                <textarea type="text" className="hidden" name="comment" value={`${car.car_name} ${car.car_chars.trim()}`} readOnly/>

                                <div className='mobile_recall_from'>
                                    <p>Укажите, откуда вам перезвонить?</p>
                                    <div className="recall_from_items">
                                        <label className='recall_from_item'>
                                            <input type="radio" name="radio_option" id="radioVladivostok" value='Владивосток' required/>Владивосток
                                        </label>
                                        <label className='recall_from_item'>
                                            <input type="radio" name="radio_option" id="radioSochi" value='Сочи' required/>Сочи
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className='mobile_popup_recall_form_btn' onClick={tgResponse}>Заказать звонок</button>
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