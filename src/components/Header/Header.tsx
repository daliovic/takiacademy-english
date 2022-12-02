import React from 'react'
import "./Header.css"
import SearchBar from './SearchBar'
import UserHeader from './UserHeader'

export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
        <SearchBar />
        <UserHeader />
    </header>
  )
}
