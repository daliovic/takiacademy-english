import React from 'react'
import ChapterCard from './ChapterCard'
import './MainSection.css'

export default function MainSection() {
  return (
    <main className='d-flex flex-column'>
      <div className='main-title d-flex justify-content-between'>
        <span>الفصول</span>
        <button>أضف فصل جديد</button>
      </div>

      <section>
        <ChapterCard/>
      </section>
    </main>
  )
}
