import React from 'react'
import './ChapterCard.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function ChapterCard({
  title,
  description,
  image,
  i,
}: {
  title: string
  description: string
  image: string
  i: number
}) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 1,
        ease: [0.4, 0.09, 0.16, 0.99],
      },
    },
  }
  const navigate = useNavigate()

  return (
    
    <motion.div
      className='d-flex flex-column chapter-card flex-grow-1'
      initial='hidden'
      animate='visible'
      whileHover={{cursor: 'pointer'}}
      variants={cardVariants}
      onClick={() => {navigate('/lessons')}}>
      <div>
        <img src={image} alt='' />
      </div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </motion.div>
  )
}
