import { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideNav from './components/UI/SideNav'
import Header from './components/Header/Header'
import MainSection from './components/UI/MainSection'
import { Route, Routes } from 'react-router-dom'
import Chapters from './components/Pages/Chapters'
import Lessons from './components/Pages/Lessons'
import OneLesson from './components/Pages/OneLesson'
import OneExercice from './components/Pages/OneExercice'
import BuildExercice from './components/Pages/BuildExercice'
import { StylesContext } from './components/contexts/Context'
import { AnimatePresence } from 'framer-motion'
function App() {
  // const [isOverlayShown, setIsOverlayShown] = useState(false)
  const { isOverlayShown, setIsOverlayShown } = useContext(StylesContext)
  return (
    <div className='root-container d-flex vh-100'>
      {}
      <div
        className={`overlay ${isOverlayShown ? 'show' : ''}`}
        hidden={!isOverlayShown}
        onClick={() => {
          setIsOverlayShown(false)
        }}></div>
      <SideNav />
      <div className='content-wrapper d-flex flex-column'>
        <Header />
        <AnimatePresence mode='wait' presenceAffectsLayout={true}>
          <Routes>
            <Route path='/' element={<Chapters />} />
            <Route path='/chapters/' element={<Chapters />} />
            <Route path='/lessons/' element={<Lessons />} />
            <Route path='/lessons/:id' element={<OneLesson />} />
            <Route path='/lessons/:id/build' element={<BuildExercice />} />
            <Route path='/lessons/:lsid/exercices/:exid' element={<OneExercice />} />
            <Route path='/chapters/' element={<Chapters />} />
            <Route path='/chapters/' element={<Chapters />} />
            <Route path='/chapters/' element={<Chapters />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
