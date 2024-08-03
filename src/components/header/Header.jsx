import './Header.css'
import { icons } from '../icons'
import { useState, useEffect } from 'react'
import { ModalFrame } from './modal/ModalFrame';
import { tabletLayout } from '../functions/layouts/tabletLayout';

export function Header() {
    const [servicesModal, setServicesModal] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [activeNumber, setActiveNumber] = useState(null);
    const [documentPosition, setDocumentPosition] = useState(0);
    const [modalParent, setModalParent] = useState(null);

    const modalToggle = (option, event) => {

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
        if (window.outerWidth <= 768) {
            tabletLayout();
        }
    }, [tabletLayout])

    return (
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
                                <svg width="24" height="24" fill='white'>{icons.phone_icon}</svg>
                                <a className="phone_number_link" href='tel:+79024867563'>+7 902 486-75-63</a>

                                <div className='more_contacts' onMouseOver={() => setActiveNumber('vladi_1')} onMouseOut={() => setActiveNumber(null)}>

                                    <svg className={activeNumber === 'vladi_1' ? `show_more hidden` : 'show_more'} viewBox='0 0 20 20' fill='white'>{icons.plus}</svg>
                                    <div className={activeNumber === 'vladi_1' ? "messagers_block smooth_enlargement" : "messagers_block hidden"}>
                                        <a href="https://wa.me/79024867563" className="messager_link" target='_blank'>
                                            <svg className='messager_logo whatsapp' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.whatsapp}</svg>
                                        </a>
                                        <a href="https://t.me/sawer_v" className="messager_link" target='_blank'>
                                            <svg className='messager_logo tg' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.tg}</svg>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className='item_string'>
                                <svg width="24" height="24" fill='white'>{icons.phone_icon}</svg>
                                <a className="phone_number_link" href='tel:+79240023200'>+7 924 002-32-00</a>

                                <div className='more_contacts' onMouseOver={() => setActiveNumber('vladi_2')} onMouseOut={() => setActiveNumber(null)}>
                                    <svg className={activeNumber === 'vladi_2' ? 'show_more hidden' : 'show_more'} viewBox='0 0 20 20' fill='white'>{icons.plus}</svg>
                                    <div className={activeNumber === 'vladi_2' ? "messagers_block smooth_enlargement" : "messagers_block hidden"}>
                                        <a href="https://wa.me/79240023200" className="messager_link" target='_blank'>
                                            <svg className='messager_logo whatsapp' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.whatsapp}</svg>
                                        </a>
                                        <a href="https://t.me/sawer_v" className="messager_link" target='_blank'>
                                            <svg className='messager_logo tg' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.tg}</svg>
                                        </a>
                                    </div>
                                </div>

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
                                <svg width="24" height="24" fill='white'>{icons.phone_icon}</svg>
                                <a className="phone_number_link" href='tel:+79873636788'>+7 987 363-67-88</a>

                                <div className='more_contacts' onMouseOver={() => setActiveNumber('sochi_1')} onMouseOut={() => setActiveNumber(null)}>
                                    <svg className={activeNumber === 'sochi_1' ? 'show_more hidden' : 'show_more'} viewBox='0 0 20 20' fill='white'>{icons.plus}</svg>
                                    <div className={activeNumber === 'sochi_1' ? "messagers_block smooth_enlargement" : "messagers_block hidden"}>
                                        <a href="https://wa.me/79873636788" className="messager_link" target='_blank'>
                                            <svg className='messager_logo whatsapp' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.whatsapp}</svg>
                                        </a>
                                        <a href="https://t.me/sawer_v" className="messager_link" target='_blank'>
                                            <svg className='messager_logo tg' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.tg}</svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item_string'>
                                <svg width="24" height="24" fill='white'>{icons.phone_icon}</svg>
                                <a className="phone_number_link" href='tel:+79897519091'>+7 989 751-90-91</a>

                                <div className='more_contacts' onMouseOver={() => setActiveNumber('sochi_2')} onMouseOut={() => setActiveNumber(null)}>
                                    <svg className={activeNumber === 'sochi_2' ? 'show_more hidden' : 'show_more'} viewBox='0 0 20 20' fill='white'>{icons.plus}</svg>
                                    <div className={activeNumber === 'sochi_2' ? "messagers_block smooth_enlargement" : "messagers_block hidden"}>
                                        <a href="https://wa.me/79897519091" className="messager_link" target='_blank'>
                                            <svg className='messager_logo whatsapp' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.whatsapp}</svg>
                                        </a>
                                        <a href="https://t.me/sawer_v" className="messager_link" target='_blank'>
                                            <svg className='messager_logo tg' fill='#FFFFFF' viewBox='0 0 32 32'>{icons.tg}</svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='item_string'>
                                <svg width="24" height="24" fill='white' viewBox='0 0 16 16'>{icons.geo}</svg>
                                <a target='_blank' href='#'>
                                    _ВАШЕ МЕСТОПОЛОЖЕНИЕ_
                                </a>
                            </div> */}
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
    )
}