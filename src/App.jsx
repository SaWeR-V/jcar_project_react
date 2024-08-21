import { Routes, Route} from 'react-router'
import { useState} from 'react'
import { createPortal } from 'react-dom'
import { icons } from './components/icons'
import { WelcomeVideo } from './components/modal/WelcomeVideo'
import { MainPage } from './components/routes/MainPage'
import { AutosPage } from './components/routes/AutosPage'
import { Header } from './components/header/Header'

import './App.css'
import { MobileMainPage } from './components/mobile_layout/mobile_main_page/MobileMainPage'
import { Footer } from './components/footer/Footer'
import { MobileVehiclesPage } from './components/mobile_layout/mobile_vehicles_page/MobileVehiclesPage'
import { auto } from './components/autos/auto'

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
          <Route path='/autos' element={<MobileVehiclesPage data={auto}/>} />
          <Route path='/motorcycles' element={<MobileVehiclesPage />} />
          <Route path='/special_vehicles' element={<MobileVehiclesPage />} />
          <Route path='/constructors' element={<MobileVehiclesPage />} />
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
        <Route path='/autos' element={<AutosPage />} />
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App