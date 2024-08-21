import './MobileVehiclesPage.css'
import { useState, useEffect } from 'react'
import { Popup } from '../../popup/Popup';
import { RecallOrderModal } from '../../modal/RecallOrderModal';
import { RecallOrderEmptyModal } from '../../modal/RecallOrderEmptyModal';

export function MobileVehiclesPage({data}) {
    const [visibleCards, setVisibleCards] = useState([]);
    const [cardsToShow, setCardsToShow] = useState(5);
    const [popupContent, setPopupContent] = useState(null);
    const [modalStat, setModalStat] = useState(false);
    const [modalEmptyStat, setModalEmptyStat] = useState(false);

    const [choosenCar, setChoosenCar] = useState([]);

    useEffect(() => {
        setVisibleCards(data.slice(0, cardsToShow));
    }, [data, cardsToShow]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1300 >= document.documentElement.offsetHeight) {
            renderMoreCards();
        }
    };

    const renderMoreCards = () => {
        if (cardsToShow >= data.length) return;

        const newCardsQuantity = cardsToShow + 5;
        setCardsToShow(newCardsQuantity);
        setVisibleCards(data.slice(0, newCardsQuantity));
    };

    const debounce = (fn, ms) => {
        let timeout;
        return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => fn.apply(this, args), ms);
        };
    };

    const debouncedHandleScroll = debounce(handleScroll, 200);

    useEffect(() => {
        window.addEventListener('scroll', debouncedHandleScroll);
        return () => window.removeEventListener('scroll', debouncedHandleScroll);
    },[debouncedHandleScroll]);

    useEffect(() => {
        const top = document.querySelector('.mobile_cards_grid');
        top.scrollIntoView()
    },[])

    return (
        <main className='mobile_cards_grid'>
            {visibleCards.map((vehicle, index) => (
                <div key={index} className="mobile_vehicle_card">
                    <div className="mobile_vehicle_photo_wrapper">
                        <img className="mobile_vehicle_photo" src={vehicle.image} alt={vehicle.name} />
                    </div>
                    <div className="mobile_about_vehicle_block">
                        <div className="mobile_vehicle_chars_wrapper">
                            <h2 className='mobile_vehicle_title'>{vehicle.name}</h2>
                            <ul className="mobile_vehicle_chars">
                                <li className="mobile_vehicle_char">{vehicle.type}</li>
                                <li>|</li>
                                <li className="mobile_vehicle_char">{vehicle.power} л.с.</li>
                                <li>|</li>
                                <li className="mobile_vehicle_char">{vehicle.engine} л.</li>
                                <li>|</li>
                                <li className="mobile_vehicle_char">{vehicle.transmission}</li>
                            </ul>
                         </div>
                        <h3 className='mobile_vehicle_price'>От <span className='mobile_vehicle_price_accent'>{vehicle.price}</span> руб.</h3>
                        <button className='mobile_vehicle_make_order_btn' onClick={(e) => {
                            setModalStat(true);
                            const parentBlock = e.target.closest('.mobile_about_vehicle_block').querySelector('.mobile_vehicle_chars_wrapper');
                            const carChars = parentBlock.querySelector('.mobile_vehicle_chars').querySelectorAll('.mobile_vehicle_char');
                            let charsString = '';
                            carChars.forEach(char => charsString += `${char.textContent}\n`);

                            setChoosenCar({
                                car_name: parentBlock.querySelector('.mobile_vehicle_title').textContent,
                                car_chars: charsString
                            });
                        }}
                        >Заказать</button>
                    </div>
                </div>
            ))}

            <aside className='didnot_found'>
                <p>Не нашли, что искали? Оставьте <a className='mobile_open_empty_modal_recall_order' onClick={() => setModalEmptyStat(true)}>заявку</a> и наши менеджеры свяжутся с вами!</p>
            </aside>

            <Popup content={popupContent} setPopupContent={setPopupContent}/>
            {modalStat === true ? <RecallOrderModal setModalStat={setModalStat} car={choosenCar} setChoosenCar={setChoosenCar} setPopupContent={setPopupContent}/> : null}
            {modalEmptyStat === true ? <RecallOrderEmptyModal setModalEmptyStat={setModalEmptyStat} /> : null}
        </main>
    )
}