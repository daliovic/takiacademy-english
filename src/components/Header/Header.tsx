import React from 'react'
import './Header.css'
import SearchBar from './SearchBar'
import UserHeader from './UserHeader'

export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <div className='col-10'>
        <div className='col-6 mx-auto'>
          <SearchBar />
        </div>{' '}
      </div>
      <UserHeader />
    </header>
  )
}
