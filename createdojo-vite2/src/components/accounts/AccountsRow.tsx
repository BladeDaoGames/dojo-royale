import React from 'react';
import { addressShortener } from '@/utils';
import { Radio } from 'flowbite-react';

export const AccountsRow = ({
    address,
    index,
    isSelected,
    select}) => {

    return (
        <li key={index} className={`flex justify-space-between items-center
            py-2 px-1
            ${isSelected? 
                'bg-green-400 font-bold hover:bg-green-500 hover:text-white' : 
                'hover:bg-gray-600/25 hover:font-bold'}
        `}
        onClick={() => {
            select(address)
            console.log("burner selected")}
        }
        > 
            <Radio id={address} className="mx-2" 
            defaultChecked={isSelected}
            />
            {addressShortener(address)}
        </li>
    )
}