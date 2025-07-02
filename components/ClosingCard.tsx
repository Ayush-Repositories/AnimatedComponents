'use client'

import IconMessage from "@/icons/IconMessage";
import IconPlus from "@/icons/IconPlus";
import IconX from "@/icons/IconX";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function () {
    const [open, setOpen] = useState(true)

    return (
        <>
        <AnimatePresence>
        { open && <motion.div
        initial={{
            opacity: 0,
            scale: 0.98,
        }} animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'
        }} exit={{
            opacity: 0,
            scale: 0.98,
            filter: 'blur(10px)'
        }} transition={{
            duration: 0.3,
            ease: 'easeInOut'
        }}
        className="w-72 min-h-[26rem] h-[28rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col bg-white">
            <h2 className="font-bold text-[10px]">Card Heading</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">Kuch bhi description likhi hogi</p>
            <div className="flex items-center justify-center">
                <button className="flex justify-center items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1" onClick={() => {setOpen(false)}}>
                    <Image height={50} width={50} src="/logo.png" className="h-4 w-4" alt="logo" />AyushCorp
                    <div className='h-3 w-3 flex items-center text-neutral-400'><IconX/></div>
                </button>
            </div>
            <div className='bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative'>
                <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: 'blur(10px)'
                }} whileHover={{
                    opacity: 1,
                    scale: 1.02,
                    filter: 'blur(0px)'
                }} transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                }}
                className='absolute inset-0 border border-neutral-200 h-full w-full bg-white divide-y divide-neutral-200 rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <IconMessage />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                Kya Aapke Toothpaste
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                Mein Namak Hai?
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <IconMessage />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                Surakshit Kaale Mere Baal
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                Vasmol Ne Kiya Kamaal
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <IconMessage />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                Tedha Hai
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                Par Mera Hai
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <IconMessage />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                Kaisi Jeebh
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                LappLappaayi
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 p-4 items-center justify-center">
                        <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <IconPlus />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-neutral-400 text-[8px] mt-1">Create Project</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div> }
        </AnimatePresence>
        </>
    )
}