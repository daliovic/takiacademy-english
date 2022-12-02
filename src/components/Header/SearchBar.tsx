import React from 'react'
import searchIcon from '../../assets/graphics/search-icon.svg'

export default function SearchBar() {
  return (
    <div className='d-flex justify-content-center col-10'>
      <div className='col-6 d-flex position-relative'>
        <img src={searchIcon} className='search-icon' alt='' />
        <input className='w-100' type='text' placeholder='ابحث عن أي شيء' />
      </div>
    </div>
  )
}
