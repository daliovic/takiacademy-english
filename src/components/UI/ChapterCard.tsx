import React from 'react'
import ch1 from "../../assets/graphics/chapters/ch1.png"
import "./ChapterCard.css"

export default function ChapterCard() {
  return (
    <div className='d-flex flex-column chapter-card'>
      <div><img src={ch1} alt="" /></div>
      <div>
        <p>London Central</p>
        <p>تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية</p>
      </div>
    </div>
  )
}
