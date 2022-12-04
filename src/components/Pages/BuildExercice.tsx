import React from 'react'
import MainButton from '../UI/MainButton'
import BuildExerciceHeading from './BuildExerciceHeading'
import SecondaryButton from '../UI/SecondaryButton'
import SearchBar from '../Header/SearchBar'
import s from './BuildExercice.module.css'
import '../Header/Header.css'
//import TbDragDrop2 icon react icons
import { TbDragDrop2 } from 'react-icons/tb'
import { BsHeadphones } from 'react-icons/bs'
import { RxLetterCaseCapitalize } from 'react-icons/rx'
import { TfiText } from 'react-icons/tfi'
import { BiFilm } from 'react-icons/bi'
import { IoImageOutline } from 'react-icons/io5'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { HiOutlineFilter } from 'react-icons/hi'
import {
  MdOutlineDesktopWindows,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineThumbsUpDown,
} from 'react-icons/md'
import { RiSmartphoneLine } from 'react-icons/ri'
import ListItemCard from '../UI/ListItemCard'
import BuildExerciceFormItem from './BuildExerciceFormItem'
import { motion } from 'framer-motion'
const options = [
  {
    id: 1,
    title: 'سؤال',
    description: 'ضع السؤال هنا',
    image: <AiOutlineQuestionCircle />,
    placeholder: 'السؤال',
    buttonText: '',
  },
  {
    id: 2,
    title: 'صورة',
    description: 'ضع الصورة هنا',
    image: <IoImageOutline />,
    placeholder: 'الصورة',
    buttonText: 'إختر ملف',
  },
  {
    id: 3,
    title: 'فيديو',
    description: 'ضع الفيديو هنا',
    image: <BiFilm />,
    placeholder: 'الفيديو',
    buttonText: 'إختر ملف',
  },
  {
    id: 4,
    title: 'صحيحة أو خاطئة',
    description: 'ضع الصحيحة أو الخاطئة هنا',
    image: <MdOutlineThumbsUpDown />,
    placeholder: 'الصحيحة أو الخاطئة',
    buttonText: '',
  },
  {
    id: 5,
    title: 'نص',
    description: 'ضع النص هنا',
    image: <TfiText />,
    placeholder: 'النص',
    buttonText: '',
  },
  {
    id: 6,
    title: 'وصف',
    description: 'ضع الوصف هنا',
    image: <RxLetterCaseCapitalize />,
    placeholder: 'الوصف',
    buttonText: '',
  },
  {
    id: 7,
    title: 'صوت',
    description: 'ضع الصوت هنا',
    image: <BsHeadphones />,
    placeholder: 'الصوت',
    buttonText: '',
  },
  {
    id: 8,
    title: 'توصيل بطاقات',
    description: 'ضع البطاقات هنا',
    image: <TbDragDrop2 />,
    placeholder: 'البطاقات',
    buttonText: '',
  },
  {
    id: 9,
    title: 'توصيل بطاقات',
    description: 'ضع البطاقات هنا',
    image: <TbDragDrop2 />,
    placeholder: 'البطاقات',
    buttonText: '',
  },
]
export default function BuildExercice() {
  const [activeView, setActiveView] = React.useState('web')
  const optionsContainerRef = React.useRef<HTMLDivElement>(null)
  return (
    <main className={`${s['build']} d-flex flex-row w-100 p-0`}>
      <div className={`${s['right-side']} col-3 d-flex flex-column h-100`}>
        <div className={`${s['sidebar-header']}' h-100'`}>
          <h4 className='fw-bold'>بناء </h4>
          <div className='d-flex flex-row'>
            <div className='flex-grow-1 '>
              <SearchBar />
            </div>
            <div className={`${s['filter-icon']} me-2 d-flex`}>
              <HiOutlineFilter className='m-auto' size={23} />
            </div>
          </div>
        </div>
        <motion.div className={`${s['options-container']} d-flex flex-column overflow-scroll`}>
          {options.map((e, i) => {
            return (
              <ListItemCard
                key={`option${e.id}`}
                item={e}
                className={`${s['option-card']}`}
                container={optionsContainerRef}
                i={i}></ListItemCard>
            )
          })}
        </motion.div>
      </div>
      <section className={`col-6 h-100 d-flex flex-column`}>
        <BuildExerciceHeading title='نصيحة'>
          <MainButton clickHandler={() => {}}>حفظ</MainButton>
        </BuildExerciceHeading>
        <div className={`${s['builder-container']} d-flex flex-column align-items-center h-100`}>
          <div dir='ltr' className={`${s['view-switchers']} d-flex`}>
            <button
              className={`${activeView === 'web' ? s['active'] : ''}`}
              onClick={() => {
                setActiveView('web')
              }}>
              <MdOutlineDesktopWindows className='me-2' />
              Web View
            </button>
            <button
              className={`${activeView === 'mobile' ? s['active'] : ''}`}
              onClick={() => {
                setActiveView('mobile')
              }}>
              <RiSmartphoneLine className='me-2' />
              Mobile View
            </button>
            {/* <button>Mobile View</button> */}
          </div>
          <div
            ref={optionsContainerRef}
            className={`${s['preview']} ${activeView === 'web' ? s['web'] : s['mobile']}`}></div>
          <div className={`${s['bottom-nav']}  d-flex`}>
            <div>
              <span>التالي</span>
              <button>
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
            <div className={`${s['']}`}>
              <button disabled>
                <MdKeyboardArrowLeft size={24} />
              </button>
              <span>السابق</span>
            </div>
          </div>
        </div>
      </section>
      <div className={` ${s['left-side']}  col-3`}>
        <h4 className='fw-bold'>ضوابط </h4>
        {options.map((e, i) => {
          return (
            <BuildExerciceFormItem
              key={`option${e.id}`}
              item={e}
              className={`${s['form-item']}`}></BuildExerciceFormItem>
          )
        })}
      </div>
    </main>
  )
}
