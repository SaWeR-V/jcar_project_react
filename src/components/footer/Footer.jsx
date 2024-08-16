import { icons } from '../icons'
import './Footer.css'

export function Footer() {
    return (
        <footer className='footer_wrapper'>
            <div className="footer_content">
                <div className="footer_phones_block">
                    <h3 className='footer_header'>Наши контакты</h3>
                    <ul className="footer_phone_numbers">
                        <li className='footer_phone_numbers_list_item'>
                            <h3>Владивосток</h3>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79024867563'>+7 902 486-75-63</a>
                            </div>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79240023200'>+7 924 002-32-00</a>
                            </div>
                        </li>
                        <li className='footer_phone_numbers_list_item'>
                            <h3>Сочи</h3>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79873636788'>+7 987 363-67-88</a>
                            </div>
                            <div className='footer_phone_numbers_item_string'>
                                <a className="footer_phone_number_link" href='tel:+79897519091'>+7 989 751-90-91</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='footer_socials'>
                    <h3 className='footer_header'>Мы в соцсетях</h3>
                    <ul className="footer_socials_links">
                        <li className="footer_social_list_item">
                            <a className='footer_social_link' href='https://vk.com/jcar_avto'>
                                <svg fill="#6b6b6b" width="32" height="32" viewBox="0 0 24 24">{icons.vk}</svg>
                            </a>
                        </li>
                        <li className="footer_social_list_item">
                            <a className='footer_social_link' href='https://t.me/jcar_avto'>
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
                    <p>&copy; JCAR25.ru 2024</p>
                    <p>Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}