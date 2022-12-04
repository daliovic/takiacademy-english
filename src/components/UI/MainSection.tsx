import React from 'react'
import ChapterCard from './ChapterCard'
import './MainSection.css'
import ch1 from '../../assets/graphics/chapters/ch1.png'
import ch2 from '../../assets/graphics/chapters/ch2.png'
import ch3 from '../../assets/graphics/chapters/ch3.png'
import ch4 from '../../assets/graphics/chapters/ch4.png'
import ch5 from '../../assets/graphics/chapters/ch5.png'
import ch6 from '../../assets/graphics/chapters/ch6.png'
import ch7 from '../../assets/graphics/chapters/ch7.png'
import MainButton from './MainButton'

export default function MainSection() {
  const chapters = [
    {
      id: 1,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: ch1,
    },
    {
      id: 2,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: ch2,
    },
    {
      id: 3,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: ch3,
    },
    {
      id: 4,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: ch4,
    },
    {
      id: 5,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: ch5,
    },
    {
      id: 6,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: ch6,
    },
    {
      id: 7,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: ch7,
    },
  ]
  return (
    <main className='d-flex flex-column w-100'>
      <div className='main-title d-flex justify-content-between'>
        <span>الفصول</span>
        <MainButton clickHandler={() => {}}>أضف فصل جديد</MainButton>
      </div>
      <section>
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} title={chapter.title} description={chapter.description} image={chapter.image} />
        ))}
      </section>
    </main>
  )
}
