import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideNav from './components/UI/SideNav'
import Header from './components/Header/Header'
import MainSection from './components/UI/MainSection'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

function App() {
  return (
    <div className='root-container d-flex flex-strech'>
      <SideNav />
      <div className='content-wrapper'>
        <Header />
        <Routes>
          <Route path='/chapters/' element={<MainSection />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
