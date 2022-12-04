import React from 'react'
import PageHeading from '../UI/PageHeading'
import SecondaryButton from '../UI/SecondaryButton'
import ListItemCard from '../UI/ListItemCard'
import MainButton from '../UI/MainButton'
import ch1 from '../../assets/graphics/chapters/ch1.png'
import ch2 from '../../assets/graphics/chapters/ch2.png'
import ch3 from '../../assets/graphics/search-icon.svg'
import ch4 from '../../assets/graphics/chapters/ch4.png'
import ch5 from '../../assets/graphics/chapters/ch5.png'
import ch6 from '../../assets/graphics/chapters/ch6.png'
import ch7 from '../../assets/graphics/chapters/ch7.png'
//import bulb icon from react-icons
import { BsLightbulb } from 'react-icons/bs'
//import thumb up/down from react-icons
import { MdOutlineThumbsUpDown } from 'react-icons/md'
import { useNavigate } from 'react-router'

export default function OneLesson() {
  const exercices = [
    {
      id: 1,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: <BsLightbulb />,
    },
    {
      id: 3,
      title: 'London Central',
      description: 'تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية',
      image: <MdOutlineThumbsUpDown />,
    },
  ]

  const navigate = useNavigate()
  return (
    <main className='d-flex flex-column w-100 lessons'>
      <PageHeading title='أكمل دورة اللغة الانجليزية' preTitle='الفصل 1'>
        <SecondaryButton clickHandler={() => {}}>تعديل</SecondaryButton>
        <MainButton clickHandler={() => {navigate('/lessons/1/build')}}>أضف تمرين جديد</MainButton>
      </PageHeading>
      <section>
        <h4>
          <span className='blue-text'>الدرس 1:</span> <span>أساسيات السفر</span>
        </h4>
        {exercices.map((e, i) => {
          return <ListItemCard key={`exercice${e.id}`} item={e} type='exercice' i={i}></ListItemCard>
        })}
      </section>
    </main>
  )
}
