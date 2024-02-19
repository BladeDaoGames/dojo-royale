import React from 'react';
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { Navbar, Search, TabInterface } from "../../components";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import { ROUTES } from '@/constants/routing/routePath';
import { PlayerInfo } from '@/components/GameRoom';
import { gameConfig, usePhaserGame } from '@/phaser';

export const GameRoom = () => {
    const { goToHome } = useCustomNavigation();

    const game = usePhaserGame(gameConfig)

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
            px-10
            h-[88vh]
            ">

                {/* left chat bar */}
                <div className="w-1/5 py-3
                flex
                flex-col justify-start items-start
                ">
                    <div className="
                    rounded-md
                    py-2 w-48
                    hover:bg-gray-400/50
                    hover:cursor-pointer
                    hover:border
                    hover:border-white
                    ">  
                        <Link to={ROUTES.waiting} 
                        className="flex justify-start items-center
                        text-white font-semibold text-2xl
                        "
                        >
                            <IoMdExit className="mx-2" />
                            <span>Quit</span>
                        </Link>
                    </div>

                    {/* stake and player ready status info */}
                    <div className="mt-3 mb-2 text-white 
                    flex flex-col text-2xl">

                        {/* total staked info */}
                        <div className="relative flex gap-4 items-center pb-4 pl-4
                        gradient-border-bottom">
                            Total Staked
                            <p className="bg-gray-600/40 px-8 py-2 rounded-2xl">80</p>
                        </div>

                        <PlayerInfo name={"Player1"} status="waiting"/>
                        <PlayerInfo name={"Player2"} status="ready"/>
                        <PlayerInfo name={"Player3"} status="waiting"/>
                        <PlayerInfo name={"Player4"} status="waiting"/>
                        <PlayerInfo name={"Player5"} status="ready"/>
                        <PlayerInfo name={"Player6"} status="waiting"/>
                    </div>
                    
                    {/* bottom chatwindow */}

                    <div className="mt-auto
                    min-h-30 h-full max-w-80 w-full
                    flex flex-col justify-start
                    text-white
                    ">  
                        {/* chat window */}
                        <div className="bg-black/30
                        w-full flex-grow overflow-y-auto
                        flex flex-col px-2 pl-4 pt-1 gap-1
                        rounded-md
                        ">
                            <div>Hellos</div>
                            <div>Game Start Pls</div>
                            <div>Hellos</div>
                        </div>

                        {/* chat input */}
                        <div className="border-none py-2">
                            <input type='text' 
                            className="bg-black/30 rounded-md
                            w-full
                            "
                            />
                        </div>
                    </div>

                </div>
                
                {/* mid game */}
                <div className="h-full flex-grow
                flex flex-col justify-start items-center
                ">

                    {/* Map Canvas */}
                    <div className="rounded-lg
                    h-[710px] aspect-square overflow-hidden
                    flex justify-center items-start
                    pt-8
                    "
                    style={{
                        backgroundImage:`url(/phaser/maps/dunes.png)`,
                        backgroundSize: "100%",
                    }}
                    >
                        <div id="phaser-div" 
                        className="border border-orange-300 rounded-md
                        overflow-hidden
                        h-[576px] aspect-square
                        " />
                    </div>

                </div>
                
                {/* right balancer */}
                <div className="w-1/5"></div>

            </div>

        </div>
    )
}
