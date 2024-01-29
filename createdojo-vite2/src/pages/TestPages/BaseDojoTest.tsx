import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, Has, getComponentValue, Component, QueryFragment } from "@dojoengine/recs";
import { useEffect, useState } from "react";
import "@/App.css";
import { Direction } from "@/utils";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "@/dojo/useDojo";
import { useEntityKeys } from "@/hooks/useEntityKeys";
import { bigintToHex } from "@/utils";

export const BaseDojoTest = () => {
    const {
        setup: {
            systemCalls: { spawn, move, createGame },
            clientComponents: { Position, Moves, Player },
        },
        account,
    } = useDojo();

    const [clipboardStatus, setClipboardStatus] = useState({
        message: "",
        isError: false,
    });

    // entity id we are syncing
    const entityIdfromKeys = getEntityIdFromKeys([
        BigInt(account?.account.address),
    ]) as Entity;

    
    console.log("current account: ", account?.account)
    console.log("current account address: ", account?.account.address)
    console.log("current account signer: ", account?.account.signer)

    const entityId = entityIdfromKeys;

    // get current component values
    const position = useComponentValue(Position, entityId);
    const player = useComponentValue(Player, entityId);
    console.log(player)
    
    console.log("Entity Id from Keys", entityIdfromKeys)

    const playerIds = useEntityQuery([Has(Player)]).map((entityId) => {
        return bigintToHex(getComponentValue(Player, entityId).address)
    }) ?? []

    console.log("Player Ids")
    console.log(playerIds)

    const moves = useComponentValue(Moves, entityId);

    const handleRestoreBurners = async () => {
        try {
            await account?.applyFromClipboard();
            setClipboardStatus({
                message: "Burners restored successfully!",
                isError: false,
            });
        } catch (error) {
            setClipboardStatus({
                message: `Failed to restore burners from clipboard`,
                isError: true,
            });
        }
    };

    useEffect(() => {
        if (clipboardStatus.message) {
            const timer = setTimeout(() => {
                setClipboardStatus({ message: "", isError: false });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [clipboardStatus.message]);

    return (
        <>
            <button onClick={account?.create}>
                {account?.isDeploying ? "deploying burner" : "create burner"}
            </button>
            {account && account?.list().length > 0 && (
                <button onClick={async () => await account?.copyToClipboard()}>
                    Save Burners to Clipboard
                </button>
            )}
            <button onClick={handleRestoreBurners}>
                Restore Burners from Clipboard
            </button>
            {clipboardStatus.message && (
                <div className={clipboardStatus.isError ? "error" : "success"}>
                    {clipboardStatus.message}
                </div>
            )}

            <div className="card">
                select signer:{" "}
                <select
                    value={account ? account.account.address : ""}
                    onChange={(e) => account.select(e.target.value)}
                >
                    {account?.list().map((account, index) => {
                        return (
                            <option value={account.address} key={index}>
                                {account.address}
                            </option>
                        );
                    })}
                </select>
                <div>
                    <button onClick={() => account.clear()}>
                        Clear burners
                    </button>
                </div>
            </div>

            <div className="card">
                <button onClick={() => spawn(account.account)}>Spawn</button>
                <div>
                    Moves Left: {moves ? `${moves.remaining}` : "Need to Spawn"}
                </div>
                <div>
                    Position:{" "}
                    {position
                        ? `${position.vec.x}, ${position.vec.y}`
                        : "Need to Spawn"}
                </div>
                <button onClick={() => createGame(account.account)}>Create Game</button>
                <div>
                    Room:{" "}
                    {player?.game_id
                        ? `${player.game_id}`
                        : "No Room Detected"}
                </div>
            </div>

            <div className="card">
                <div>
                    <button
                        onClick={() =>
                            position && position.vec.y > 0
                                ? move(account.account, Direction.Up)
                                : console.log("Reach the borders of the world.")
                        }
                    >
                        Move Up
                    </button>
                </div>
                <div>
                    <button
                        onClick={() =>
                            position && position.vec.x > 0
                                ? move(account.account, Direction.Left)
                                : console.log("Reach the borders of the world.")
                        }
                    >
                        Move Left
                    </button>
                    <button
                        onClick={() => move(account.account, Direction.Right)}
                    >
                        Move Right
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => move(account.account, Direction.Down)}
                    >
                        Move Down
                    </button>
                </div>
            </div>
        </>
    );
}
