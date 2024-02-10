use starknet::ContractAddress;
use dojo::database::introspect::{
    Enum, Member, Ty, Struct, Introspect, serialize_member, serialize_member_type
};
use traits::Into;

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
    None,
    Bomber,
    Builder,
    Caster
}

impl CharacterTypeIntoU8 of Into<CharacterType, u8> {
    fn into(self: CharacterType) -> u8 {
        match self {
            CharacterType::None => 0,
            CharacterType::Bomber => 1,
            CharacterType::Builder => 2,
            CharacterType::Caster => 3
        }
    }
}


// impl CharacterTypeIntrospectionImpl of Introspect<CharacterType> {
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
//                 name: 'CharacterType',
//                 attrs: array![].span(),
//                 children: array![
//                     ('None', serialize_member_type(@Ty::Tuple(array![].span()))),
//                     ('Bomber', serialize_member_type(@Ty::Tuple(array![].span()))),
//                     ('Builder', serialize_member_type(@Ty::Tuple(array![].span()))),
//                     ('Caster', serialize_member_type(@Ty::Tuple(array![].span()))),
//                 ]
//                     .span()
//             }
//         )
//     }
// }