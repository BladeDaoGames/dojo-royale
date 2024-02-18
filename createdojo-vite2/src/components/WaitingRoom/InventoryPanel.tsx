import React from 'react';
import { BsExclamationCircleFill } from "react-icons/bs";
import { Carousel } from 'flowbite-react';


export const InventoryPanel = () => {
    console.log(Array(5).fill(0).map((_,i)=>{
        return i
    }))
    return (
        <div className="
        bg-neutral-400
        border-4 rounded-3xl border-gray-500
        h-full flex flex-col 
        justify-center items-center
        text-gray-600
        p-2 py-2
        ">

            {/* placeholder for profile pic */}
            {/* <div className="
            border-2 border-gray-600 rounded-2xl
            w-[15vh] h-[15vh] mb-8
            hover:border-white
            " /> */}

            <div className="w-full h-1/3">
                <Carousel slide={false} indicators={false} className="">
                    <div 
                        key={`drone`}
                        className="
                                border-2 border-gray-600 rounded-2xl
                                w-[15vh] h-[15vh] mb-8 overflow-hidden
                                hover:border-white
                    "
                    style={{
                        backgroundImage: `url(./characters/animated/drone.gif)`,
                        backgroundSize: "180%",
                        backgroundPosition: "center center"
                    }}
                    />

                    <div 
                        key={`gaser`}
                        className="
                                border-2 border-gray-600 rounded-2xl
                                w-[15vh] h-[15vh] mb-8 overflow-hidden
                                hover:border-white
                    "
                    style={{
                        backgroundImage: `url(./characters/animated/gaser.gif)`,
                        backgroundSize: "180%",
                        backgroundPosition: "center center"
                    }}
                    />

                    <div 
                        key={`gunner`}
                        className="
                                border-2 border-gray-600 rounded-2xl
                                w-[15vh] h-[15vh] mb-8 overflow-hidden
                                hover:border-white
                    "
                    style={{
                        backgroundImage: `url(./characters/animated/gunner.gif)`,
                        backgroundSize: "180%",
                        backgroundPosition: "center center"
                    }}
                    />
                    
                </Carousel>
            </div>
            {/* <div className="w-full h-1/3">
                <Carousel slide={false} indicators={false} className="">
                    {
                        Array(4).fill(0).map((_,i)=>{
                            return <div 
                                key={`carouselimage-${i+1}`}
                                className="
                                border-2 border-gray-600 rounded-2xl
                                w-[15vh] h-[15vh] mb-8 overflow-hidden
                                hover:border-white
                                ">
                                    <img src={`https://flowbite.com/docs/images/carousel/carousel-${i+1}.svg`} alt="..." />
                                </div>
                        })
                    }
                </Carousel>
            </div> */}
            
            <div className="">
                <p className="text-2xl my-2 w-full
                mx-2 px-2 font-medium text-gray-700
                ">
                    INVENTORY
                </p>
                
                <div className="grid grid-cols-4 gap-0
                justify-items-center justify-center items-center
                w-96 h-96
                ">

                    {

                        //render div below 16 times with a loop
                        Array.from({length: 16}).map((_, index) => (
                            <div key={index} className="
                            border-2 border-gray-600 rounded-2xl
                            w-[7vh] h-[7vh]
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

        </div>
    )
}