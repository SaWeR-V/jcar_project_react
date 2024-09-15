import { Link } from 'react-router-dom';
import './ModalFrame.css'
import { createPortal } from "react-dom"

export function ModalFrame({ parent, servicesModal, infoModal }) {
    if (!parent) return null;

    const filter = parent.textContent;
    if (filter && filter === 'Услуги') {
        return (
            createPortal(
                <nav className={servicesModal === false ? 'modal_frame' : 'modal_frame smooth_flow'}>
                    <ul className='services_frame_items'>
                        <li className='services_item'>
                            <Link to={'/autos'} className='services_link'>Автомобили</Link>
                        </li>
                        <li className='services_item'>
                            <Link to={'/motorcycles'} className='services_link'>Мотоциклы</Link>
                        </li>
                        <li className='services_item'>
                            <Link to={'/special_vehicles'} className='services_link'>Спецтехника</Link>
                        </li>
                        <li className='services_item'>
                            <Link to={'/constructors'} className='services_link'>Конструкторы</Link>
                        </li>
                    </ul>
                </nav>
            , parent)
        )
    }
    if (filter && filter === 'Информация') {
        return (
            createPortal(
                <nav className={infoModal === false ? 'modal_frame' : 'modal_frame smooth_flow'}>
                    <ul className='services_frame_items'>
                        <li className='services_item'>
                            <Link to={'/working_scheme'} className='services_link'>Схема работы</Link>
                        </li>
                        <li className='services_item'>
                            <Link to={'/contract_example'} className='services_link'>Пример договора</Link>
                        </li>
                        <li className='services_item'>
                            <Link href='/' className='services_link'>Вопрос-ответ</Link>
                        </li>
                    </ul>
                </nav>
            , parent)
        )
    }
}