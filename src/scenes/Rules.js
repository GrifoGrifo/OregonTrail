import Phaser from 'phaser'
import { Rye } from '../consts/Fonts'
import { TitleScreen } from '../consts/SceneKeys'

//import { GameBackground, GameOver } from '../consts/SceneKeys'

export default class Rules extends Phaser.Scene
{

    preload()
    {

    }

    create()
    {
        this.add.text(5, 5, "You're a settler attempting to reach Oregon, designated by a green tile. On your journey, you will have the choice to jump to any adjacent tile, or make the leap into the unknown to travel a tile further by holding shift. The trail is an arduous one, and resources are expended quite quickly! In fact, each movement costs supplies equal to the amount of settlers on your wagon. If you run out of supplies, though, your settlers will instead die off one by one each round. On your journey, you may come across three encounters: the base encounter, denoted by a gray tile, in which both fortune and failure shall meet you; the bad luck encounter, denoted by a red tile, in which disaster is immediate; and the shop tile, denoted by a yellow tile, in which you must either trade one crewmember for three supplies or four supplies for one item. You may also run into inhabitable terrain, marked by a black tile. You can't land on it, but you can jump past it. Good Luck!", {
            fontFamily: Rye,
            fontSize: 28,
            wordWrap: {width: 890}
        })
        
        this.add.text(713, 583, '<Return>', {
            fontFamily: Rye,
            fontSize: 39,
            color: '#FF0000'
        })
        .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {

            setTimeout(() => {
                this.scene.start(TitleScreen)}, 350)
            })
    }
}