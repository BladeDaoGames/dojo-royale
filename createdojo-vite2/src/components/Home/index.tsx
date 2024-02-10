import React from 'react';
import { motion } from "framer-motion";
import { containerVariants, letterVariants } from '@/constants/containers';
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Button, SocialLink } from "@/components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiPlasticDuck } from "react-icons/gi";
import { IoMdWallet } from "react-icons/io";

export const LandingModal = ({handleSetPlay}:{handleSetPlay:()=>void}) => {

    const title = "LOOT ROYALE".split("");
    return (
        <div className="border-4 border-gray-700/50 rounded-2xl flex flex-col gap-4 pt-10 items-center justify-between fixed inset-0 m-auto bg-light-gray-100 w-1/2 h-[45%] bg-white-beige-50 shadow-lg p-5 z-20">
                <motion.div
                    className="text-6xl font-semibold"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {title.map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {letter}
                    </motion.span>
                    ))}
                </motion.div>
                <div className="flex flex-col w-4/12 h-full gap-8 items-center justify-center">
                    <Button
                    onClick={handleSetPlay}
                    className="w-full shadow-lg rounded-lg bg-regular-orange flex justify-center text-5xl py-3 font-semibold border-2 border-gray-400/80"
                    >
                    Play
                    </Button>
                    {/* Replace () => { } below with relevant function */}
                    <Button
                    onClick={() => {}}
                    className="w-full h-max shadow-lg rounded-lg bg-blue-gray-100 flex justify-center text-4xl py-2 border-2 border-gray-400/80"
                    >
                    How to Play
                    </Button>
                </div>

                <div className="flex justify-between items-center w-full mt-auto text-3xl">
                    {/* <SocialLink
                    icon={<VscFeedback />}
                    label="Feedback"
                    className="feedback-100"
                    /> */}
                    <div className="ml-auto flex gap-6">
                    <SocialLink icon={<FaTwitter />} label="Twitter" className="" />
                    <SocialLink
                        icon={<BsDiscord />}
                        label="Discord"
                        className=" pr-4"
                    />
                    </div>
                </div>

            </div>
    )
}


export const RegistrationModal = ({ walletAction, goAction}:
    { 
        walletAction:()=>void,
        goAction:()=>void

    }) => {
    return (
        
        <div className="border-4 border-gray-700/50 rounded-2xl flex flex-col gap-6 pt-10 items-center justify-center fixed inset-0 m-auto bg-light-gray-100 w-1/2 h-[45%] bg-white-beige-50 shadow-lg p-5 z-20">
            <div className="flex items-center justify-between text-9xl gap-8">
                <MdKeyboardArrowLeft className="text-arrow-colour-grey" />
                <GiPlasticDuck className="border-2 border-black bg-logo-background-dark-grey" />
                <MdKeyboardArrowRight className="text-arrow-colour-grey" />
            </div>

            
            <input
                type="text"
                className="w-[40%] h-[18%] text-center rounded-lg border-2 border-dark-gray-200 text-3xl"
                placeholder="Enter your name"
            />

            <div className="flex w-10/12 gap-12 items-center justify-center">
                <Button
                onClick={walletAction}
                className="w-full shadow-lg rounded-lg bg-blue-gray-100 flex items-center gap-2 justify-center text-3xl py-3 border-2 border-gray-400/80"
                >
                <IoMdWallet className="text-5xl text-gray-800" />
                Wallet address
                </Button>
                <Button
                onClick={goAction}
                className="w-full shadow-lg rounded-lg bg-regular-orange flex justify-center text-5xl py-3 font-semibold border-2 border-gray-400/80"
                >
                GO
                </Button>
            </div>
        </div>
    )
}