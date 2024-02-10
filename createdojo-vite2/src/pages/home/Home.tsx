import "./Home.css";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiPlasticDuck } from "react-icons/gi";
import { IoMdWallet } from "react-icons/io";

import { Button, Navbar, SocialLink } from "../../components";
import { motion } from "framer-motion";
// import { ROUTES } from "../../constants/routing/routePath";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { useState } from "react";
import { LandingModal, RegistrationModal } from "@/components/Home";

const Home = () => {
  const { goToHome, goToWaiting } = useCustomNavigation();
  const [getPlay, setPlay] = useState(false);

  const handleSetPlay = () => {
    setPlay(true);
  };

  //   const goToTwitter = () => {
  //     window.open(ROUTES.twitterRedirect, "_blank");
  //   };

  //   const goToDiscord = () => {
  //     window.open(ROUTES.discordRedirect, "_blank");
  //   };

  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="object-cover w-full h-full absolute z-[-1]"
          src="images/Background.png"
          alt="background"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <Navbar onBackClick={goToHome} getHomePage={true} />
      </div>

      {getPlay ? (
        // Render this card if getPlay is true
        <RegistrationModal walletAction={handleSetPlay} goAction={goToWaiting} />
      ) : (
        // Render this card if getPlay is false
        <LandingModal handleSetPlay={handleSetPlay} />
      )}
    </>
  );
};

export default Home;
