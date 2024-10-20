import './WorkingScheme.css'
import { useEffect, useState } from 'react'
import { Popup } from '../../popup/Popup'
import { RecallOrderEmptyModal } from '../../modal/RecallOrderEmptyModal'

export function WorkingScheme() {
    const [popupContent, setPopupContent] = useState(null);
    const [modalEmptyStat, setModalEmptyStat] = useState(false);

    useEffect(() => {
        const top = document.querySelector('.working_scheme_wrapper');
        top.scrollIntoView()
    },[])

    useEffect(() => {
        let stageCounter = 0;
        const stages = document.querySelectorAll('.working_stage_block');

        let interval = setInterval(() => {
            if (stageCounter !== stages.length) {
                stages.forEach((stage, index) => {
                    if (index === stageCounter) {
                        stage.classList.remove('invisible')
                        stage.classList.add('fade-in')
                    }
                })
                stageCounter++;
            }
            else {
                clearInterval(interval)
            }
        }, 1000)
            
    }, [])

    return (
        <main className='working_scheme_wrapper'>
            <div className='working_scheme_block fade-in'>
                <h1 className='working_scheme_title'>Схема работы</h1>
                <div className="working_stages">
                    <div className="working_stage_block invisible">
                        <h3 className="working_stage_block_header"><span className='working_stage_step'>1</span>Бесплатная консультация</h3>
                        <p className="working_stage_block_text">Анализируем стоимость автомобиля c учетом пожеланий заказчика</p>
                        <button className="make_consult_order" onClick={() => setModalEmptyStat(true)}>Запросить</button>
                    </div>
                    <div className="working_stage_block invisible">
                        <h3 className="working_stage_block_header"><span className='working_stage_step'>2</span>Заключение договора</h3>
                        <p className="working_stage_block_text">Согласовываем стоимость автомобиля, его технические данные, прописываем условия в договоре</p>
                    </div>
                    <div className="working_stage_block invisible">
                        <h3 className="working_stage_block_header"><span className='working_stage_step'>3</span>Внесение предоплаты</h3>
                        <p className="working_stage_block_text">Предоплата по договору перечисляется на расчетный счет компании или в кассу в офисе</p>
                    </div>
                    <div className="working_stage_block invisible">
                        <h3 className="working_stage_block_header"><span className='working_stage_step'>4</span>Подбор автомобиля</h3>
                        <p className="working_stage_block_text">Осуществляем поиск и всестороннюю проверку выбранного авто</p>
                    </div>
                    <div className="working_stage_block invisible">
                        <h3 className="working_stage_block_header"><span className='working_stage_step'>5</span>Покупка автомобиля</h3>
                        <p className="working_stage_block_text">Выкупаем одобренный заказчиком вариант</p>
                    </div>
                    <div className="working_stage_block invisible">
                        <h3 className="working_stage_block_header"><span className='working_stage_step'>6</span>Доставка в Россию</h3>
                        <p className="working_stage_block_text">Готовим документы и экспортируем автомобиль из Японии, Китая или Кореи в Россию</p>
                    </div>
                </div>
            </div>
            <Popup content={popupContent} setPopupContent={setPopupContent}/>
            {modalEmptyStat === true ? <RecallOrderEmptyModal setModalEmptyStat={setModalEmptyStat} /> : null}
        </main>
    )
}