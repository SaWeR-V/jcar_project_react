import './HappyClients.css'
import { happyClients } from './ourClients'
import { useEffect, useState } from 'react'
import { adjustableCarouselFlipper } from '../functions/adjustableCarouserFlipper'
import { RecallOrderModal } from '../modal/RecallOrderModal'
import { Popup } from '../popup/Popup'

export function HappyClients() {
    const [modalStat, setModalStat] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [choosenCar, setChoosenCar] = useState([]);

    useEffect(() => {
        if (window.outerWidth > 768) {
            adjustableCarouselFlipper(3, 20, '.clients_back', '.clients_next', '.happy_client_card')
        }
        else if (window.outerWidth <= 768) {
            adjustableCarouselFlipper(2, 20, '.clients_back', '.clients_next', '.happy_client_card')
        }
    }, [])

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
                                <img className="happy_client_photo"  src={item.photo} alt={item.car} loading='lazy'/>
                                {item.video && <button className='happy_client_play_video'
                                    onClick={
                                        (e) => {
                                            e.stopPropagation();
                                            const mainBlock = e.target.closest('.happy_client_photo_wrapper');
                                            const buttonPlay = mainBlock.querySelector('.happy_client_play_video');
                                            buttonPlay.classList.add('hidden');
                                            
                                            const videoBox = document.createElement('video');
                                            videoBox.className = 'happy_client_card_video fade-in';
                                            videoBox.src = item.video;
                                            videoBox.autoplay = true;
                                            videoBox.controls = true;
                                            mainBlock.querySelector('.happy_client_photo').replaceWith(videoBox);
                                            mainBlock.insertAdjacentHTML('afterbegin', `
                                                    <button class="happy_client_card_video_close_btn"></button>
                                            `);

                                            const closeVideo = mainBlock.querySelector('.happy_client_card_video_close_btn');
                                            const cardPhoto = document.createElement('img');
                                            cardPhoto.src = item.photo;
                                            cardPhoto.className = 'happy_client_photo fade-in';

                                            closeVideo.onclick = () => {
                                                mainBlock.querySelector('.happy_client_card_video').replaceWith(cardPhoto);
                                                buttonPlay.classList.remove('hidden');
                                                closeVideo.remove();
                                            };
                                            
                                            videoBox.onended = () => {
                                                mainBlock.querySelector('.happy_client_card_video').replaceWith(cardPhoto);
                                                buttonPlay.classList.remove('hidden');
                                                closeVideo.remove();
                                            };
                                        }
                                    }/>}
                            </div>
                            <div className="happy_client_info_block">
                                <span className='like_a_clients invisible' 
                                    onClick={(e) => {
                                    
                                        setModalStat(true);
                                        const parentBlock = e.target.closest('.happy_client_card').querySelector('.happy_client_info_block');
                                        const carChars = parentBlock.querySelectorAll('.char');
                                        let charsString = '';
                                        carChars.forEach(char => charsString += `${char.textContent}\n`)
        
                                        setChoosenCar({
                                            car_name: parentBlock.querySelector('.car_name').textContent,
                                            car_chars: charsString
                                        });
                                    }}
                                >Хочу такую!</span>
                                <h3 className='car_name'>{item.car}</h3>
                                <ul className='car_chars'>
                                    <li className='char type'>{item.type}</li>
                                    <li>|</li>
                                    <li className='char power'>{item.power + ' л.с.'}</li>
                                    <li>|</li>
                                    <li className='char engine'>{item.engine + ' л.'}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Popup content={popupContent} setPopupContent={setPopupContent}/>
            {modalStat === true ? <RecallOrderModal setModalStat={setModalStat} car={choosenCar} setChoosenCar={setChoosenCar} setPopupContent={setPopupContent}/> : null}
        </section>
    )
}