import React from 'react'
import './SideNav.css'
import TALogoEN from '../../assets/graphics/TA Logo EN.svg'
import chaptersIcon from '../../assets/graphics/nav-icons/chapters-icon.svg'
import levelsIcon from '../../assets/graphics/nav-icons/levels-icon.svg'
import lessonsIcon from '../../assets/graphics/nav-icons/lessons-icon.svg'
import usersIcon from '../../assets/graphics/nav-icons/users-icon.svg'
import settingsIcon from '../../assets/graphics/nav-icons/setting-icon.svg'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SideNav() {
  const navSections = [
    {
      title: 'الفصول',
      icon: chaptersIcon,
      path: '/chapters',
    },
    {
      title: 'الدروس',
      icon: lessonsIcon,
      path: '/lessons',
    },
    {
      title: 'المستويات',
      icon: levelsIcon,
      path: '/levels',
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
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 1,
        ease: [0.4, 0.09, 0.16, 0.99],
      },
    }),
  }
  return (
    <aside className='side-nav d-flex flex-column align-items-center'>
      <div>
        <img src={TALogoEN} alt='' className='nav-logo' />
      </div>
      <div className={'chapters'}>
        <ul>
          {navSections.map((item, i) => {
            return (
              <motion.li key={i} custom={i} initial='hidden' animate='visible' variants={cardVariants}>
                <NavLink to={`${item.path}`}>
                  <img src={item.icon} />
                  <span>{item.title}</span>
                  {/* {item.title} */}
                </NavLink>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
