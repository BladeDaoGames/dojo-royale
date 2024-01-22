use dojo_royale::models::player::Color;
use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
struct Room {
    #[key]
    game_id: u32,
    board_width: u8,
    board_height: u8,
    gameCreator: ContractAddress
}

#[derive(Model, Drop, Serde)]
struct GameInfo {
    #[key]
    game_id: u32,

    playersCount: u8,
    itemCount: u8,

    minStake: u256,
    totalStaked: u256,
    
    hasStarted: bool,
    hasEnded: bool,
    gamePaused: bool,
    gameAbandoned: bool,

    winner: ContractAddress
}

#[derive(Model, Drop, Serde)]
struct RoomState {
    #[key]
    game_id: u32,

    // Tile[TILE_COUNT] board;
    // address[MAX_PLAYERS] playerIds;
    // uint16[MAX_PLAYERS] playerFTs;
    // uint8[MAX_PLAYERS*2-1] positions;
    // bool[MAX_PLAYERS] playerAlive;
    // bool[MAX_PLAYERS] playerReady;
    // bool[MAX_PLAYERS] playerPauseVote;
    // uint256[MAX_PLAYERS] playerLastMoveTime;
}

#[derive(Model, Copy, Drop, Serde)]
struct PlayerPosition {
    #[key]
    game_id: u32,
    #[key]
    player: ContractAddress,
    vec: Vec2,
}

#[derive(Model, Copy, Drop, Serde)]
struct ItemPosition {
    #[key]
    game_id: u32,
    #[key]
    object_id: u32,
    vec: Vec2,
}

#[derive(Copy, Drop, Serde, Introspect)]
struct Vec2 {
    x: u32,
    y: u32
}

trait Vec2Trait {
    fn is_zero(self: Vec2) -> bool;
    fn is_equal(self: Vec2, b: Vec2) -> bool;
}

impl Vec2Impl of Vec2Trait {
    fn is_zero(self: Vec2) -> bool {
        if self.x - self.y == 0 {
            return true;
        }
        false
    }

    fn is_equal(self: Vec2, b: Vec2) -> bool {
        self.x == b.x && self.y == b.y
    }
}

#[cfg(test)]
mod tests {
    use super::{Position, Vec2, Vec2Trait};

    #[test]
    #[available_gas(100000)]
    fn test_vec_is_zero() {
        assert(Vec2Trait::is_zero(Vec2 { x: 0, y: 0 }), 'not zero');
    }

    #[test]
    #[available_gas(100000)]
    fn test_vec_is_equal() {
        let position = Vec2 { x: 420, y: 0 };
        assert(position.is_equal(Vec2 { x: 420, y: 0 }), 'not equal');
    }
}