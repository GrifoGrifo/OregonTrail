import Phaser from 'phaser'
import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'
import Preload from './scenes/Preload'
import Rules from './scenes/Rules'
import YouWin from './scenes/YouWin'
import GameOver from './scenes/GameOver'


import * as SceneKeys from './consts/SceneKeys'

const config = 
{
    width: 900,
    height: 640,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    pixelArt: true,
}

const game = new Phaser.Game(config)

game.scene.add(SceneKeys.TitleScreen, TitleScreen)
game.scene.add(SceneKeys.Game, Game)
game.scene.add(SceneKeys.Rules, Rules)
game.scene.add(SceneKeys.GameOver, GameOver)
game.scene.add(SceneKeys.Preload, Preload)
game.scene.add(SceneKeys.YouWin, YouWin)

game.scene.start(SceneKeys.Preload)