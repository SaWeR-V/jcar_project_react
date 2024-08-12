import './BurgerMenu.css'
import { useEffect, useState } from "react";
import { icons } from "../icons";
import { Link } from "react-router-dom";


export function BurgerMenu({burgerStatus, setBurgerStatus}) {
    const [currentFilter, setFilter] = useState(null);

    useEffect(() => {
        const burgerBtn = document.querySelector('.burger_menu_btn')
        const links = document.querySelectorAll('.link_item');
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
                    <li className='list_item'>
                        <h3>Владивосток</h3>
                        <div className='item_string'>
                            <a className="phone_number_link" href='tel:+79024867563'>+7 902 486-75-63</a>
                        </div>
                        <div className='item_string'>
                            <a className="phone_number_link" href='tel:+79240023200'>+7 924 002-32-00</a>
                        </div>
                    </li>
                    <li className='list_item'>
                        <h3>Сочи</h3>
                        <div className='item_string'>
                            <a className="phone_number_link" href='tel:+79873636788'>+7 987 363-67-88</a>
                        </div>
                        <div className='item_string'>
                            <a className="phone_number_link" href='tel:+79897519091'>+7 989 751-90-91</a>
                        </div>
                    </li>
                </ul>
                <a className="burger_menu_whatsapp_link" href="https://chat.whatsapp.com/KxCG8Dzlztb2b7NoOPWIO1">
                    <svg fill="white" width="32" height="32" viewBox="0 0 32 32">{icons.whatsapp}</svg>
                    <p>WhatsApp - чат</p>
                </a>
                <ul className='burger_menu_links'>
                    <li className='link_item'>
                        <a className='context_menu_link noselect'>Услуги</a>
                    </li>
                    <li className='link_item'>
                        <a className='context_menu_link noselect'>Информация</a>
                    </li>
                    <li className='link_item'>
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
                            <Link to={'/special_equipment'} className='burger_link' onClick={() => setBurgerStatus(false)}>Спецтехника</Link>
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
                            <Link to={'/work_scheme'} className='burger_link' onClick={() => setBurgerStatus(false)}>Схема работы</Link>
                        </li>
                        <li className='burger_item'>
                            <Link to={'/contract_example'} className='burger_link' onClick={() => setBurgerStatus(false)}>Пример договора</Link>
                        </li>
                        <li className='burger_item'>
                            <Link to={'/questions'} className='burger_link' onClick={() => setBurgerStatus(false)}>Вопрос-ответ</Link>
                        </li>
                    </ul>
            </div>

        </div>
    )
}