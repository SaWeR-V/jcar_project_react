import './BurgerMenu.css'
import { useEffect, useState } from "react";
import { icons } from "../icons";
import { Link } from "react-router-dom";
import { currentTimeCheck } from '../functions/currentTimeCheck';
import { Popup } from '../popup/Popup';


export function BurgerMenu({burgerStatus, setBurgerStatus}) {
    const [currentFilter, setFilter] = useState(null);
    const [popupContent, setPopupContent] = useState(null);


    useEffect(() => {
        const burgerBtn = document.querySelector('.burger_menu_btn')
        const links = document.querySelectorAll('.burger_menu_link_item');
        const block = document.querySelector('.burger_menu_block');
        
        links.forEach(link => {
            link.onclick = (event) => {
                block.classList.add('hidden');
                setFilter(event.target.textContent)
            }
        })

        if (burgerBtn) {
            burgerBtn.addEventListener('click', () => {
                block.classList.remove('hidden');
                setFilter(null);
            });
        }
      
        return () => {
            if (burgerBtn) {
                burgerBtn.removeEventListener('click', () => {
                    block.classList.remove('hidden');
                    setFilter(null);
                });
            }
        };

    });

    function restoreBurgerMenu() {
        const block = document.querySelector('.burger_menu_block');
        block.classList.remove('hidden');
        setFilter(null);
    }
    
    return (
        <div className={burgerStatus === false ? "burger_menu smooth_move_out hidden" : "burger_menu smooth_move_out"}>
            <div className="burger_menu_block fade-in">
                <ul className="burger_menu_list">
                    <li className='burger_menu_list_item'>
                        <h3>Владивосток</h3>
                        <div className='burger_menu_item_string'>
                            <a className="phone_number_link" href='tel:+79024867563'
                                onClick={(e) => {
                                    const currentTime = currentTimeCheck('Vladivostok').vladivostokTime;
                                    const currentHour = currentTimeCheck('Vladivostok').vladivostokHours;

                                    if (currentHour >= 22 || currentHour < 8) {
                                        e.preventDefault();
                                        setBurgerStatus(false);
                                        setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. Во Владивостоке сейчас ${currentTime}`})
                                    }
                                }}
                            >+7 902 486-75-63</a>
                        </div>
                        <div className='burger_menu_item_string'>
                            <a className="phone_number_link" href='tel:+79240023200'
                                onClick={(e) => {
                                    const currentTime = currentTimeCheck('Vladivostok').vladivostokTime;
                                    const currentHour = currentTimeCheck('Vladivostok').vladivostokHours;

                                    if (currentHour >= 22 || currentHour < 8) {
                                        e.preventDefault();
                                        setBurgerStatus(false);
                                        setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. Во Владивостоке сейчас ${currentTime}`})
                                    }
                                }}
                            >+7 924 002-32-00</a>
                        </div>
                    </li>
                    <li className='burger_menu_list_item'>
                        <h3>Сочи</h3>
                        <div className='burger_menu_item_string'>
                            <a className="phone_number_link" href='tel:+79873636788'
                                onClick={(e) => {
                                    const currentTime = currentTimeCheck('Sochi').sochiTime;
                                    const currentHour = currentTimeCheck('Sochi').sochiHours;

                                    if (currentHour >= 22 || currentHour < 8) {
                                        e.preventDefault();
                                        setBurgerStatus(false);
                                        setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. В Сочи сейчас ${currentTime}`})
                                    }
                                }}
                            >+7 987 363-67-88</a>
                        </div>
                    </li>
                    <li className='burger_menu_list_item'>
                        <h3>Краснодар</h3>
                        <div className='burger_menu_item_string'>
                            <a className="phone_number_link" href='tel:+79897519091'
                                onClick={(e) => {
                                    const currentTime = currentTimeCheck('Sochi').sochiTime;
                                    const currentHour = currentTimeCheck('Sochi').sochiHours;

                                    if (currentHour >= 22 || currentHour < 8) {
                                        e.preventDefault();
                                        setBurgerStatus(false);
                                        setPopupContent({error: `Вызовы принимаются с 08:00 до 22:00. В Сочи сейчас ${currentTime}`})
                                    }
                                }}
                            >+7 989 751-90-91</a>
                        </div>
                    </li>
                </ul>
                <ul className="burger_menu_socials_links">
                    <li className="burger_menu_socials_item">
                        <a href="https://vk.com/llc_jcar" className="burger_menu_social_link">
                            <svg fill="white" width="32" height="32" viewBox="0 0 24 24">{icons.vk}</svg>
                        </a>
                    </li>
                    <li className="burger_menu_socials_item">
                        <a href="https://t.me/llc_jcar" className="burger_menu_social_link">
                            <svg fill="white" width="32" height="32" viewBox="0 0 32 32">{icons.tg}</svg>
                        </a>
                    </li>
                    <li className="burger_menu_socials_item">
                        <a href="https://chat.whatsapp.com/KxCG8Dzlztb2b7NoOPWIO1" className="burger_menu_social_link">
                        <svg fill="white" width="32" height="32" viewBox="0 0 32 32">{icons.whatsapp}</svg>
                        </a>
                    </li>
                </ul>

                <ul className='burger_menu_links'>
                    <li className='burger_menu_link_item'>
                        <a className='context_menu_link noselect'>Услуги</a>
                    </li>
                    <li className='burger_menu_link_item'>
                        <a className='context_menu_link noselect'>Информация</a>
                    </li>
                    <li className='burger_menu_link_item'>
                        <a href="#" className='context_menu_link'>Контакты</a>
                    </li>
                </ul>
            </div>

            <div className={currentFilter === "Услуги" ? "burger_menu_block fade-in" : "burger_menu_block fade-in hidden"}>
                <button className="burger_menu_goback" onClick={restoreBurgerMenu}>
                    <svg viewBox="0 0 24 24" width={30} height={30}>{icons.go_back}</svg>
                </button>
                <h3 className="burger_menu_selected_option">Услуги</h3>
                    <ul className='burger_items'>
                        <li className='burger_item'>
                            <Link to={'/autos'} className='burger_link' onClick={() => setBurgerStatus(false)}>Автомобили</Link>
                        </li>
                        <li className='burger_item'>
                            <Link to={'/motorcycles'} className='burger_link' onClick={() => setBurgerStatus(false)}>Мотоциклы</Link>
                        </li>
                        <li className='burger_item'>
                            <Link to={'/special_vehicles'} className='burger_link' onClick={() => setBurgerStatus(false)}>Спецтехника</Link>
                        </li>
                        <li className='burger_item'>
                            <Link to={'/constructors'} className='burger_link' onClick={() => setBurgerStatus(false)}>Конструкторы</Link>
                        </li>
                    </ul>
            </div>

            <div className={currentFilter === "Информация" ? "burger_menu_block fade-in" : "burger_menu_block fade-in hidden"}>
                <button className="burger_menu_goback" onClick={restoreBurgerMenu}>
                    <svg viewBox="0 0 24 24" width={30} height={30}>{icons.go_back}</svg>
                </button>
                <h3 className="burger_menu_selected_option">Информация</h3>
                    <ul className='burger_items'>
                        <li className='burger_item'>
                            <Link to={'/working_scheme'} className='burger_link' onClick={() => setBurgerStatus(false)}>Схема работы</Link>
                        </li>
                        <li className='burger_item'>
                            <Link to={'/contract_example'} className='burger_link' onClick={() => setBurgerStatus(false)}>Пример договора</Link>
                        </li>
                        <li className='burger_item'>
                            <Link to={'/questions'} className='burger_link' onClick={() => setBurgerStatus(false)}>Вопрос-ответ</Link>
                        </li>
                    </ul>
            </div>
            <Popup content={popupContent} setPopupContent={setPopupContent}/>
        </div>
    )
}