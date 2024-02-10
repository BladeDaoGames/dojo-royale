use starknet::{ContractAddress};
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

// define the interface
#[starknet::interface]
trait IGameActions<TContractState> {
    fn startGame(self: @TContractState, game_id: u128);
}

#[dojo::contract]
mod game_actions {

    use debug::PrintTrait;
    use super::IGameActions;

    use starknet::{ContractAddress, get_caller_address};
    use traits::{Into, TryInto};
    use dojo_royale::models::{
        rooms::{Room, GameStatus},
        player::{Player, CharacterType}
        };



    // impl: implement functions specified in trait
    #[external(v0)]
    impl Game_ActionsImpl of IGameActions<ContractState> {

        fn startGame(self: @ContractState, game_id: u128) {
            // // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // // Get the address of the current caller, possibly the player's address.
            let caller = get_caller_address();
            
            // Retrieve the player's current position and moves data from the world.
            let mut game_room:Room =  get!(world, game_id, (Room));
            
            game_room.gamestatus = GameStatus::GameOnGoing;

            // Update the world state with the new room data.
            set!(
                world,
                (
                    game_room
                )
            );

        }

    }
}
