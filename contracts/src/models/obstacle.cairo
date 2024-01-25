use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
struct Obstacle {
    #[key]
    game_id: u128,
    #[key]
    item_id: u32,
    
    object_type: ObjectType,
    
    positionIndex: u32,
}


#[derive(Serde, Drop, Copy, PartialEq, Introspect)]
enum ObjectType {
    Bomb,
    Obstacle,
    Chest,
    None,
}