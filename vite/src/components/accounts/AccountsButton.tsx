import React from 'react';

export const AccountsButton = ({
    task,
    msg,
    label
}) => {
    return (
        <button className="bg-green-400 p-2 m-1 rounded-md" onClick={() => {
            task()
            console.log(msg)
        }}>
            {label}
        </button>
    )
}