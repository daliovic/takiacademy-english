import React from 'react'
import s from './UI.module.css'
import { motion } from 'framer-motion'

export default function MainButton({
  children,
  clickHandler,
  className: className,
  hidden,
}: {
  children: React.ReactNode
  clickHandler?: () => void
  className?: string
  hidden?: boolean
}) {

  return (
    <button className={`${s['main-button']} ${className}`} hidden={hidden} onClick={clickHandler}>
      {children}
    </button>
  )
}
