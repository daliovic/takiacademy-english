import React from 'react'
import MainButton from './MainButton'
import s from './UI.module.css'

export default function PageHeading({
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
        {preTitle ? (
          <>
            <span className={s['pre-title']}>
              {preTitle}
              {`: `}
            </span>
            <span>{title}</span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </div>
      {children}
    </div>
  )
}
