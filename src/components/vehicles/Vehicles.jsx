import './Vehicles.css'
import { useEffect, useState } from 'react';
import { Popup } from '../popup/Popup';
import { RecallOrderModal } from '../modal/RecallOrderModal';

export function Vehicles({data}) {
    const [visibleCards, setVisibleCards] = useState([]);
    const [cardsToShow, setCardsToShow] = useState(10);
    const [popupContent, setPopupContent] = useState(null);
    const [modalStat, setModalStat] = useState(false);
    const [choosenCar, setChoosenCar] = useState([]);

    useEffect(() => {
        setVisibleCards(data.slice(0, cardsToShow));
    }, [data, cardsToShow]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1116 >= document.documentElement.offsetHeight) {
            renderMoreCards();
        }
    };

    const renderMoreCards = () => {
        if (cardsToShow >= data.length) return;

        const newCardsQuantity = cardsToShow + 10;
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

    function formatter(value) {
        const newValue = new Intl.NumberFormat("ru", {maximumSignificantDigits: 3}).format(value);
        return newValue;
    }

    return (
        <div className='main_content_wrapper vehicles'>
            <div className="available_vehicles">

                    {visibleCards.map((item, index) => (
                        <div key={index} className="available_vehicle_card">
                            <div className="vehicle_image_wrapper">
                                <img className="vehicle_image" src={item.image} alt={item.name} />
                            </div>
                            <div className="vehicle_info_block">
                                <div className="about_vehicle">
                                    <h3 className='car_name'>{item.name}</h3>
                                    <ul className='car_chars'>
                                        <li className='char'>{item.type}</li>
                                        <li>|</li>
                                        <li className='char'>{item.power}</li>
                                        <li>|</li>
                                        <li className='char'>{item.engine}</li>
                                        <li>|</li>
                                        <li className='char'>{item.transmission}</li>
                                    </ul>
                                </div>
                                <h3 className='vehicle_price'>От <span className='vehicle_price_accent'>{item.price}</span> руб.</h3>
                                <button className='want_the_same noselect' onClick={(e) => {
                                    setModalStat(true);
                                    const parentBlock = e.target.closest('.vehicle_info_block').querySelector('.about_vehicle');
                                    const carChars = parentBlock.querySelector('.car_chars').querySelectorAll('.char');
                                    let charsString = '';
                                    carChars.forEach(char => charsString += `${char.textContent}\n`);

                                    setChoosenCar({
                                        car_name: parentBlock.querySelector('.car_name').textContent,
                                        car_chars: charsString
                                    });
                                }}
                                >Заказать</button>
                            </div>
                        </div>
                    ))}

            </div>
            <Popup content={popupContent} setPopupContent={setPopupContent}/>
            {modalStat === true ? <RecallOrderModal setModalStat={setModalStat} car={choosenCar} setChoosenCar={setChoosenCar} setPopupContent={setPopupContent}/> : null}
        </div>
    )
} 