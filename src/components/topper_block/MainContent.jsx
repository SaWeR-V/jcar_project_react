import './MainContent.css'
import { sendMessage } from '../API/tg-bot/sendMessage'
import { icons } from '../icons'
import { useEffect, useState } from 'react'
import { Popup } from '../popup/Popup'
import { checkInputs } from '../functions/checkInputs'


export function MainContent() {
    const [popupContent, setPopupContent] = useState(null);

    function tgResponse(e) {
        e.preventDefault();
        
        sendMessage('bot_response').then(status => {
            if (status === 200) {
                setPopupContent({success: 'Запрос успешно отправлен - ожидайте звонка!'});
            } else {
                setPopupContent({error: 'Произошла ошибка при отправке запроса'});
            }
        })
        
    } 

    useEffect(() => {
        checkInputs('.recall_form_btn', '.input_row, .radio_option')
    },[])

    return (
        <div className="main_content_wrapper">
            <section className='conditions'>
                <h1 className="conditions_header">
                    Доставим автомобиль из Японии, Кореи или Китая в любую точку России с выгодой от <span className='profit'>250 000 &#8381;</span> с полным комплектом документов
                </h1>
                <div className='flags_container'>
                    <div className="flag russia"></div>
                    <div className="flag china"></div>
                    <div className="flag korea"></div>
                    <div className="flag japan"></div>
                </div>
                <ul className="advantages_list">
                    <li className="advantage">
                        <svg width={32} height={32} viewBox='0 0 512 512'>{icons.engine}</svg>
                        Работаем напрямую, без посредников
                    </li>
                    <li className="advantage">
                        <svg width={32} height={32} viewBox='0 0 512 512'>{icons.engine}</svg>
                        Кратчайшие сроки доставки
                    </li>
                    <li className="advantage">
                        <svg width={32} height={32} viewBox='0 0 512 512'>{icons.engine}</svg>
                        Работаем по договору
                    </li>
                </ul>
            </section>
            <section className='recall_form'>
                <div className="recall_form_wrapper">
                    <h1 className='recall_form_header'>Узнать стоимость автомобиля</h1>
                    <article>
                        <p className='recall_form_annotation'>
                            Отправьте нам заявку на интересующий вас автомобиль и мы с вами свяжемся в ближайшее время!
                        </p>
                    </article>
                    <form className='inputs' id='bot_response' onInput={() => checkInputs('.recall_form_btn', '.input_row, .radio_option')}>
                        <input type="text" className="input_row" name="name" required placeholder='Ваше имя'/>
                        <input type="text" className="input_row" name="phone" required placeholder='Ваш номер телефона'/>
                        <textarea type="text" className="input_row last_row" name="comment" required placeholder='Желаемая марка, модель, год, объём двигателя и прочие комментарии'/>

                        <div className='recall_from'>
                            <p>Укажите, откуда вам перезвонить?</p>
                            <div className="recall_from_items">
                                <label className='recall_from_item'>
                                    <input className="radio_option" type="radio" name="radio_option" id="radioVladivostok" value='Владивосток' required/>Владивосток
                                </label>
                                <label className='recall_from_item'>
                                    <input className="radio_option" type="radio" name="radio_option" id="radioSochi" value='Сочи' required/>Сочи
                                </label>
                                <label className='recall_from_item'>
                                    <input className="radio_option" type="radio" name="radio_option" id="radioKrasnodar" value='Краснодар' required/>Краснодар
                                </label>
                                <label className='recall_from_item'>
                                    <input className="radio_option" type="radio" name="radio_option" id="radioOther" required/>Другой город
                                    <input type="text" className="input_row" name="other_city" required placeholder='Введите название' onInput={(e) => e.target.closest('.recall_from_item').querySelector('.radio_option').value = e.target.value}/>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className='recall_form_btn' onClick={tgResponse}>Запросить консультацию</button>
                    </form>
                    <p className="privacy_policy">
                        Отправляя данные, вы соглашаетесь с <br/><a className='privacy_policy_link'>политикой конфиденциальности</a>
                    </p>
                </div>
            </section>
            <Popup content={popupContent} setPopupContent={setPopupContent}/>
        </div>
    )
}