import React from 'react'
import './SideNav.css'
import TALogoEN from '../../assets/graphics/TA Logo EN.svg'
import chaptersIcon from '../../assets/graphics/nav-icons/chapters-icon.svg'
import levelsIcon from '../../assets/graphics/nav-icons/levels-icon.svg'
import lessonsIcon from '../../assets/graphics/nav-icons/lessons-icon.svg'
import usersIcon from '../../assets/graphics/nav-icons/users-icon.svg'
import settingsIcon from '../../assets/graphics/nav-icons/setting-icon.svg'
import { NavLink } from 'react-router-dom'

export default function SideNav() {
  const navSections = [
    {
      title: 'الفصول',
      icon: chaptersIcon,
      path: '/chapters',
    },
    {
      title: 'المستويات',
      icon: levelsIcon,
      path: '/levels',
    },
    {
      title: 'الدروس',
      icon: lessonsIcon,
      path: '/lessons',
    },
    {
      title: 'المستخدمين',
      icon: usersIcon,
      path: '/users',
    },
    {
      title: 'الإعدادات',
      icon: settingsIcon,
      path: '/settings',
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
                <li key={i}>
              <NavLink to={`${item.path}`}>
                  <img src={item.icon} />
                  {item.title}
              </NavLink>
                </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
