// src/hooks/useCustomNavigation.js
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routing/routePath";

const useCustomNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.home);
  };

  const goToGame = () => {
    navigate(ROUTES.inGame);
  };

  const goToReward = () => {
    navigate(ROUTES.reward);
  };

  const goToRooms = () => {
    navigate(ROUTES.rooms);
  };

  const goToWaiting = () => {
    navigate(ROUTES.waiting);
  };

  return { goToHome, goToGame, goToReward, goToRooms, goToWaiting };
};

export default useCustomNavigation;
