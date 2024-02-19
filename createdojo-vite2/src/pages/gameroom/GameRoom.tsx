import React from 'react';
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { Navbar, Search, TabInterface } from "../../components";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import { ROUTES } from '@/constants/routing/routePath';

export const GameRoom = () => {
    const { goToHome } = useCustomNavigation();

    return (
        <div className="relative min-h-screen 
            flex flex-col justify-start
            bg-black/50
                "
                style={{
                backgroundImage: "url(/images/Background.png)",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover"}}
                >
                
            <Navbar onBackClick={goToHome} getHomePage={false} />
            
            {/* content */}
            <div className="my-2 mx-4
            flex justify-start gap-4
            px-4
            h-[80vh] border border-orange-600
            ">

                {/* left chat bar */}
                <div className="w-1/3 py-3
                flex-col justify-start items-center
                ">
                    <div className="
                    text-white font-semibold text-2xl
                    rounded-md
                    py-2 w-1/5
                    hover:bg-gray-400/50
                    hover:cursor-pointer
                    hover:border
                    hover:border-white
                    ">  
                        <Link to={ROUTES.waiting} 
                        className="flex justify-start items-center"
                        >
                            <IoMdExit className="mx-2" />
                            <span>Quit</span>
                        </Link>
                    </div>

                    {/* stake and player ready status info */}
                    <div className="mt-6 text-white 
                    flex-col text-3xl">

                        {/* total staked info */}
                        <div className="relative flex gap-4 items-center pb-4 pl-4
                        gradient-border-bottom">
                            Total Staked
                            <p className="bg-gray-600/40 px-8 py-2 rounded-2xl">80</p>
                        </div>

                    </div>
                    

                </div>

            </div>

        </div>
    )
}
