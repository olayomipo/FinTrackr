import React from 'react'

import {styles} from '../styles'
import { logo, menu, close } from '../assets/img'
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import { LogoNodejs, NotificationsOutline, 
//   MenuOutline, SettingsOutline } from 'react-ionicons'

import IonIcon  from '@reacticons/ionicons'


const Navbar = () =>{
  return(
    <nav className={`${styles.paddingX} w-full flex items-center justify-between top-0 z-20 bg-primary`}>
        <IonIcon name="menu-outline" size="large" />
                   <img src={logo}
               alt="logo" 
               className="w-24 h-24 object-contain" />
      <div className="flex  justify-between gap-4">
        <IonIcon name="notifications-outline" size="large" />
        <IonIcon name="settings-outline" size="large" />
      </div>
    </nav>
  )
}


export default Navbar