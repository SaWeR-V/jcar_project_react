import { Routes, Route} from 'react-router'
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
import { WorkingScheme } from './components/routes/working_scheme/WorkingScheme'
import { ContractExample } from './components/routes/contract_example/ContractExample'

function App() {

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
          <Route path='/working_scheme' element={<WorkingScheme />} />
          <Route path='/contract_example' element={<ContractExample />} />
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
        <Route path='/working_scheme' element={<WorkingScheme />} />
        <Route path='/contract_example' element={<ContractExample />} />
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App