import React from 'react';
import { BsExclamationCircleFill } from "react-icons/bs";

export const InventoryPanel = () => {
    return (
        <div className="
        bg-gray-400 
        border-4 rounded-3xl border-gray-600
        h-full flex flex-col 
        justify-center items-center
        text-gray-600
        p-2 py-4
        ">


            <div className="
            border-2 border-gray-600 rounded-2xl
            w-40 h-40 mb-8
            hover:border-white
            " />

            <p className="text-2xl my-4 w-full
            px-7 font-medium text-gray-700
            ">
                INVENTORY
            </p>
            
            <div className="grid grid-cols-4 gap-2
            w-96 h-96
            ">

                {

                    //render div below 16 times with a loop
                    Array.from({length: 16}).map((_, index) => (
                        <div key={index} className="
                        border-2 border-gray-600 rounded-2xl
                        w-20 h-20
                        hover:border-white
                        hover:bg-white/50
                        " />
                    ))
                }
                
            </div>

            <p className="w-full
            m-2 px-7
            text-lg
            ">
                <span className="flex flex-nowrap items-center">
                <BsExclamationCircleFill className="mx-1"/> 
                <span className="mx-1">Select Battle Item</span>
                </span>
            </p>

        </div>
    )
}