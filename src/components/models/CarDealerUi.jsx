import React, { useState } from 'react'
import SideBar from './SideBar'

import {CAR_DATA} from "../assets/data"
import Assisstant from './Assisstant'
import MiniMusicPlayer from './MiniMusicPlayer'
import  {songs} from './assets/data'
import BottomWidget from './BottomWidget'
import ModelViewer from './ModelViewer'


const CarDealerUi = () => {

  const[activeCarKey, setActiveCarKey] = useState("BYD")
  const [rotateSpeed, setRotateSpeed] = useState(0.5)

  const currentCar = CAR_DATA[activeCarKey]

  return (
    <div className='realtive h-screen w-screen overflow-hidden
    bg-zinc-200 text-zinc-800'>

        <div className='absolute inset-0 z-0 '>
              <ModelViewer /> 
        </div>     

        {/*Top nav*/}
        <Navigation car ={currentCar}/>

        <SideBar setActiveCarKey ={activeCarKey} onSelectCar={setActiveCarKey}
        carOptions={CAR_DATA}
        rotateSpeed={rotateSpeed}
        setRotateSpeed={setRotateSpeed}
        /> 

        <Assisstant />

          <MiniMusicPlayer songs={songs}/>

          <BottomWidget />

    </div>
  )
}

export default CarDealerUi