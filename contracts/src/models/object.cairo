use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
struct Player {
    #[key]
    game_id: u32,

    #[key]
    address: ContractAddress,
    
    color: Color
}

#[derive(Serde, Drop, Copy, PartialEq, Introspect)]
enum Color {
    Blue,
    Yellow,
    Green,
    Red,
    None,
}

#[derive(Serde, Drop, Copy, PartialEq, Introspect)]
enum ObjectType {
    Bomb,
    Obstacle,
    Chest,
    None,
}