import React from 'react';
import { FaEthereum } from "react-icons/fa";
import { PiUserFill } from "react-icons/pi";

export const RoomCard = ({
    roomId, mapName, creatorName, stakeValue, playerCount, maxPlayers, roomstatus, 
    }) => {
    return (
        <div className="w-full h-28 flex items-center
                bg-white/80 rounded-lg border-2 border-gray-600
                p-1
                ">
                
                {/* left status cube */}
                <div className="w-1/5 h-full
                rounded-lg border-2 border-neutral-500/90
                overflow-hidden
                flex flex-col
                ">
                    <div className="
                    rounded-b-lg bg-neutral-500/90
                    py-1 px-4 h-1/2
                    text-white text-xl
                    flex items-center justify-start
                    ">
                    <FaEthereum className=""/>
                    <span className="flex-grow
                    text-center
                    ">{stakeValue}</span>
                    </div>

                    <div className="
                    py-1 px-4 flex-grow
                    text-gray-700 text-xl
                    flex items-center justify-start
                    ">
                    <PiUserFill className="h-full"/>
                    <span className="flex-grow
                    text-center
                    ">{playerCount}/{maxPlayers}</span>
                    </div>

                </div>

                {/* right room info */}
                <div className="flex-grow h-full
                flex flex-col
                px-4 
                text-gray-700 text-lg
                ">
                    <div className="h-1/2 border border-transparent border-b-gray-600
                    flex items-center justify-between
                    ">
                    <span>No. {roomId}</span>
                    <span>{mapName}</span>
                    </div>


                    <div className="flex-grow flex items-center justify-between">
                    <span>{creatorName}</span>
                    <button className={`px-2 py-1 w-32
                    border border-gray-600 rounded-lg
                    text-black
                    ${roomstatus=="Join"?"bg-regular-orange"
                    : "bg-dark-gray-200"
                    }
                    `}>
                        {roomstatus}
                    </button>
                    </div>

                </div>

                </div>
    )
}
