use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
struct Player {
    #[key]
    address: ContractAddress,

    game_id: u128,
    playerIndex: u8,

    readyStatus: bool,
    pauseVote: bool,

    char: CharacterType,
    health: u16,
    playerAlive: bool,
    positionIndex: u32,
    lastMoveTime: u256
}

#[derive(Serde, Drop, Copy, PartialEq, Introspect)]
enum CharacterType {
    Bomber,
    Builder,
    Caster,
    None,
}