
import { useBurner } from "@dojoengine/create-burner";
import React, { useContext} from "react";
import { DojoContext } from "./DojoContext";


export const useDojo = () => {
    const contextValue = useContext(DojoContext);
    if (!contextValue)
        throw new Error(
        "The `useDojo` hook must be used within a `DojoProvider`"
        );

    const {
        create,
        list,
        get,
        account,
        select,
        isDeploying,
        clear,
        copyToClipboard,
        applyFromClipboard,
    } = useBurner();

    return {
        setup: contextValue,
        account: {
        create,
        list,
        get,
        select,
        clear,
        account: account ?? contextValue.masterAccount,
        masterAccount: contextValue.masterAccount,
        isMasterAccount: (!account),
        isDeploying,
        copyToClipboard,
        applyFromClipboard,
        },
    };
}; 

//
// NEW
//

export const useDojoAccount = () => {
    const { account } = useDojo()
    // account: { create, list, select, account, isDeploying }
    return {
        ...account,
    }
}

export const useDojoSystemCalls = () => {
    const { setup: { systemCalls } } = useDojo()
    return {
        ...systemCalls,
    }
}

export const useDojoComponents = () => {
    const { setup: { components } } = useDojo()
    return {
        ...components,
    }
}