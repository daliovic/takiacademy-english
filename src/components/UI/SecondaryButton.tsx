import React from 'react'
import s from './UI.module.css'
import { motion } from 'framer-motion'

export default function SecondaryButton({
  children,
  clickHandler,
  classes: className,
  hidden,
}: {
  children: React.ReactNode
  clickHandler?: () => void
  classes?: string
  hidden?: boolean
}) {
  const buttonVariants = {
    initial: {
      boxShadow: '0px 0px 0px 0px rgba(22, 49, 206, 0.239)  ',
      backgroundColor: 'hsl(220, 0%, 100%)',
      transition: {
        duration: 0.5,
        ease: [0.4, 0.09, 0.16, 0.99],
        type: 'tween',
      },
    },
    hover: {
      boxShadow: '0px 0px 15px 2px rgba(22, 49, 206, 0.4)',
      backgroundColor: 'hsl(220, 0%, 97%)',
      transition: {
        duration: 1,
        ease: [0.4, 0.09, 0.16, 0.99],
        type: 'tween',
      },
    },
  }
  return (
    <button
      // <.button
      // initial='initial'
      // whileHover='hover'
      // animate='initial'
      // transition={{ duration: 1, ease: 'easeOut' }}
      // variants={buttonVariants}
      onClick={clickHandler}
      className={`${s['secondary-button']} ${className}`}
      hidden={hidden}>
      {children}
    </button>
  )
}
