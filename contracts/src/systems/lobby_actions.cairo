use starknet::{ContractAddress};
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

// define the interface
#[starknet::interface]
trait ILobbyActions<TContractState> {
    fn createGame(self: @TContractState)->u128;
    fn joinGame(self: @TContractState, game_id: u128);
}

#[dojo::contract]
mod lobby_actions {

    use debug::PrintTrait;
    use super::ILobbyActions;

    use starknet::{ContractAddress, get_caller_address};
    use traits::{Into, TryInto};
    use dojo_royale::models::{
        rooms::{Room, GameStatus},
        player::{Player, CharacterType}
        };



    // impl: implement functions specified in trait
    #[external(v0)]
    impl Lobby_ActionsImpl of ILobbyActions<ContractState> {

        // ContractState is defined by system decorator expansion
        fn createGame(self: @ContractState) -> u128{
            // // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // // Get the address of the current caller, possibly the player's address.
            let caller = get_caller_address();

            let game_id: u128 = world.uuid().into(); //uuid is u32

            let new_room = Room {
                game_id,
                board_width: 10,
                board_height: 10,
                size: 10*10,
                gameCreator: caller,

                minStake:0,
                totalStaked: 0,

                maxPlayers:4,
                playersCount: 0,
                itemCount: 0,

                gamestatus: GameStatus::GameCreated,
                gameWinner: starknet::contract_address_const::<0x0>(),
            
            };

            // Update the world state with the new room data.
            set!(
                world,
                (
                    new_room
                )
            );

            // Set player in room
            let player1 = Player {
                address: caller,
                game_id,
                playerIndex: 0,

                readyStatus: false,
                pauseVote: false,

                char: CharacterType::None,
                health: 100,
                playerAlive: true,
                positionIndex: 0,
                lastMoveTime: 0,
            };

            set!(
                world,
                (
                    player1
                )
            );

            game_id
        }

        fn joinGame(self: @ContractState, game_id: u128){
            
        }

    }
}
