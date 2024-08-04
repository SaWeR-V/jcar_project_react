import { Routes, Route} from 'react-router'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { icons } from './components/icons'
import { WelcomeVideo } from './components/modal/WelcomeVideo'
import { MainPage } from './components/routes/MainPage'
import { AutosPage } from './components/routes/AutosPage'
import { Header } from './components/header/Header'

import './App.css'

// import { tabletLayout } from './components/functions/layouts/tabletLayout'

function App() {
  const [helloBaner, setHelloBaner] = useState(true);
  const modal = document.getElementById('modal')

  // useEffect(() => {
  //   if (window.outerWidth <= 768) {
  //       tabletLayout();
  //   }
  // })

  if (helloBaner && (!localStorage.getItem('jcar_welcome_video_viewed'))) {
    return (
      createPortal(
        <div className="modal_wrapper">
          <button className="close_modal" onClick={() => {setHelloBaner(false); localStorage.setItem('jcar_welcome_video_viewed', 1)}}>
              <svg width='45' height='45' viewBox='0 0 24 24' fill='white'>{icons.cross}</svg>
          </button>
          <WelcomeVideo />
        </div>, modal)
    )
  }
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/autos' element={<AutosPage />} />
      </Routes>
    </>
    
  )
}

export default App
