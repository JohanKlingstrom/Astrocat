import Phaser, { Physics } from 'phaser';// Phaser through node

// import Game from './Game';
import Title from './title.js';
import Game from './game.js';
import GameOver from './GameOver.js';
// import GameOver from './GameOver.js';

var config = {//What the gameboard is going to look like.
    type: Phaser.AUTO,// will choose either webGL or canvas as renderer
    width: 800, //height and width of the game board
    height: 600,
    scene:[Title, Game, GameOver], // run preload, create, update
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            // debug: true // turn this to true and you will get borders and direction "hit area of object"
        }
    }
};

var game = new Phaser.Game(config);