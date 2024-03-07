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
    <div className="h-[12rem] bg-primary">
      <nav className={`px-2 w-full flex items-center
      justify-between z-0 top-[-1rem]  bg-primary relative`}>
          <IonIcon name="menu-outline" size="large" />
                    <img src={logo}
                alt="logo" 
                className="w-[6rem] h-[6rem] object-contain" />
        <div className="flex  justify-between gap-4">
          <IonIcon name="notifications-outline" size="large" />
          <IonIcon name="settings-outline" size="large" />
        </div>
      </nav>
    </div>
  )
}


export default Navbar