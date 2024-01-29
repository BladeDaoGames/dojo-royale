use starknet::{ContractAddress};
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

// define the interface
#[starknet::interface]
trait IActions<TContractState> {
    fn createGame(self: @TContractState)->u128;
    fn joinGame(self: @TContractState, game_id: u128);
    fn spawn(self: @TContractState);
    fn move(self: @TContractState, direction: dojo_royale::models::moves::Direction);

}

#[dojo::contract]
mod actions {

    use debug::PrintTrait;
    use super::IActions;

    use starknet::{ContractAddress, get_caller_address};
    use traits::{Into, TryInto};
    use dojo_royale::models::{ 
        position::{Position, Vec2}, 
        moves::{Moves, Direction}, 
        rooms::{Room, GameStatus},
        player::{Player, CharacterType}
        };
    
    // declaring custom event struct
    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Moved: Moved,
    }

    // declaring custom event struct
    #[derive(Drop, starknet::Event)]
    struct Moved {
        //game_id: u128,
        player: ContractAddress,
        direction: Direction
    }

    fn next_position(mut position: Position, direction: Direction) -> Position {
        match direction {
            Direction::None => { return position; },
            Direction::Left => { position.vec.x -= 1; },
            Direction::Right => { position.vec.x += 1; },
            Direction::Up => { position.vec.y -= 1; },
            Direction::Down => { position.vec.y += 1; },
        };
        position
    }


    // impl: implement functions specified in trait
    #[external(v0)]
    impl ActionsImpl of IActions<ContractState> {

        // ContractState is defined by system decorator expansion
        fn spawn(self: @ContractState) {
            // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // Get the address of the current caller, possibly the player's address.
            let player = get_caller_address();

            // Retrieve the player's current position from the world.
            let position = get!(world, player, (Position));

            // Retrieve the player's move data, e.g., how many moves they have left.
            let moves = get!(world, player, (Moves));

            // Update the world state with the new data.
            // 1. Set players moves to 10
            // 2. Move the player's position 100 units in both the x and y direction.
            set!(
                world,
                (
                    Moves { player, remaining: 100, last_direction: Direction::None },
                    Position { player, vec: Vec2 { x: 10, y: 10 } },
                )
            );
        }

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

        // Implementation of the move function for the ContractState struct.
        fn move(self: @ContractState, direction: Direction) {
            // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // Get the address of the current caller, possibly the player's address.
            let player = get_caller_address();

            // Retrieve the player's current position and moves data from the world.
            let (mut position, mut moves) = get!(world, player, (Position, Moves));

            // Deduct one from the player's remaining moves.
            moves.remaining -= 1;

            // Update the last direction the player moved in.
            moves.last_direction = direction;

            // Calculate the player's next position based on the provided direction.
            let next = next_position(position, direction);

            // Update the world state with the new moves data and position.
            set!(world, (moves, next));

            // Emit an event to the world to notify about the player's move.
            emit!(world, Moved { player, direction });
        }


    }
}
