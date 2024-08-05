import './HappyClients.css'
import { happyClients } from './ourClients'
import { useEffect } from 'react'
import { adjustableCarouselFlipper } from '../functions/adjustableCarouserFlipper'

export function HappyClients() {
    useEffect(() => {
        if (window.outerWidth > 768) {
            adjustableCarouselFlipper(3, 20, '.clients_back', '.clients_next', '.happy_client_card')
        }
        else if (window.outerWidth <= 768) {
            adjustableCarouselFlipper(2, 20, '.clients_back', '.clients_next', '.happy_client_card')
        }
        if (window.outerWidth <= 425) {
            adjustableCarouselFlipper(1, 20, '.clients_back', '.clients_next', '.happy_client_card')
        }
    }, [adjustableCarouselFlipper])

    const photosContainer = document.querySelector('.happy_clients_carousel_wrapper');
    if (photosContainer && happyClients.length < 3) {
        photosContainer.style.justifyContent = "center"
    }

    return (
        <section className="happy_clients_wrapper">
            <div className='happy_clients'>
                <h1 className='happy_clients_header'>Наши клиенты</h1>
                <div className="clients_carousel_controls">
                    <div className="clients_carousel_back_btn_area">
                        <button className="carousel_btn back clients_back"></button>
                    </div>
                    <div className="clients_carousel_next_btn_area">
                        <button className="carousel_btn next clients_next"></button>
                    </div>
                </div>

                <div className='happy_clients_carousel_wrapper'>
                    {happyClients.map((item, index) => (
                        <div key={index} className="happy_client_card" 
                            onMouseOver={(e) => {
                                const span = e.target.closest('.happy_client_card').querySelector('span.like_a_clients');
                                span.classList.remove('invisible')
                            }}
                            onMouseLeave={(e) => {
                                const span = e.target.closest('.happy_client_card').querySelector('span.like_a_clients');
                                span.classList.add('invisible')
                            }}
                        >
                            <div className="happy_client_photo_wrapper">
                                <span className='like_a_clients invisible'>Хочу такую!</span>
                                <img className="happy_client_photo"  src={item.photo} alt={item.car} loading='lazy'/>
                            </div>
                            <div className="happy_client_info_block">
                                <div className="happy_client_car_chars_block">
                                    <h3 className='car_name'>{item.car}</h3>
                                    <div className='car_char_block'>
                                        <ul className='car_chars'>
                                            <li className='char type'>{item.type}</li>
                                            <li className='char power'>{item.power + ' л.с.'}</li>
                                            <li className='char engine'>{item.engine + ' л.'}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}