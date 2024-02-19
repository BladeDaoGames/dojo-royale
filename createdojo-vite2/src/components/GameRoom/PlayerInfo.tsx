import React from 'react';
import { CiUser } from "react-icons/ci";
import { FaHourglassEnd } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";

export const PlayerInfo = ({name, status}:{
  name: string,
  status: string
}) => {
  return (
    <div className="my-2 px-4 pb-3
    flex flex-nowrap justify-start items-center
    text-xl 
    relative
    gradient-border-bottom
    w-full
    " >
      <CiUser className="mx-2" />
      <span>{name}</span>

      <span className="ml-auto mx-2">
        {
          status=="ready"?
          <FaThumbsUp className="text-lime-600"/>
          :<FaHourglassEnd className="text-regular-orange"/>
        }
        </span>
      
      </div>
  )
}
