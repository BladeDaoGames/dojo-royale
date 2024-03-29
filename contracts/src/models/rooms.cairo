use starknet::ContractAddress;
use dojo::database::introspect::{
    Enum, Member, Ty, Struct, Introspect, serialize_member, serialize_member_type
};
use array::{ArrayTrait, SpanTrait};
use traits::Into;

#[derive(Model, Drop, Serde)]
struct Room {
    #[key]
    game_id: u128,
    board_width: u8,
    board_height: u8,
    size:u32,
    gameCreator: ContractAddress,

    minStake: u256,
    totalStaked: u256,

    maxPlayers: u8,
    playersCount: u8,
    itemCount: u8,

    gamestatus: GameStatus,
    gameWinner: ContractAddress,
}

#[derive(Serde, Drop, Copy, PartialEq, Introspect)]
enum GameStatus {
    GameCreated,
    GameOnGoing,
    GamePaused,
    GameEnded,
    GameAbandoned
}

impl GameStatusIntoU8 of Into<GameStatus, u8> {
    fn into(self: GameStatus) -> u8 {
        match self {
            GameStatus::GameCreated => 0,
            GameStatus::GameOnGoing => 1,
            GameStatus::GamePaused => 2,
            GameStatus::GameEnded => 3,
            GameStatus::GameAbandoned => 4
        }
    }
}

trait RoomTrait {
    fn new(game_id: u128, board_width: u8, board_height: u8, gameCreator: ContractAddress, maxPlayers:u8, minStake: u256) -> Room;
    fn indexToXY(self: Room, index: u8) -> (u8, u8);
    fn xyToIndex(self: Room, x: u8, y: u8) -> u8;
}

impl RoomImpl of RoomTrait {
    fn new(game_id: u128, board_width: u8, board_height: u8, gameCreator: ContractAddress, maxPlayers:u8, minStake: u256)-> Room{
        Room {
            game_id: game_id,
            board_width: board_width,
            board_height: board_height,
            size: (board_width * board_height).into(),
            gameCreator: gameCreator,
            minStake: minStake,
            totalStaked: 0,
            maxPlayers: maxPlayers,
            playersCount: 0,
            itemCount: 0,
            gamestatus: GameStatus::GameCreated.into(),
            gameWinner: starknet::contract_address_const::<0x0>(),

        }
    }

    fn indexToXY(self: Room, index: u8) -> (u8, u8) {
        let x = index % self.board_width;
        let y = index / self.board_width;
        (x, y)
    }

    fn xyToIndex(self: Room, x: u8, y: u8) -> u8 {
        x + y * self.board_width
    }
}


// impl GameStatusIntrospectionImpl of Introspect<GameStatus> {
//     #[inline(always)]
//     fn size() -> usize {
//         1
//     }

//     #[inline(always)]
//     fn layout(ref layout: Array<u8>) {
//         layout.append(8);
//     }

//     #[inline(always)]
//     fn ty() -> Ty {
//         Ty::Enum(
//             Enum {
//                 name: 'GameStatus',
//                 attrs: array![].span(),
//                 children: array![
//                     ('GameCreated', serialize_member_type(@Ty::Tuple(array![].span()))),
//                     ('GameOnGoing', serialize_member_type(@Ty::Tuple(array![].span()))),
//                     ('GamePaused', serialize_member_type(@Ty::Tuple(array![].span()))),
//                     ('GameEnded', serialize_member_type(@Ty::Tuple(array![].span()))),
//                     ('GameAbandoned', serialize_member_type(@Ty::Tuple(array![].span()))),
//                 ]
//                     .span()
//             }
//         )
//     }
// }

// #[cfg(test)]
// mod tests {
//     // use super::{Position, Vec2, Vec2Trait};

//     // #[test]
//     // #[available_gas(100000)]
//     // fn test_vec_is_zero() {
//     //     assert(Vec2Trait::is_zero(Vec2 { x: 0, y: 0 }), 'not zero');
//     // }

//     // #[test]
//     // #[available_gas(100000)]
//     // fn test_vec_is_equal() {
//     //     let position = Vec2 { x: 420, y: 0 };
//     //     assert(position.is_equal(Vec2 { x: 420, y: 0 }), 'not equal');
//     // }
// }