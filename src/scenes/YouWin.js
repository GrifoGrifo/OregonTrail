import Phaser from 'phaser'
import { Rye } from '../consts/Fonts'
import { TitleScreen } from '../consts/SceneKeys'

export default class youwin extends Phaser.Scene
{
    create()
    {
        this.add.image(0, 0, "youWin")
        .setOrigin(0)
        .setScale(1.3)
        this.add.text(450, 30, "You Win! Gold is Yours!", {
            fontFamily: Rye,
            fontSize: 45,
            color: 0x0096FF
        })
        .setOrigin(.5)
        this.add.text(450, 100, "<Click Here to Restart>", {
            fontFamily: Rye,
            fontSize: 35,
            color: 0x0096FF
        })
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        setTimeout(() => {
            this.scene.start(TitleScreen)}, 350)
        })
    }
}
