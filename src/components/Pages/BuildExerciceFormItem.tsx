import React from 'react'
import MainButton from '../UI/MainButton'
import s from './BuildExercice.module.css'

export default function BuildExerciceFormItem({
  item,
  type,
  className,
}: {
  item: any
  type?: string | undefined
  className?: string | undefined
}) {
  const { id, title, description, image, placeholder, buttonText } = item
  const trueFalse = title === 'صحيحة أو خاطئة'
  return (
    <div className={`${className}`}>
      <div className={`${s.label} d-flex`}>
        <div className={`${s.icon} blue-filter`}>{image}</div>
        <h5>{title}</h5>
      </div>
      <div className={`${s['control-group']} ${trueFalse ? s['true-false'] : ''} d-flex flex-column`}>
        {trueFalse && (
          <div className={`${s['radio-group']} d-flex flex-column`}>
            <div className={`${s['top-border']}`}></div>

            <span>الإجابة الملائمة (للفيديو, للصورة...)</span>
            <div className='d-flex gap-2'>
              <div className={`${s['radio-item']} d-flex align-items-center`}>
                <input type='radio' name='true-false' id='true' />
                <label htmlFor='true'>صحيحة</label>
              </div>
              <div className={`${s['radio-item']} d-flex align-items-center`}>
                <input type='radio' name='true-false' id='false' />
                <label htmlFor='false'>خاطئة</label>
              </div>
            </div>
            <span>إجابة صحيحة</span>
            <div className={`${s['bottom-border']} d-flex`}></div>
          </div>
        )}
        <div className={`${s['input-group']} d-flex`}>
          <input type='text' placeholder={placeholder} />
          <MainButton hidden={buttonText.length == 0} className={`${s['input-button']}`}>
            اختر ملف
          </MainButton>
        </div>
      </div>
    </div>
  )
}
