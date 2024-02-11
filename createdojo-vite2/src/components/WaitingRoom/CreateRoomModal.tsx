import React from 'react';
import {Modal as  FlowBiteModal, Flowbite, Tooltip } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { FaEthereum, FaQuestionCircle, FaGlobe } from "react-icons/fa";

const customTheme: CustomFlowbiteTheme = {
    modal: {
        content: {
            base: "relative h-full w-full p-4 md:h-auto",
            inner: "relative rounded-lg bg-gray-300 shadow dark:bg-gray-700 flex flex-col max-h-[90vh]"
        },
    },
};

export const CreateRoomModal = ({show, onClose}: 
    {show: boolean | undefined, onClose: (() => void) | undefined}) => {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <FlowBiteModal show={show} onClose={onClose}
            className=""
            >
                <div className="w-full
                mt-6
                text-3xl text-center
                flex flex-col justify-start items-center
                ">
                    <span>Create Room</span>
                    <div className="w-4/5 my-3 border border-b-black"/>
                </div>
                <FlowBiteModal.Body 
                className="flex flex-col justify-start items-center"
                >

                    <div>
                        <div className="my-2
                        flex flex-nowrap justify-start items-center
                        text-2xl
                        ">

                            <FaEthereum className="text-gray-600 mx-2" />
                            <span className="mx-2 w-1/3">Stake ETH</span>
                            <input type="number"
                                            defaultValue={0.1}
                                            step={0.01}
                                            min={0.1}

                                className="w-1/3 rounded-lg text-center px-0 mx-2
                                "
                                name="minstake"
                                        />

                            <span className="">
                                <Tooltip className="ml-auto" placement="right"
                                    content="You need to decide how much eth.each player entering the game needs to stake.">
                                    <FaQuestionCircle className="text-gray-500" />
                                </Tooltip>
                            </span>
                            
                        </div>

                        <div className="my-2
                        flex flex-nowrap justify-start items-center
                        text-2xl
                        ">
                            <FaGlobe className="text-gray-600 mx-2" />
                            <span className="mx-2 w-1/3">Map Size</span>
                            <select id="mapsize" required 
                            className="w-1/3 rounded-lg mx-2 text-center"
                            >
                                <option>12 x 12</option>
                                <option>10 x 10</option>
                                <option>8 x 8</option>
                            </select>

                            <span className="">
                                <Tooltip className="ml-auto" placement="right"
                                    content="Choose a square map grid size">
                                    <FaQuestionCircle className="text-gray-500" />
                                </Tooltip>
                            </span>
                        </div>
                    </div>

                    <div className="w-full my-4 text-2xl 
                        flex justify-center items-center
                        gap-4
                    ">  

                        <button className="w-1/3 px-1 py-3
                        border border-black rounded-lg
                        bg-regular-orange
                        hover:bg-orange-600
                        hover:text-white
                        ">Create Room +</button>

                        <button className="w-1/3 px-1 py-3
                        border border-black rounded-lg
                        bg-blue-200
                        hover:bg-blue-600
                        hover:text-white
                        "
                        onClick={onClose}
                        >Cancel</button>
                    </div>
                </FlowBiteModal.Body>
            </FlowBiteModal>
        </Flowbite>
    )
}
