import Phaser from 'phaser';

export class Scene1 extends Phaser.Scene {
    static readonly SCALEFACTOR = 3;
    constructor(){
        super('Scene1')
        // this.scalefactor = GameSceneFlat.SCALEFACTOR
    }

    preload(){
        //this.load.image('dunes', '/phaser/maps/dunes.png');
    }

    create(){
        // const background = this.add.image(300, 0, 'dunes');
        // background.scale = 0.5
    }

    update(t:number, d:number){
        null
    }
}