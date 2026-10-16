import React from 'react'
import {Canvas} from '@react-three/fiber'
import { Suspense, useEffect,useState } from 'react'
import { OrbitControls,Environment } from '@react-three/drei'
import {Monkey} from "./models/Monkey"


const ModelViewer = () => {
     
    const[webglSupported , setWeblgSupported] = useState(true)

    useEffect(() =>{
        try{
            const canvas =document.createElement("canvas")
            const g1 = canvas.getContext("webgl") || canvas.getContext("experimental-webg1")

            if(!g1) setWeblgSupported(false)
        }catch(err){

            setWeblgSupported(false)
        }
    },[])

    if(!webglSupported) return <div>
        WebGL not supported.
    </div>




  return (
    <Canvas camera={{position:[0.1,0.1,0.2], fov:20}} g1={{antialias:true,preserveDrawingBuffer:"high-performance"}}
    style={{width:"100%",height:"100%"}}
    >
        <Suspense fallback={null}>
            <Stage environment="city" intensity={0.5} adjustCamera={false}>

               <Monkey /> 
            </Stage>

            <Environment preset="city"/>
            <OrbitControls enableZoom={true} enablePan={false}
            autoRotate={true} autoRotateSpeed={0.5}
            minDistance={0.5} maxDistance={3}
            maxPolarAngle={Math.PI /2 -0.1}/>
        </Suspense>
    </Canvas>
  )
}

export default ModelViewer