import React from 'react'
import avatar from '../../assets/graphics/avatar.jpeg'
import {RiArrowDownSLine} from "react-icons/ri"

export default function UserHeader() {
  return <div className='col-2 d-flex user gap-2'>
    <div><img src={avatar} alt="" /></div>
    <div className='d-flex flex-column'>
      <span>محمد أمين</span>
      <span>Admin</span>
    </div>
    <div className='me-2'><RiArrowDownSLine/></div>
  </div>
}
