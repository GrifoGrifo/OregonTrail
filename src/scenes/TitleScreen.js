import Phaser from "phaser"

import { Game, Rules } from '../consts/SceneKeys'
import { Rye } from '../consts/Fonts'

export default class TitleScreen extends Phaser.Scene

{
    preload()
        {

        }

    create()
        {
            this.add.image(450, 320, "WesternWorld")
            .setScale(1.17)
            this.add.text(450, 320, 'The Oregon Trail ', {
                fontFamily: Rye,
                fontSize: 45,
                color: '#050505',
                shadow: {
                    offsetX: 6,
                    offsetY: 6,
                    blur: 7,
                    color: '#000',
                    stroke: true,
                    fill: true
                }
            })
            .setOrigin(.5)

            this.add.text(450, 400, '<Start> ', {
                fontFamily: Rye,
                fontSize: 35,
                color: '#050505',
                shadow: {
                    offsetX: 6,
                    offsetY: 6,
                    blur: 7,
                    color: '#000',
                    stroke: true,
                    fill: true
                }
            })
            .setOrigin(.5)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            setTimeout(() => {this.scene.start(Game)}, 350)
        })
        this.add.text(450, 480, '<Rules> ', {
            fontFamily: Rye,
            fontSize: 35,
            color: '#050505',
            shadow: {
                offsetX: 6,
                offsetY: 6,
                blur: 7,
                color: '#000',
                stroke: true,
                fill: true
            }
        })
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        setTimeout(() => {
            this.scene.start(Rules)}, 350)
    })
        }
}