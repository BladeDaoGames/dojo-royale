import Phaser from 'phaser';

export class Scene1 extends Phaser.Scene {
    static readonly SCALEFACTOR = 3;
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys | undefined
    
    constructor(){
        super('Scene1')
        // this.scalefactor = GameSceneFlat.SCALEFACTOR
    }

    preload(){
        //this.load.image('dunes', '/phaser/maps/dunes.png');
        this.cursors = this?.input?.keyboard?.createCursorKeys();

        this.load.image("blackblanktile", "/phaser/tiles/blacktile.png");
        this.load.tilemapTiledJSON(
            "blank-dune-map",
            "/phaser/maps/blank-dune.json",
        );

        this.load.spritesheet("player", "/phaser/sprites/characters.png", {
            frameWidth: 52,
            frameHeight: 72,
        });
    }

    create(){
        // const background = this.add.image(300, 0, 'dunes');
        // background.scale = 0.5

        const blankDuneTilemap = this.make.tilemap({ key: "blank-dune-map" });
        blankDuneTilemap.addTilesetImage("blacktile", "blackblanktile");
        const layer = blankDuneTilemap.createLayer(0, "blacktile", 0, 0);
        layer.scale = 0.2

        const playerSprite = this.add.sprite(0, 0, "player");
        // this.cameras.main.startFollow(playerSprite, true);
        // this.cameras.main.setFollowOffset(
        //     -playerSprite.width,
        //     -playerSprite.height,
        // );

        const gridEngineConfig = {
            characters: [
                {
                    id: "player",
                    sprite: playerSprite,
                    walkingAnimationMapping: 6,
                    startPosition: { x: 8, y: 8 },
                },
            ],
        };

        this.gridEngine.create(blankDuneTilemap, gridEngineConfig)
    }

    update(t:number, d:number){
        if (this?.cursors?.left.isDown) {
            this.gridEngine.move("player", "left");
        } else if (this?.cursors?.right.isDown) {
            this.gridEngine.move("player", "right");
        } else if (this?.cursors?.up.isDown) {
            this.gridEngine.move("player", "up");
        } else if (this?.cursors?.down.isDown) {
            this.gridEngine.move("player", "down");
        }
    }
}