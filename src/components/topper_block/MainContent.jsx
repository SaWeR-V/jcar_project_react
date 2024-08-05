import './MainContent.css'
import { sendMessage } from '../API/tg-bot/sendMessage'
import { icons } from '../icons'
import { useState } from 'react'

export function MainContent() {
    const [popupContent, setPopupContent] = useState(null)

    return (
        <div className="main_content_wrapper">
            <section className='conditions'>
                <h1 className="conditions_header">
                    Доставим автомобиль из Китая, Кореи или Японии в любую точку России с выгодой от <span className='profit'>250 000 &#8381;</span> с полным комплектом документов
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
                    <form className='inputs' id='bot_response'>
                        <input type="text" className="input_row" name="name" required placeholder='Ваше имя'/>
                        <input type="text" className="input_row" name="phone" required placeholder='Ваш номер телефона'/>
                        <textarea type="text" className="input_row last_row" name="comment" required placeholder='Желаемая марка, модель, год, объём двигателя и прочие комментарии'/>

                        <div className='recall_from'>
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

                        <button type="submit" className='recall_form_btn' onClick={() => {sendMessage().then(() => setPopupContent(result))}}>Запросить консультацию</button>
                    </form>
                    <p className="privacy_policy">
                        Отправляя данные, вы соглашаетесь с нашей <br/><a className='privacy_policy_link'>политикой конфиденциальности</a>
                    </p>
                </div>
            </section>
        </div>
    )
}