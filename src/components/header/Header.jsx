import './Header.css'
import { icons } from '../icons'
import { useState, useEffect } from 'react'
import { ModalFrame } from './modal/ModalFrame';
import { BurgerMenu } from '../burger_menu/BurgerMenu';
import { currentTimeCheck } from '../functions/currentTimeCheck';
import { Popup } from '../popup/Popup';

export function Header() {
    const [servicesModal, setServicesModal] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [documentPosition, setDocumentPosition] = useState(0);
    const [modalParent, setModalParent] = useState(null);
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    function modalToggle(option, event) {

        setModalParent(event.target.closest('.link_item'));

        if (option === 'services') {
            servicesModal === false ? setServicesModal(true) : setServicesModal(false);
            setInfoModal(false)
        }
        else if (option === 'info') {
            infoModal === false ? setInfoModal(true) : setInfoModal(false);
            setServicesModal(false)
        }

    }

    useEffect(() => {
        const modal = document.querySelector('.active_link_item');
        let link;
        let svg; 
    
        if (modal) {
            link = modal.closest('.link_item').querySelector('.context_menu_link');
            svg = modal.closest('.link_item').querySelector('path');
        }
    
        servicesModal ? addListener('services') : removeListener('services');
        infoModal ? addListener('info') : removeListener('info');
    
    
        function addListener(option) {
            if (option === 'services') {
                document.body.addEventListener('click', (event) => {
                    if (event.target !== modal && event.target !== link && event.target !== svg) {
                        setServicesModal(false)
                    }
                })
            }
            else if (option === 'info') {
                document.body.addEventListener('click', (event) => {
                    if (event.target !== modal && event.target !== link && event.target !== svg) {
                        setInfoModal(false)
                    }
                })
            }
        }
    
        function removeListener(option) {
            if (option === 'services') {
                document.body.removeEventListener('click', (event) => {
                    if (event.target !== modal && event.target !== link && event.target !== svg) {
                        setServicesModal(false)
                    }
                })
            }
            else if (option === 'info') {
                document.body.removeEventListener('click', (event) => {
                    if (event.target !== modal && event.target !== link && event.target !== svg) {
                        setInfoModal(false)
                    }
                })
            }
        }
    })
    

    window.onscroll = () => {
        if (servicesModal === true || infoModal === true) {
            setInfoModal(false);
            setServicesModal(false)
        }
    }

    useEffect(() => {
        const calculateScroll = () => {
            setDocumentPosition(window.scrollY);
        };

        window.addEventListener('scroll', () => {
            calculateScroll();
        });

    }, []);

    useEffect(() => {
        const burger = document.querySelector('.burger_menu_btn');
        if (burger) {
            burger.onclick = () => {
                burgerStatus === false ? setBurgerStatus(true) : setBurgerStatus(false)
            }
            burger.className = burgerStatus === false ? 'burger_menu_btn' : 'burger_menu_btn burger_active';
        }
    });

    if (window.outerWidth > 768) {
        return (
            <>
                <div className={documentPosition > 0 ? 'header_wrapper black_bg' : 'header_wrapper'}>
                    <nav className='header_container'>
                        <ul className="header_contacts">
                            <li className='logo_wrapper'>
                                <a href="/" className='logo'></a>
                            </li>
                            <div className="contacts_block">
                                <li className='list_item'>
                                    <h3>Владивосток</h3>
                                    <div className='item_string'>
                                        <svg width="20" height="20" fill='white' viewBox='0 0 24 24'>{icons.phone_icon}</svg>
                                        <a className="phone_number_link" href='tel:+79024867563'
                                            onMouseOver={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.add('fill_red')
                                                }
                                            }
                                            onMouseOut={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.remove('fill_red')
                                                }
                                            }

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
                                    <div className='item_string'>
                                        <svg width="20" height="20" fill='white' viewBox='0 0 24 24'>{icons.phone_icon}</svg>
                                        <a className="phone_number_link" href='tel:+79240023200'
                                            onMouseOver={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.add('fill_red')
                                                }
                                            }
                                            onMouseOut={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.remove('fill_red')
                                                }
                                            }

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
                                    {/* <div className='item_string'>
                                        <svg width="24" height="24" fill='white' viewBox='0 0 16 16'>{icons.geo}</svg>
                                        <a href='#'>
                                            _ВАШЕ МЕСТОПОЛОЖЕНИЕ_
                                        </a>
                                    </div> */}
                                </li>
                                <li className='list_item'>
                                    <h3>Сочи</h3>
                                    <div className='item_string'>
                                        <svg width="20" height="20" fill='white' viewBox='0 0 24 24'>{icons.phone_icon}</svg>
                                        <a className="phone_number_link" href='tel:+79873636788' 
                                            onMouseOver={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.add('fill_red')
                                                }
                                            }
                                            onMouseOut={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.remove('fill_red')
                                                }
                                            }

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

                                    {/* <div className='item_string'>
                                        <svg width="24" height="24" fill='white' viewBox='0 0 16 16'>{icons.geo}</svg>
                                        <a target='_blank' href='#'>
                                            _ВАШЕ МЕСТОПОЛОЖЕНИЕ_
                                        </a>
                                    </div> */}
                                </li>
                                <li className='list_item'>
                                    <h3>Краснодар</h3>
                                    <div className='item_string'>
                                        <svg width="20" height="20" fill='white' viewBox='0 0 24 24'>{icons.phone_icon}</svg>
                                        <a className="phone_number_link" href='tel:+79897519091'
                                            onMouseOver={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.add('fill_red')
                                                }
                                            }
                                            onMouseOut={
                                                (event) => {
                                                    event.target.closest('div').querySelector('svg').classList.remove('fill_red')
                                                }
                                            }

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
                            </div>
                        </ul>
                        <ul className='header_links'>
                            <li className={servicesModal === false ? 'link_item' : 'link_item active_link_item'} onClick={() => modalToggle('services', event)}>
                                <a className='context_menu_link noselect'>Услуги</a>
                                <svg width="18" height="18" viewBox='0 0 20 20' className={servicesModal === false ? 'link_triangle' : 'link_triangle_opened'}>{icons.triangle_down}</svg>
                                {servicesModal && <ModalFrame parent={modalParent} servicesModal={servicesModal}/>}
                            </li>
                            <li className={infoModal === false ? 'link_item' : 'link_item active_link_item'} onClick={() => modalToggle('info', event)}>
                                <a className='context_menu_link noselect' >Информация</a>
                                <svg width="18" height="18" viewBox='0 0 20 20' className={infoModal === false ? 'link_triangle' : 'link_triangle_opened'}>{icons.triangle_down}</svg>
                                {infoModal && <ModalFrame parent={modalParent} infoModal={infoModal}/>}
                            </li>
                            <li className='link_item'>
                                <a href="#" className='context_menu_link'>Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul className="bottom_links">
                    <li className="bottom_link vk_label">
                        <svg className="messager_logo vk" fill="#000000" viewBox="0 0 24 24">{icons.vk}</svg>
                        <a href="https://vk.com/llc_jcar" className='bottom_link_redirector'></a>                        
                    </li>
                    <li className="bottom_link whatsapp_label">
                        <svg className="messager_logo whatsapp" fill="#000000" viewBox="0 0 32 32">{icons.whatsapp}</svg>
                        <a href="https://chat.whatsapp.com/KxCG8Dzlztb2b7NoOPWIO1" className='bottom_link_redirector'></a>                        
                    </li>
                    <li className="bottom_link tg_label">
                        <svg className="messager_logo telegram" fill="#000000" viewBox="0 0 32 32">{icons.tg}</svg>
                        <a href="https://t.me/llc_jcar" className='bottom_link_redirector'></a>                        
                    </li>
                </ul>
                <Popup content={popupContent} setPopupContent={setPopupContent}/>
            </>
        )
    }
    else {
        return (
            <>
                <div className={documentPosition > 0 ? 'header_wrapper black_bg' : 'header_wrapper'}>
                    <nav className='header_container'>
                        <ul className="header_contacts">
                            <li className='logo_wrapper'>
                                <a href="/" className='logo'></a>
                            </li>
                        </ul>
                        <div className="burger_menu_btn">
                            <div className="burger_menu_top"></div>
                            <div className="burger_menu_middle"></div>
                            <div className="burger_menu_bottom"></div>
                        </div>
                    </nav>
                </div>
                <BurgerMenu burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus}/>
            </>
        )
    }
}