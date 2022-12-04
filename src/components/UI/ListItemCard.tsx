import React from 'react'
import s from './UI.module.css'
import dragHandle from '../../assets/graphics/drag-handle.svg'
import SecondaryButton from './SecondaryButton'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'

export default function ListItemCard({
  item,
  type,
  className,
  container,
  i,
}: {
  item: any
  type?: string | undefined
  className?: string | undefined
  container?: React.RefObject<HTMLDivElement> | undefined
  i: number
}) {
  const { id, title, description, image } = item
  const displayTitle = type == 'lesson' ? `الدرس${id}: ${title}` : title
  const navigate = useNavigate()
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 1,
        ease: [0.4, 0.09, 0.16, 0.99],
      },
    },
  }
  return (
    <motion.div
      // drag
      // dragConstraints={container}
      // whileDrag={{ zIndex: 3 }}
      // dragSnapToOrigin={true}
      initial='hidden'
      animate='visible'
      variants={cardVariants}
      className={`${s['list-item-card']} ${className} d-flex align-items-center col-12`}>
      <div hidden={!type}>
        <span>#{String(id).padStart(2, '0')}</span>
      </div>
      <div className='d-flex align-items-center'>
        <img src={dragHandle} alt='' />
        {typeof image == 'string' && (
          <div className={`${s.icon}`}>
            <img src={image} alt='' className={`${image.includes('svg') ? s['svg-filter'] : ''}`} />
          </div>
        )}
        {typeof image != 'string' && <div className={`${s['svg-icon']}  icon`}>{image}</div>}
        <div className='d-flex flex-column' onClick={(e) => {
            e.preventDefault()
            type === 'lesson' ? navigate(`/${type}s/${id}`) : navigate(`${type}s/${id}`)
          }}>
          <span className={`${s['list-item-title']} ${type == 'exercice' ? 'blue-text' : ''}`}>{displayTitle}</span>
          <span className={s['list-item-desc']}>{description}</span>
        </div>

        <a
          // href={`${window.location.href}/${type}s/${id}`}
          className='me-auto'
          onClick={(e) => {
            e.preventDefault()

            type === 'lesson' ? navigate(`/${type}s/${id}`) : navigate(`${type}s/${id}`)
          }}>
          <SecondaryButton clickHandler={() => {}} hidden={!type}>
            <span>افتح</span>
          </SecondaryButton>
        </a>
      </div>
    </motion.div>
  )
}
