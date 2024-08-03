import './Autos.css'
import { auto } from './auto'
import { useEffect } from 'react';
import { thematicCarouselFlipper } from '../functions/thematicCarouselFlipper';

export function Autos() {
    useEffect(() => {
        thematicCarouselFlipper();
    }, [thematicCarouselFlipper])
    return (
        <div className='main_content_wrapper autos'>
            <div className="thematic_carousel_controls">
                <div className="carousel_back_btn_area">
                    <button className="carousel_btn back thematic_back"></button>
                </div>
                <div className="carousel_next_btn_area">
                    <button className="carousel_btn next thematic_next"></button>
                </div>
            </div>
            <div className="available_vehicles_carousel">

                    {auto.map((item, index) => (
                        <div key={index} className="available_vehicle_card" 
                            onMouseOver={(e) => {
                                const span = e.target.closest('.available_vehicle_card').querySelector('span.want_the_same');
                                span.classList.remove('invisible')
                            }}
                            onMouseLeave={(e) => {
                                const span = e.target.closest('.available_vehicle_card').querySelector('span.want_the_same');
                                span.classList.add('invisible')
                            }}
                        >
                            <div className="vehicle_image_wrapper">
                                <span className='want_the_same invisible'>Заказать</span>
                                <img className="vehicle_image" src={item.image} alt={item.name} />
                            </div>
                            <div className="vehicle_info_block">
                                <h3 className='car_name'>{item.name}</h3>
                                <ul className='car_chars'>
                                    <li className='char type'>{item.type}</li>
                                    <li className='char power'>{item.power + ' л.с.'}</li>
                                    <li className='char engine'>{item.engine + ' л.'}</li>
                                </ul>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    )
} 