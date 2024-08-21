import './Categories.css'
import { Link } from 'react-router-dom'

export function Categories() {
    return (
        <section className='vehicles_categories'>
            <div className="vehicles_categories_blocks_wrapper">
                <div className="vehicles_categories_blocks">
                    <Link to="/autos" className="vehicle_category noselect">
                        <h3 className='vehicle_category_header'>Автомобили</h3>
                        <img src="/images/autos_icon.png" alt="Car" className='vehicle_category_image'/>
                    </Link>
                    <div className="vehicle_category right_block noselect">
                        <h3 className='vehicle_category_header right_block_header'>Мотоциклы</h3>
                        <img src="/images/motorcycles_icon.png" alt="Motorcycle" className='vehicle_category_image right_block_image motorcycle_img'/>
                    </div>
                    <div className="vehicle_category noselect">
                        <h3 className='vehicle_category_header'>Спецтехника</h3>
                        <img src="/images/special_vehicles_icon.png" alt="Motorcycle" className='vehicle_category_image special_vehicle_image'/>
                    </div>
                    <div className="vehicle_category right_block noselect">
                        <h3 className='vehicle_category_header right_block_header'>Конструкторы</h3>
                        <img src="/images/constructors_icon.png" alt="Motorcycle" className='vehicle_category_image right_block_image'/>
                    </div>
                </div>
            </div>
        </section>
    )
}