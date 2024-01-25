use starknet::{ContractAddress};
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

// define the interface
#[starknet::interface]
trait IActions<TContractState> {
    fn createGame(self: @TContractState, board_width: u8, board_height: u8, maxPlayers:u8, minStake: u256)->u128;
    fn joinGame(self: @TContractState, game_id: u128);
    fn move(self: @TContractState, direction: dojo_royale::models::moves::Direction);

}

#[dojo::contract]
mod actions {

    use debug::PrintTrait;
    use super::IActions;

    use starknet::{ContractAddress, get_caller_address};
    use traits::{Into, TryInto};
    use dojo_royale::models::{moves::{Moves, Direction}, rooms::{Room, GameStatus}};
    
    // declaring custom event struct
    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Moved: Moved,
    }

    // declaring custom event struct
    #[derive(Drop, starknet::Event)]
    struct Moved {
        game_id: u128,
        player: ContractAddress,
        direction: Direction
    }


    // impl: implement functions specified in trait
    #[external(v0)]
    impl ActionsImpl of IActions<ContractState> {
        // ContractState is defined by system decorator expansion
        fn createGame(self: @ContractState, board_width: u8, board_height: u8, maxPlayers:u8, minStake: u256) -> u128{
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

                minStake,
                totalStaked: 0,

                maxPlayers,
                playersCount: 0,
                itemCount: 0,

                gamestatus: GameStatus::GameCreated,
                gameWinner: starknet::contract_address_const::<0x0>(),
            
            };

            // Update the world state with the new data.
            set!(
                world,
                (
                    new_room
                )
            );

            game_id
        }

        fn joinGame(self: @ContractState, game_id: u128){
            
        }

        // Implementation of the move function for the ContractState struct.
        fn move(self: @ContractState, direction: Direction) {
            // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // Get the address of the current caller, possibly the player's address.
            let player = get_caller_address();

            // Retrieve the player's current position and moves data from the world.
            //let (mut position, mut moves) = get!(world, player, (Position, Moves));

            // Deduct one from the player's remaining moves.
            //moves.remaining -= 1;

            // Update the last direction the player moved in.
            //moves.last_direction = direction;

            // Calculate the player's next position based on the provided direction.
            //let next = next_position(position, direction);

            // Update the world state with the new moves data and position.
            //set!(world, (moves, next));

            // Emit an event to the world to notify about the player's move.
            //emit!(world, Moved { player, direction });
        }
    }
}
