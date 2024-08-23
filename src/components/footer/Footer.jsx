import { icons } from '../icons'
import './Footer.css'
import { useState } from 'react';
import { currentTimeCheck } from '../functions/currentTimeCheck';
import { Popup } from '../popup/Popup';

export function Footer() {
    const [popupContent, setPopupContent] = useState(null);

    return (
        <footer className='footer_wrapper'>
            <div className="footer_content">
                <div className="footer_phones_block">
                    <h3 className='footer_header'>Наши контакты</h3>
                    <ul className="footer_phone_numbers">
                        <li className='footer_phone_numbers_list_item'>
                            <h3>Владивосток</h3>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79024867563'
                                    onClick={(e) => {
                                        const currentTime = currentTimeCheck('Vladivostok').vladivostokTime;
                                        const currentHour = currentTimeCheck('Vladivostok').vladivostokHours;

                                        if (currentHour >= 22 || currentHour < 8) {
                                            e.preventDefault();
                                            setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. Во Владивостоке сейчас ${currentTime}`})
                                        }
                                    }}
                                >+7 902 486-75-63</a>
                            </div>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79240023200'
                                    onClick={(e) => {
                                        const currentTime = currentTimeCheck('Vladivostok').vladivostokTime;
                                        const currentHour = currentTimeCheck('Vladivostok').vladivostokHours;
    
                                        if (currentHour >= 22 || currentHour < 8) {
                                            e.preventDefault();
                                            setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. Во Владивостоке сейчас ${currentTime}`})
                                        }
                                    }}
                                >+7 924 002-32-00</a>
                            </div>
                        </li>
                        <li className='footer_phone_numbers_list_item'>
                            <h3>Сочи</h3>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79873636788'
                                    onClick={(e) => {
                                        const currentTime = currentTimeCheck('Sochi').sochiTime;
                                        const currentHour = currentTimeCheck('Sochi').sochiHours;

                                        if (currentHour >= 22 || currentHour < 8) {
                                            e.preventDefault();
                                            setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. В Сочи сейчас ${currentTime}`})
                                        }
                                    }}
                                >+7 987 363-67-88</a>
                            </div>
                        </li>
                        <li className='footer_phone_numbers_list_item'>
                            <h3>Краснодар</h3>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79897519091'
                                    onClick={(e) => {
                                        const currentTime = currentTimeCheck('Sochi').sochiTime;
                                        const currentHour = currentTimeCheck('Sochi').sochiHours;

                                        if (currentHour >= 22 || currentHour < 8) {
                                            e.preventDefault();
                                            setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. В Сочи сейчас ${currentTime}`})
                                        }
                                    }}
                                >+7 989 751-90-91</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='footer_socials'>
                    <h3 className='footer_header'>Мы в соцсетях</h3>
                    <ul className="footer_socials_links">
                        <li className="footer_social_list_item">
                            <a className='footer_social_link' href='https://vk.com/llc_jcar'>
                                <svg fill="#6b6b6b" width="32" height="32" viewBox="0 0 24 24">{icons.vk}</svg>
                            </a>
                        </li>
                        <li className="footer_social_list_item">
                            <a className='footer_social_link' href='https://t.me/llc_jcar'>
                                <svg fill="#6b6b6b" width="32" height="32" viewBox="0 0 32 32">{icons.tg}</svg>
                            </a>
                        </li>
                        <li className="footer_social_list_item">
                            <a className='footer_social_link' href='https://chat.whatsapp.com/KxCG8Dzlztb2b7NoOPWIO1'>
                                <svg fill="#6b6b6b" width="32" height="32" viewBox="0 0 32 32">{icons.whatsapp}</svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="developed_by">
                <div className="reserved_rights_info">
                    <p>Developed by Valery Yaslev aka <a className="t_link" href='https://t.me/SaWeR_V'>SaWeR_V</a></p>
                    <p>&copy; Limited Liability Company JCAR, 2024</p>
                    <p>Все права защищены.</p>
                </div>
            </div>
            <Popup content={popupContent} setPopupContent={setPopupContent}/>
        </footer>
    )
}