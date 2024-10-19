import { employersCarouselFlipper } from '../functions/employersCarouselFlipper'
import './AboutUs.css'
import { employers } from './empoyers'
import { useEffect } from 'react'


export function AboutUs() {
    
    useEffect(() => {
        employersCarouselFlipper();
    },[])

    return (
        <section className="about_us_wrapper">
            <div className="about_us_info_block">
                <div className="employers_cards_container">
                    <div className='cards_wrapper'>
                        <h1 className='about_us_header'>Наша команда</h1>
                        <div className="carousel_controls">
                            <div className='employers_back_btn_area'>
                                <button className='carousel_btn back employers_back'/>
                            </div>
                            <div className='employers_next_btn_area'>
                                <button className='carousel_btn next employers_next'/>
                            </div>
                        </div>
                        <div className="cards_container">
                            {employers.map((item, index) => (
                                <div key={index} id={index} className="employer_card">
                                    <div className="employer_card_ava_wrapper">
                                        <img className="card_ava" src={item.ava} alt="Ava" />
                                    </div>
                                    <div className='employer_info'>
                                        <h3 className='employer_name'>{item.full_name}</h3>
                                        <p className="employer_post">{item.post}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='card_position_btns_container'>
                            {employers.map((item, index) => (
                                <button className="card_position_btn" key={index} id={index}></button>
                            ))}
                        </div>
                    </div>
                </div>
                <article className="who_are_we">
                    <div className="who_are_we_heading">
                        <h1 className='about_us_header'>Кто мы?</h1>

                    </div>
                    <p className='who_are_we_paragraph'>
                        JCAR — это надёжная компания работающая на рынке РФ уже более 10 лет.
                        Мы специализируемся на покупке и доставке автомобилей с аукционов Японии, Китая и Южной Кореи, предлагаем широкий ассортимент транспортных средств, включая легковые автомобили, мототехнику, грузовики, спецтехнику и многое другое.
                    </p>
                    <p className='who_are_we_paragraph'>
                        Наша команда состоит из опытных специалистов.
                        Мы работаем с ведущими аукционными площадками и имеем налаженные связи с поставщиками автомобилей из разных стран.
                    </p>
                    <p className='who_are_we_paragraph'>
                        JCAR гарантирует своим клиентам высокое качество услуг, индивидуальный подход и прозрачное ценообразование.
                        Мы предоставляем полный спектр услуг, связанных с расчетом стоимости, поиском, покупкой, доставкой и растаможиванием автомобилей, а также помощь в оформлении всех необходимых документов.
                        Обратившись в JCAR, вы сможете приобрести автомобиль своей мечты по выгодной цене и с минимальными затратами времени и нервов.
                    </p>
                </article>
            </div>
        </section>
    )
}