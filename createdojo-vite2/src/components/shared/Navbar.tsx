import React, { useState } from "react";
import { motion } from "framer-motion";
import useAddressFormatter from "../../hooks/useAddressFormatter";
import { IoMdSettings } from "react-icons/io";
import { FaVolumeMute } from "react-icons/fa";
import { Avatar } from 'flowbite-react';

interface NavbarProps {
  onBackClick: () => void;
  getHomePage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onBackClick, getHomePage }) => {

  // const { handleConnect, handleDisconnect, address, isConnected } =
  //   useWalletConnect();

  //const { formatAddress } = useAddressFormatter();

  const ButtonHoverAnimation = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  return (
    <div className="flex justify-between items-center pl-6 gap-10 bg-black/70 relative z-20 py-4">
      {getHomePage ? (
        <div className="text-6xl text-white pr-10 flex ml-auto">
          <FaVolumeMute />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-4" onClick={onBackClick}>
            <motion.div whileHover={ButtonHoverAnimation}>
              <div className="text-5xl mt-2 text-white cursor-pointer">
                LOOT ROYALE
              </div>
            </motion.div>
          </div>

          <div className="text-white flex gap-5 ml-auto items-center">
            {/* {isConnected ? (
              <button className="text-4xl" onClick={handleDisconnect}>
                {formatAddress(address)}
              </button>
            ) : (
              <button className="text-4xl" onClick={handleConnect}>
                Connect Wallet
              </button>
            )} */}

              <button className="border-2 border-gray-100 
                rounded-md
                aspect-square h-full
                flex justify-center items-center
                ">
                <div 
                className="aspect-square h-16"
                style={{
                  backgroundImage: `url(./characters/profile/gunner_pfp.png)`,
                  backgroundSize: "200%",
                  backgroundPosition: "center center"
                }} 
                />
              </button>

            <div className="mx-2 mr-8">
              <IoMdSettings className="text-6xl" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
