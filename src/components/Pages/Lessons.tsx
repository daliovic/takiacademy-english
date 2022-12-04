import React, { useRef, useState } from 'react'
import ChapterCard from '../UI/ChapterCard'
import './Lessons.css'
import ch1 from '../../assets/graphics/chapters/ch1.png'
import ch2 from '../../assets/graphics/chapters/ch2.png'
import ch3 from '../../assets/graphics/chapters/ch3.png'
import ch4 from '../../assets/graphics/chapters/ch4.png'
import ch5 from '../../assets/graphics/chapters/ch5.png'
import ch6 from '../../assets/graphics/chapters/ch6.png'
import ch7 from '../../assets/graphics/chapters/ch7.png'
import MainButton from '../UI/MainButton'
import SecondaryButton from '../UI/SecondaryButton'
import PageHeading from '../UI/PageHeading'
import ListItemCard from '../UI/ListItemCard'
import { Modal } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lessons() {
  const lessons = [
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
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File>()
  const [previewSource, setPreviewSource] = useState<string>()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='d-flex flex-column w-100 lessons'>
        <PageHeading title='أكمل دورة اللغة الانجليزية'>
          <SecondaryButton clickHandler={() => {}}>تعديل</SecondaryButton>
          <MainButton clickHandler={handleShow}>أضف درس جديد</MainButton>
        </PageHeading>
        <Modal
          show={show}
          onHide={handleClose}
          className='chapters-modal'
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <Modal.Header closeButton>
            <Modal.Title>أضف درس جديد</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className='d-flex justify-content-center flex-column'>
              <div className='d-flex file-section'>
                <img
                  src={file ? previewSource : ch1}
                  onClick={() => {
                    ref?.current?.click()
                  }}></img>
                <div>
                  <div>
                    {/* <span className='input-group-text'>Customisable File Input</span> */}
                    <label className={`file-label`}>
                      <span> اختر ملف</span>
                      <input
                        type='file'
                        className='invisible'
                        ref={ref}
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            let fr = new FileReader()
                            fr.onload = () => {
                              setPreviewSource(fr.result as string)
                            }
                            fr.readAsDataURL(e.target.files[0])
                            setFile(e.target.files[0])
                            console.log(e.target.files[0])
                          }
                        }}
                      />
                    </label>
                    <span className='file-name'>{file ? file.name : 'لم يتم اختيار ملف'}</span>
                  </div>
                  <span className='file-upload-info'>JPEG or PNG Max Size of 3MB</span>
                </div>
              </div>
              <label>إسم الفصل</label>
              <input type='text' />
              <label>وصف</label>
              <textarea rows={4} />
            </div>
            <MainButton className='ms-4' clickHandler={handleClose}>
              حفظ
            </MainButton>
            <SecondaryButton clickHandler={handleClose}>إلغاء</SecondaryButton>
          </Modal.Body>

          {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
        <section className='d-flex flex-column'>
          <h5>
            <b>دورة سياحة و سفر</b>
          </h5>
          {lessons.map((l, i) => {
            return <ListItemCard key={`lesson${l.id}`} item={l} type='lesson' i={i}></ListItemCard>
          })}
        </section>
      </motion.main>
    </AnimatePresence>
  )
}
