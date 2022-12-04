import React, { useContext } from 'react'
import searchIcon from '../../assets/graphics/search-icon.svg'
import { StylesContext } from '../contexts/Context'
import s from './SearchBar.module.css'

export default function SearchBar() {
  const { isOverlayShown, setIsOverlayShown } = useContext(StylesContext)
  const overlayStyles = {
    zIndex: 111,
    position: 'relative',
    boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.3)',
  } as React.CSSProperties
  return (
    <div
      className={`${s['search-bar']} d-flex justify-content-center w-100`}
      style={isOverlayShown ? { ...overlayStyles } : {}}>
      <div className='d-flex position-relative w-100'>
        <img src={searchIcon} className={s['search-icon']} alt='' />
        <input
          className='w-100'
          type='text'
          placeholder='ابحث عن أي شيء'
          onFocus={() => {
            setIsOverlayShown(!isOverlayShown)
          }}
        />
      </div>
    </div>
  )
}
