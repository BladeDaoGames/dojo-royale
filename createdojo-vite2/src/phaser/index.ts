import Phaser from 'phaser';
export * from './usePhaserGame';
import { Scene1 } from './Scene1';

export const gameConfig = {
    type: Phaser.AUTO,
    parent: "phaser-div",
    render: {
        antialias: false,
        transparent: true
    },
    scale:{
        width: 576,
        height: 576,
        mode:  Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH,
        // width: (window.innerHeight>880)?'100%': (window.innerHeight>800)?((900-window.innerHeight)/15*2+100)+'%':((900-window.innerHeight)/15*2+115)+'%',
        // height: (window.innerHeight>880)?'100%':(window.innerHeight>800)?((900-window.innerHeight)/15*2+100)+'%':((900-window.innerHeight)/15*2+115)+'%',
        // // width: '100%',
        // height: '100%',
        zoom: 1
        
    },
    physics:{
        default: 'arcade',
        arcade:{ gravity: { y: 0 } }
    },
    scene: [Scene1]
}