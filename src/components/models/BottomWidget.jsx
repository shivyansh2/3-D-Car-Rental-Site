import React from 'react'
import {CreditCard, MapPin} from "lucide-react"
import TelemetryMarquee from './TelementryMarquee'


const BottomWidget = () => {
  return (


    <>
    <footer className='absolute bottom-0 left-8
    right-8 z-20 grid grid-cols-3 gap-6'>
        BottomWidgets

    <div  className='bg-white/80 backdrop-blur rounded-2xl
    p-6 shadow-xl shadow-zinc-300/80 relative overflow-hidden
    h-40'>

        <p className="text-xs font-bold text-zinc-400
        uppercase tracking-widest m-2">

            My Location
        </p>

        <p className="text-xs font-medium">

            Vermont Square,Los Angels
        </p>

        <div className="absolute cursor-pointer bottom-4
        right-4 bg-emerald-600 p-3 rounded-full text-white">

            <MapPin size={18} fill="gray" className="text-white" />

        </div>

    </div>

    <div className="bg-white/50 backdrop-blur-xs rounded-xl
    shadow-xl shadow-zinc-300/80 h-40">

        <p className="text-xs font-bold text-zinc-400 uppercase
        tracking-widest mb-4">
            My Dates
        </p>

        <div className="flex justify-between items-center
        px-4 py-2 bg-zinc-50 rounded-2xl">

            <div className="text-center">
                <p className="text-3xl font-light spce-font">
                    20
                </p>
                <p className="text-xs text-zinc-400 uppercase">
                    Jul
                </p>
            </div>

            <div className="w-px h-10 bg-zinc-200">

            </div>
            <div className="text-center">

                <p className="text-3xl font-light space-font">
                    10:26
                </p>
                <p className="text-xs text-zinc-400 uppercase">
                    AM
                </p>

            </div>
        </div>


    </div>
    <div className="bg-white/80 backdrop-blur rounded-xl
    p-6 shadow-xl shadow-zinc-300/80 h-40" >

        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest
        mb-4">
             Payment Method   
        </p>

        <div className="flex items-center gap-4 bg-zinc-900
        text-white p-4 rounded-lg shadow-lg">

            <CreditCard size={20} className="text-emerald-500"/>

            <div className="">

                <p className="text-[10px] opacity-60">
                    Credit Card
                </p>

                <p className="text-xs tracking-[0.2em] space-font">
                    3451 2323 **** ****
                </p>

            </div>
            <div className="border border-emerald-600/90 rounded-full ml-auto
            p-0.5">
                <div className="size-3 bg-emerald-500 rounded-full animate-pulse">

                </div>



            </div>
        </div>


    </div>
    </footer>

    <TelemetryMarquee />

    </>
  )
}

export default BottomWidget