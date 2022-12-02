import React from 'react'
import "./ChapterCard.css"

export default function ChapterCard( {title, description, image} : {title: string, description: string, image: string} ) {
  return (
    <div className='d-flex flex-column chapter-card flex-grow-1'>
      <div><img src={image} alt="" /></div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
