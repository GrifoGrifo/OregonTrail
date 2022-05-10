import Phaser from 'phaser'
import { Rye } from '../consts/Fonts'
import { TitleScreen } from '../consts/SceneKeys'

export default class gameover extends Phaser.Scene
{
    create()
    {
        this.add.rectangle(0, 470, 900, 170, 0x1E1712)
        .setOrigin(0)
        this.add.image(0, 0, "gameOver")
        .setOrigin(0)
        this.add.text(450, 520, "Game Over", {
            fontFamily: Rye,
            fontSize: 45,
            color: 0x332211
        })
        .setOrigin(.5)
        this.add.text(450, 600, "<Click Here to Restart>", {
            fontFamily: Rye,
            fontSize: 35,
            color: 0x332211
        })
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        setTimeout(() => {
            this.scene.start(TitleScreen)}, 350)
    })
        
    }
}