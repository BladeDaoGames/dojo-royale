import React from 'react'

export const CreateRoomButton = ({onClick}:{
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}) => {
    return (
        <button className="
        px-7 py-3
        bg-blue-300
        w-fit
        rounded-lg
        text-2xl
        text-gray-700
        hover:bg-blue-600
        hover:text-white
        "
        onClick={onClick}
        >
            Create Room +
        </button>
    )
}

export const QuickJoinButton = () => {
    return (
        <button className="
        px-7 py-3
        bg-regular-orange
        w-fit
        rounded-lg
        text-2xl
        text-gray-700
        hover:bg-orange-600
        hover:text-white
        ">
            Quick Join
        </button>
    )
}
