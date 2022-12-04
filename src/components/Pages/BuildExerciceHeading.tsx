import React from 'react'
import MainButton from '../UI/MainButton'
import s from '../UI/UI.module.css'
//import pencil icon react icons
import { MdOutlineModeEditOutline } from 'react-icons/md'

export default function BuildExerciceHeading({
  children,
  title,
  preTitle,
}: {
  children: React.ReactNode
  title: string
  preTitle?: string
}) {
  return (
    <div className={`${s['page-heading']} d-flex justify-content-end w-100 gap-4`}>
      <div className='flex-grow-1'>
        <span>{`إسم التمرين: `}</span>
        <span className='fw-normal'>{title}</span> <MdOutlineModeEditOutline color='var(--color-primary)' size={22} />
      </div>
      {children}
    </div>
  )
}
