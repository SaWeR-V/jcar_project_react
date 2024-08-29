import { Routes, Route} from 'react-router'
import { useState} from 'react'
import { createPortal } from 'react-dom'
import { icons } from './components/icons'
import { WelcomeVideo } from './components/modal/WelcomeVideo'
import { MainPage } from './components/routes/MainPage'
import { VehiclesPage } from './components/routes/VehiclesPage'
import { Header } from './components/header/Header'

import './App.css'
import { MobileMainPage } from './components/mobile_layout/mobile_main_page/MobileMainPage'
import { Footer } from './components/footer/Footer'
import { MobileVehiclesPage } from './components/mobile_layout/mobile_vehicles_page/MobileVehiclesPage'
import { autos } from './components/vehicles/autos'
import { motorcycles } from './components/vehicles/motorcycles'
import { specials } from './components/vehicles/specials'
import { constructors } from './components/vehicles/constructors'

function App() {
  const [helloBaner, setHelloBaner] = useState(true);
  const modal = document.getElementById('modal')

  if (helloBaner && (!localStorage.getItem('jcar_welcome_video_viewed'))) {
    return (
      createPortal(
        <div className="modal_wrapper">
          <button className="close_modal" onClick={() => {setHelloBaner(false); localStorage.setItem('jcar_welcome_video_viewed', 1)}}>
              <svg width='45' height='45' viewBox='0 0 24 24' fill='white'>{icons.cross}</svg>
          </button>
          <WelcomeVideo setHelloBaner={setHelloBaner}/>
        </div>, modal)
    )
  }

  if (window.outerWidth <= 425) {
    return (
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<MobileMainPage/>} />
          <Route path='/autos' element={<MobileVehiclesPage data={autos}/>} />
          <Route path='/motorcycles' element={<MobileVehiclesPage data={motorcycles}/>} />
          <Route path='/special_vehicles' element={<MobileVehiclesPage data={specials}/>} />
          <Route path='/constructors' element={<MobileVehiclesPage data={constructors}/>} />
        </Routes>
        <Footer/>
      </>
    )
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/autos' element={<VehiclesPage props={autos}/>} />
        <Route path='/motorcycles' element={<VehiclesPage props={motorcycles}/>} />
        <Route path='/special_vehicles' element={<VehiclesPage props={specials}/>} />
        <Route path='/constructors' element={<VehiclesPage props={constructors}/>} />
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App