import './MobileLayout.css'
import { sendMessage } from '../API/tg-bot/sendMessage'
import { employers } from '../about_us/empoyers'
import { happyClients } from '../happy_clients/ourClients'
import { useEffect, useState } from 'react'
import { slideSwiper } from '../functions/slideSwiper'
import { Popup } from '../popup/Popup'
import { checkInputs } from '../functions/checkInputs'
import { aboutUsTxt } from './aboutUsTxt'
import { RecallOrderModal } from '../modal/RecallOrderModal'
import { icons } from '../icons'

export function MobileLayout() {
    const [popupContent, setPopupContent] = useState(null);
    const [visibleText, setVisibleText] = useState(0);
    const [modalStat, setModalStat] = useState(false);

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

    useEffect(() => {
        const text = document.querySelectorAll('.mobile_who_are_we_paragraph');
        
        if (text) {
            text.forEach((el, index) => {
                if (index === visibleText && el.classList.contains('hidden')) {
                    el.classList.remove('hidden')
                }
                else {
                    el.classList.add('hidden')
                }
            })
        }
    })

    useEffect(() => {
        slideSwiper('.mobile_employer_card', '.mobile_employers_cards_controls_btn');
        slideSwiper('.mobile_happy_client_card', '.mobile_happy_clients_cards_controls_btn');
    });

    useEffect(() => {
        checkInputs()
    });

    return (
        <div className='mobile_layout_wrapper'>
            <main className='mobile_topper_block'>
                <header className='mobile_main_header'>
                    <h1 className='mobile_main_header_text'>
                        Доставка автомобилей из Японии, Кореи или Китая с выгодой от <span className='profit'>250 000 &#8381;</span> в любую точку России
                    </h1>
                </header>
            </main>
            <section className="mobile_recall_order">
                <div className="mobile_recall_form_wrapper">
                    <h1 className='recall_form_header'>Узнать стоимость автомобиля</h1>
                    <article>
                        <p className='recall_form_annotation'>
                            Отправьте нам заявку на интересующий вас автомобиль и мы с вами свяжемся в ближайшее время!
                        </p>
                    </article>
                    <form className='inputs' id='bot_response' onInput={checkInputs}>
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
                            </div>
                        </div>
                        <button type="submit" className='recall_form_btn' onClick={tgResponse}>Запросить консультацию</button>
                    </form>
                    <p className="privacy_policy">
                        Отправляя данные, вы соглашаетесь с <br/><a className='privacy_policy_link'>политикой конфиденциальности</a>
                    </p>
                </div>
            </section>
            <section className='mobile_section mobile_about_us_text_wrapper'>
                <h2 className='mobile_about_us_header'>О нас</h2>
                <article className='mobile_about_us_text'>
                        {aboutUsTxt.map((elem, index) => (
                            <p key={index} className={index === 0 ? 'mobile_who_are_we_paragraph' : 'mobile_who_are_we_paragraph hidden'}>{elem.p}</p>
                        ))}
                        <div className="pagination_controls">
                            {aboutUsTxt.map((elem, index) => (
                                <button key={index} id={index} onClick={() => setVisibleText(index)} className={index === visibleText ? 'pagination_btn pagination_active' : 'pagination_btn'}></button>
                            ))}
                        </div>
                </article>
            </section>
            <section className='mobile_section mobile_about_us_employers'>
                <h2 className='mobile_about_us_employers_header'>Наша команда</h2>
                <div className='mobile_about_us_photo_gallery_container'>
                    {employers.map((employer, index) => (
                        <div key={index} className="mobile_employer_card">
                            <div className='mobile_employer_card_photo_wrapper'>
                                <img className='mobile_employer_card_photo' src={employer.ava} alt={employer.full_name} />
                            </div>
                            <div className='mobile_employer_description_wrapper'>
                                <h2 className="mobile_employer_full_name">{employer.full_name}</h2>
                                <h3 className="mobile_employer_post">{employer.post}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mobile_additional_cards_controls">
                    {employers.map((employer, index) => (
                            <button key={index} id={index} className='mobile_employers_cards_controls_btn'></button>
                    ))}
                </div>
            </section>
            <section className='mobile_our_clients'>
                <h2 className='mobile_our_clients_header'>Наши клиенты</h2>
                <div className='mobile_our_clients_cards_container'>
                    {happyClients.map((elem, index) => (
                        <div key={index} className='mobile_happy_client_card'>
                            <div className="mobile_happy_client_photo_wrapper">
                                <img src={elem.photo} alt={elem.car} className="mobile_happy_client_card_photo" />
                            </div>
                            <div className='mobile_happy_client_description_wrapper'>
                                <div className="mobile_short_car_info">
                                    <h2 className="mobile_happy_client_car_name">{elem.car}</h2>
                                    <ul className="mobile_happy_client_car_chars">
                                        <li className='mobile_car_char'>
                                            {elem.type}
                                        </li>
                                        <li>
                                            |
                                        </li>
                                        <li className='mobile_car_char'>
                                            {elem.power} л.с. 
                                        </li>
                                        <li>
                                            |
                                        </li>
                                        <li className='mobile_car_char'>
                                            {elem.engine} л.
                                        </li>
                                    </ul>
                                </div>
                                
                                <button className='mobile_make_order'>Хочу такую же!</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mobile_additional_cards_controls">
                    {happyClients.map((elem, index) => (
                            <button key={index} id={index} className='mobile_happy_clients_cards_controls_btn'>{index + 1}</button>
                    ))}
                </div>
            </section>

            <Popup content={popupContent} setPopupContent={setPopupContent}/>
            {modalStat === true ? <RecallOrderModal/> : null}
        </div>
    )
}