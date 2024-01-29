import { overridableComponent } from "@dojoengine/recs";
import { ContractComponents } from "./generated/contractComponents";

export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({
    contractComponents,
}: {
    contractComponents: ContractComponents;
}) {
    return {
        ...contractComponents,
        Player: overridableComponent(contractComponents.Player),
        Room: overridableComponent(contractComponents.Room),
        Obstacle: overridableComponent(contractComponents.Obstacle),
        Position: overridableComponent(contractComponents.Position),
        Moves: overridableComponent(contractComponents.Moves),
    };
}
