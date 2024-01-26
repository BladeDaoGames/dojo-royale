import React, { useMemo, useRef, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { useDojo, useDojoAccount, useDojoSystemCalls } from '@/dojo/DojoHooks';
import { ListGroup, Radio } from 'flowbite-react';
import { AccountsRow } from './AccountsRow';
import { AccountsButton } from './AccountsButton';


export function AccountsList() {
    const [burners] = useLocalStorageState('burners')
    const {
        account: { create, list, get, select, clear, account, isMasterAccount, isDeploying }
    } = useDojo()

    const burnerRows = useMemo(() => {
        let result = []
        const burners = list()
        burners.forEach((burner, index) => {
            const isSelected = (burner.address == account.address)
            const key = `${burner.address}_${isSelected ? 1 : 0}`
            
            result.push(
                    <AccountsRow 
                        address={burner.address}
                        key={key}
                        isSelected={isSelected}
                        select={select}
                    />
                )
            })
            if (result.length == 0) {
                result.push(
                    <li key="no-burners" className="text-center">
                        No Burners Created
                    </li>
                )
        }
        return result

    }, [account?.address, isDeploying, burners, list])

    return (
        <div className="flex flex-col">
            <div>Accounts List</div>

            <ul className="border rounded-md w-96 border-gray-600/50">
                {burnerRows}
            </ul>

            <div>
                <AccountsButton 
                    task={create}
                    msg="Burner Created"
                    label="Create Burner"
                />
                <AccountsButton 
                    task={clear}
                    msg="Burners Cleared"
                    label="Clear All Burners"
                />
            </div>
        </div>
    )
}