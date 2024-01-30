import React, {useMemo} from 'react';
import { useDojo } from "@/dojo/useDojo";
import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, Has, getComponentValue, Component, QueryFragment } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { Card } from 'flowbite-react';
import { bigintToHex, addressShortener } from "@/utils";
import { create } from 'domain';

export const MockLobby = () => {
    const {
        setup: {
            systemCalls: { createGame },
            clientComponents: { Room, Player },
        },
        account: { list, select, account }
    } = useDojo();
    
    const rooms = useEntityQuery([Has(Room)]).map((entityId) => {
        const r = getComponentValue(Room, entityId)
        return (
            <Card key={`${String(r?.game_id)}`} href="#" 
                className="max-w-sm text-left my-2 mx-1">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Room: {Number(r?.game_id)}
                </h5>
                <div>Size: {Number(r?.board_width)} x {Number(r?.board_height)}</div>
                <div>Creator: {addressShortener(bigintToHex(r?.gameCreator ?? 0n))}</div>
                <div>Minimum Stake: {bigintToHex(r?.minStake ?? 0n)}</div>
                <div>Max Players: {r?.maxPlayers}</div>
                <div>Current Player Count: {r?.playersCount}</div>
                <div>Game Status: {r?.gamestatus}</div>
                
            </Card>
        )
    }) ?? []

    const accountsSelectorList = useMemo(()=>{
        let result = []
        const burners = list()
        burners.forEach((burner, index) => {
            const isSelected = (burner.address == account.address)
            const key = `${burner.address}_${isSelected ? 1 : 0}`
            
            result.push(
                    <option selected={isSelected} key={key} value={burner.address} >
                        {addressShortener(burner.address)}
                    </option>
                )
            })

            if (result.length == 0) {
                result.push(
                    <option key="no-burners" value="0x0">No Burners Created</option>
                )
            }
        return result
    }, [list])

    const handleBurnerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {   
        select(e.target.value)
    }

    return (
        <div className="container mx-auto">


            <div className="mx-auto w-[80vw]">

                <div className="flex flex-row
                px-2 my-1
                ">  

                    <select className="my-1 px-2 py-1
                    border rounded-md border-black
                    "
                    onChange={handleBurnerSelect}
                    >
                        {accountsSelectorList}
                    </select>
                    <button className="mx-2 my-1 px-2 py-1
                    border rounded-md border-black"
                    onClick={() => createGame(account)}
                    >Create Game</button> 
                </div>
                
                <div className="border border-blue-600 rounded-md
                grid grid-cols-4 gap-1 px-2
                ">
                    {rooms}
                </div>
            </div>
        </div>
    )
}