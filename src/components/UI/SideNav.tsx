import React from 'react'
import './SideNav.css'
import TALogoEN from '../../assets/graphics/TA Logo EN.svg'
import chaptersIcon from '../../assets/graphics/nav-icons/chapters-icon.svg'
import levelsIcon from '../../assets/graphics/nav-icons/levels-icon.svg'
import lessonsIcon from '../../assets/graphics/nav-icons/lessons-icon.svg'
import usersIcon from '../../assets/graphics/nav-icons/users-icon.svg'
import settingsIcon from '../../assets/graphics/nav-icons/setting-icon.svg'

export default function SideNav() {
  const navSections = [
    {
      title: 'الفصول',
      icon: chaptersIcon,
    },
    {
      title: 'المستويات',
      icon: levelsIcon,
    },
    {
      title: 'الدروس',
      icon: lessonsIcon,
    },
    {
      title: 'المستخدمين',
      icon: usersIcon,
    },
    {
      title: 'الإعدادات',
      icon: settingsIcon,
    },
  ]
  return (
    <aside className='side-nav d-flex flex-column align-items-center'>
      <div>
        <img src={TALogoEN} alt='' className='nav-logo' />
      </div>
      <div className={'chapters'}>
        <ul>
          {navSections.map((item, i) => {
            return (
              <li key={i} className='active'>
                <img src={item.icon} />
                {item.title}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
