import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideNav from './components/UI/SideNav'
import Header from './components/Header/Header'
import MainSection from './components/UI/MainSection'

function App() {
  return (
    <div className='root-container d-flex'>
      <SideNav />
      <div className='w-100'>
        <Header />
        <MainSection />
      </div>
    </div>
  )
}

export default App
