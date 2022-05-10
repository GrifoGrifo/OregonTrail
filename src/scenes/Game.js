import Phaser from 'phaser'
import { Rye } from '../consts/Fonts'
import { TitleScreen, GameOver } from '../consts/SceneKeys'
//import { GameBackground, GameOver } from '../consts/SceneKeys'

export default class game extends Phaser.Scene
{
    init()
    {
       this.supplies = 12
       this.crew = 4
    }

    create()
    {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.wagon = this.add.sprite(30, 510, 'WagonUR')
        .setScale(.0472069237, .0472069237)
        .setDepth(5)
        this.background = this.add.image(0, 0, "background")
        .setOrigin(.5)
        .setDepth(1)
        .setScale(11.8)
        this.add.image(450, 565, "FloorBoards")
        .setDepth(2)
        this.add.image(820, 615, "Supplies")
        .setScale(0.1875)
        .setDepth(2)
        this.add.image(820, 565, "Person")
        .setScale(0.0664010624)
        .setDepth(2)
        this.crewLabel = this.add.text(855, 565, "4", {
            fontFamily: Rye,
            fontSize: 30
        })
        .setOrigin(.5)
        .setDepth(2)
        this.suppliesLabel = this.add.text(855, 615, "12", {
            fontFamily: Rye,
            fontSize: 30
        })
        .setOrigin(.5)
        .setDepth(2)

        this.add.image(80, 590, "ArrowU")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.y -= 120
            this.arrowMove('A1', 30, 30, 0, 120)
            this.arrowMove('A2', 90, 30, 0, 120)
            this.arrowMove('A3', 150, 30, 0, 120)
            this.arrowMove('A4', 210, 30, 0, 120)
            this.arrowMove('A5', 270, 30, 0, 120)
            this.arrowMove('A6', 330, 30, 0, 120)
            this.arrowMove('A7', 390, 30, 0, 120)
            this.arrowMove('A8', 450, 30, 0, 120)
            this.arrowMove('A9', 510, 30, 0, 120)
            this.arrowMove('A10', 570, 30, 0, 120)
            this.arrowMove('A11', 630, 30, 0, 120)
            this.arrowMove('A12', 690, 30, 0, 120)
            this.arrowMove('A13', 750, 30, 0, 120)
            this.arrowMove('A14', 810, 30, 0, 120)
            this.arrowMove('B1', 30, 90, 0, 120)
            this.arrowMove('B2', 90, 90, 0, 120)
            this.arrowMove('B3', 150, 90, 0, 120)
            this.arrowMove('B4', 210, 90, 0, 120)
            this.arrowMove('B5', 270, 90, 0, 120)
            this.arrowMove('B6', 330, 90, 0, 120)
            this.arrowMove('B7', 390, 90, 0, 120)
            this.arrowMove('B8', 450, 90, 0, 120)
            this.arrowMove('B9', 510, 90, 0, 120)
            this.arrowMove('B10', 570, 90, 0, 120)
            this.arrowMove('B11', 630, 90, 0, 120)
            this.arrowMove('B12', 690, 90, 0, 120)
            this.arrowMove('B13', 750, 90, 0, 120)
            this.arrowMove('B14', 810, 90, 0, 120)
            this.arrowMove('B15', 870, 90, 0, 120)
            this.arrowMove('C1', 30, 150, 0, 120)
            this.arrowMove('C2', 90, 150, 0, 120)
            this.arrowMove('C3', 150, 150, 0, 120)
            this.arrowMove('C4', 210, 150, 0, 120)
            this.arrowMove('C5', 270, 150, 0, 120)
            this.arrowMove('C6', 330, 150, 0, 120)
            this.arrowMove('C7', 390, 150, 0, 120)
            this.arrowMove('C8', 450, 150, 0, 120)
            this.arrowMove('C9', 510, 150, 0, 120)
            this.arrowMove('C10', 570, 150, 0, 120)
            this.arrowMove('C11', 630, 150, 0, 120)
            this.arrowMove('C12', 690, 150, 0, 120)
            this.arrowMove('C13', 750, 150, 0, 120)
            this.arrowMove('C14', 810, 150, 0, 120)
            this.arrowMove('C15', 870, 150, 0, 120)
            this.arrowMove('D1', 30, 210, 0, 120)
            this.arrowMove('D2', 90, 210, 0, 120)
            this.arrowMove('D3', 150, 210, 0, 120)
            this.arrowMove('D4', 210, 210, 0, 120)
            this.arrowMove('D5', 270, 210, 0, 120)
            this.arrowMove('D6', 330, 210, 0, 120)
            this.arrowMove('D7', 390, 210, 0, 120)
            this.arrowMove('D8', 450, 210, 0, 120)
            this.arrowMove('D9', 510, 210, 0, 120)
            this.arrowMove('D10', 570, 210, 0, 120)
            this.arrowMove('D11', 630, 210, 0, 120)
            this.arrowMove('D12', 690, 210, 0, 120)
            this.arrowMove('D13', 750, 210, 0, 120)
            this.arrowMove('D14', 810, 210, 0, 120)
            this.arrowMove('D15', 870, 210, 0, 120)
            this.arrowMove('E1', 30, 270, 0, 120)
            this.arrowMove('E2', 90, 270, 0, 120)
            this.arrowMove('E3', 150, 270, 0, 120)
            this.arrowMove('E4', 210, 270, 0, 120)
            this.arrowMove('E5', 270, 270, 0, 120)
            this.arrowMove('E6', 330, 270, 0, 120)
            this.arrowMove('E7', 390, 270, 0, 120)
            this.arrowMove('E8', 450, 270, 0, 120)
            this.arrowMove('E9', 510, 270, 0, 120)
            this.arrowMove('E10', 570, 270, 0, 120)
            this.arrowMove('E11', 630, 270, 0, 120)
            this.arrowMove('E12', 690, 270, 0, 120)
            this.arrowMove('E13', 750, 270, 0, 120)
            this.arrowMove('E14', 810, 270, 0, 120)
            this.arrowMove('E15', 870, 270, 0, 120)
            this.arrowMove('F1', 30, 330, 0, 120)
            this.arrowMove('F2', 90, 330, 0, 120)
            this.arrowMove('F3', 150, 330, 0, 120)
            this.arrowMove('F4', 210, 330, 0, 120)
            this.arrowMove('F5', 270, 330, 0, 120)
            this.arrowMove('F6', 330, 330, 0, 120)
            this.arrowMove('F7', 390, 330, 0, 120)
            this.arrowMove('F8', 450, 330, 0, 120)
            this.arrowMove('F9', 510, 330, 0, 120)
            this.arrowMove('F10', 570, 330, 0, 120)
            this.arrowMove('F11', 630, 330, 0, 120)
            this.arrowMove('F12', 690, 330, 0, 120)
            this.arrowMove('F13', 750, 330, 0, 120)
            this.arrowMove('F14', 810, 330, 0, 120)
            this.arrowMove('F15', 870, 330, 0, 120)
            this.arrowMove('G1', 30, 390, 0, 120)
            this.arrowMove('G2', 90, 390, 0, 120)
            this.arrowMove('G3', 150, 390, 0, 120)
            this.arrowMove('G4', 210, 390, 0, 120)
            this.arrowMove('G5', 270, 390, 0, 120)
            this.arrowMove('G6', 330, 390, 0, 120)
            this.arrowMove('G7', 390, 390, 0, 120)
            this.arrowMove('G8', 450, 390, 0, 120)
            this.arrowMove('G9', 510, 390, 0, 120)
            this.arrowMove('G10', 570, 390, 0, 120)
            this.arrowMove('G11', 630, 390, 0, 120)
            this.arrowMove('G12', 690, 390, 0, 120)
            this.arrowMove('G13', 750, 390, 0, 120)
            this.arrowMove('G14', 810, 390, 0, 120)
            this.arrowMove('G15', 870, 390, 0, 120)
            this.arrowMove('H1', 30, 450, 0, 120)
            this.arrowMove('H2', 90, 450, 0, 120)
            this.arrowMove('H3', 150, 450, 0, 120)
            this.arrowMove('H4', 210, 450, 0, 120)
            this.arrowMove('H5', 270, 450, 0, 120)
            this.arrowMove('H6', 330, 450, 0, 120)
            this.arrowMove('H7', 390, 450, 0, 120)
            this.arrowMove('H8', 450, 450, 0, 120)
            this.arrowMove('H9', 510, 450, 0, 120)
            this.arrowMove('H10', 570, 450, 0, 120)
            this.arrowMove('H11', 630, 450, 0, 120)
            this.arrowMove('H12', 690, 450, 0, 120)
            this.arrowMove('H13', 750, 450, 0, 120)
            this.arrowMove('H14', 810, 450, 0, 120)
            this.arrowMove('H15', 870, 450, 0, 120)
            this.arrowMove('I2', 90, 510, 0, 120)
            this.arrowMove('I3', 150, 510, 0, 120)
            this.arrowMove('I4', 210, 510, 0, 120)
            this.arrowMove('I5', 270, 510, 0, 120)
            this.arrowMove('I6', 330, 510, 0, 120)
            this.arrowMove('I7', 390, 510, 0, 120)
            this.arrowMove('I8', 450, 510, 0, 120)
            this.arrowMove('I9', 510, 510, 0, 120)
            this.arrowMove('I10', 570, 510, 0, 120)
            this.arrowMove('I11', 630, 510, 0, 120)
            this.arrowMove('I12', 690, 510, 0, 120)
            this.arrowMove('I13', 750, 510, 0, 120)
            this.arrowMove('I14', 810, 510, 0, 120)
            this.arrowMove('I15', 870, 510, 0, 120)
            }
            else {
            this.wagon.y -= 60
            this.arrowMove('A1', 30, 30, 0, 60)
            this.arrowMove('A2', 90, 30, 0, 60)
            this.arrowMove('A3', 150, 30, 0, 60)
            this.arrowMove('A4', 210, 30, 0, 60)
            this.arrowMove('A5', 270, 30, 0, 60)
            this.arrowMove('A6', 330, 30, 0, 60)
            this.arrowMove('A7', 390, 30, 0, 60)
            this.arrowMove('A8', 450, 30, 0, 60)
            this.arrowMove('A9', 510, 30, 0, 60)
            this.arrowMove('A10', 570, 30, 0, 60)
            this.arrowMove('A11', 630, 30, 0, 60)
            this.arrowMove('A12', 690, 30, 0, 60)
            this.arrowMove('A13', 750, 30, 0, 60)
            this.arrowMove('A14', 810, 30, 0, 60)
            this.arrowMove('B1', 30, 90, 0, 60)
            this.arrowMove('B2', 90, 90, 0, 60)
            this.arrowMove('B3', 150, 90, 0, 60)
            this.arrowMove('B4', 210, 90, 0, 60)
            this.arrowMove('B5', 270, 90, 0, 60)
            this.arrowMove('B6', 330, 90, 0, 60)
            this.arrowMove('B7', 390, 90, 0, 60)
            this.arrowMove('B8', 450, 90, 0, 60)
            this.arrowMove('B9', 510, 90, 0, 60)
            this.arrowMove('B10', 570, 90, 0, 60)
            this.arrowMove('B11', 630, 90, 0, 60)
            this.arrowMove('B12', 690, 90, 0, 60)
            this.arrowMove('B13', 750, 90, 0, 60)
            this.arrowMove('B14', 810, 90, 0, 60)
            this.arrowMove('B15', 870, 90, 0, 60)
            this.arrowMove('C1', 30, 150, 0, 60)
            this.arrowMove('C2', 90, 150, 0, 60)
            this.arrowMove('C3', 150, 150, 0, 60)
            this.arrowMove('C4', 210, 150, 0, 60)
            this.arrowMove('C5', 270, 150, 0, 60)
            this.arrowMove('C6', 330, 150, 0, 60)
            this.arrowMove('C7', 390, 150, 0, 60)
            this.arrowMove('C8', 450, 150, 0, 60)
            this.arrowMove('C9', 510, 150, 0, 60)
            this.arrowMove('C10', 570, 150, 0, 60)
            this.arrowMove('C11', 630, 150, 0, 60)
            this.arrowMove('C12', 690, 150, 0, 60)
            this.arrowMove('C13', 750, 150, 0, 60)
            this.arrowMove('C14', 810, 150, 0, 60)
            this.arrowMove('C15', 870, 150, 0, 60)
            this.arrowMove('D1', 30, 210, 0, 60)
            this.arrowMove('D2', 90, 210, 0, 60)
            this.arrowMove('D3', 150, 210, 0, 60)
            this.arrowMove('D4', 210, 210, 0, 60)
            this.arrowMove('D5', 270, 210, 0, 60)
            this.arrowMove('D6', 330, 210, 0, 60)
            this.arrowMove('D7', 390, 210, 0, 60)
            this.arrowMove('D8', 450, 210, 0, 60)
            this.arrowMove('D9', 510, 210, 0, 60)
            this.arrowMove('D10', 570, 210, 0, 60)
            this.arrowMove('D11', 630, 210, 0, 60)
            this.arrowMove('D12', 690, 210, 0, 60)
            this.arrowMove('D13', 750, 210, 0, 60)
            this.arrowMove('D14', 810, 210, 0, 60)
            this.arrowMove('D15', 870, 210, 0, 60)
            this.arrowMove('E1', 30, 270, 0, 60)
            this.arrowMove('E2', 90, 270, 0, 60)
            this.arrowMove('E3', 150, 270, 0, 60)
            this.arrowMove('E4', 210, 270, 0, 60)
            this.arrowMove('E5', 270, 270, 0, 60)
            this.arrowMove('E6', 330, 270, 0, 60)
            this.arrowMove('E7', 390, 270, 0, 60)
            this.arrowMove('E8', 450, 270, 0, 60)
            this.arrowMove('E9', 510, 270, 0, 60)
            this.arrowMove('E10', 570, 270, 0, 60)
            this.arrowMove('E11', 630, 270, 0, 60)
            this.arrowMove('E12', 690, 270, 0, 60)
            this.arrowMove('E13', 750, 270, 0, 60)
            this.arrowMove('E14', 810, 270, 0, 60)
            this.arrowMove('E15', 870, 270, 0, 60)
            this.arrowMove('F1', 30, 330, 0, 60)
            this.arrowMove('F2', 90, 330, 0, 60)
            this.arrowMove('F3', 150, 330, 0, 60)
            this.arrowMove('F4', 210, 330, 0, 60)
            this.arrowMove('F5', 270, 330, 0, 60)
            this.arrowMove('F6', 330, 330, 0, 60)
            this.arrowMove('F7', 390, 330, 0, 60)
            this.arrowMove('F8', 450, 330, 0, 60)
            this.arrowMove('F9', 510, 330, 0, 60)
            this.arrowMove('F10', 570, 330, 0, 60)
            this.arrowMove('F11', 630, 330, 0, 60)
            this.arrowMove('F12', 690, 330, 0, 60)
            this.arrowMove('F13', 750, 330, 0, 60)
            this.arrowMove('F14', 810, 330, 0, 60)
            this.arrowMove('F15', 870, 330, 0, 60)
            this.arrowMove('G1', 30, 390, 0, 60)
            this.arrowMove('G2', 90, 390, 0, 60)
            this.arrowMove('G3', 150, 390, 0, 60)
            this.arrowMove('G4', 210, 390, 0, 60)
            this.arrowMove('G5', 270, 390, 0, 60)
            this.arrowMove('G6', 330, 390, 0, 60)
            this.arrowMove('G7', 390, 390, 0, 60)
            this.arrowMove('G8', 450, 390, 0, 60)
            this.arrowMove('G9', 510, 390, 0, 60)
            this.arrowMove('G10', 570, 390, 0, 60)
            this.arrowMove('G11', 630, 390, 0, 60)
            this.arrowMove('G12', 690, 390, 0, 60)
            this.arrowMove('G13', 750, 390, 0, 60)
            this.arrowMove('G14', 810, 390, 0, 60)
            this.arrowMove('G15', 870, 390, 0, 60)
            this.arrowMove('H1', 30, 450, 0, 60)
            this.arrowMove('H2', 90, 450, 0, 60)
            this.arrowMove('H3', 150, 450, 0, 60)
            this.arrowMove('H4', 210, 450, 0, 60)
            this.arrowMove('H5', 270, 450, 0, 60)
            this.arrowMove('H6', 330, 450, 0, 60)
            this.arrowMove('H7', 390, 450, 0, 60)
            this.arrowMove('H8', 450, 450, 0, 60)
            this.arrowMove('H9', 510, 450, 0, 60)
            this.arrowMove('H10', 570, 450, 0, 60)
            this.arrowMove('H11', 630, 450, 0, 60)
            this.arrowMove('H12', 690, 450, 0, 60)
            this.arrowMove('H13', 750, 450, 0, 60)
            this.arrowMove('H14', 810, 450, 0, 60)
            this.arrowMove('H15', 870, 450, 0, 60)
            this.arrowMove('I2', 90, 510, 0, 60)
            this.arrowMove('I3', 150, 510, 0, 60)
            this.arrowMove('I4', 210, 510, 0, 60)
            this.arrowMove('I5', 270, 510, 0, 60)
            this.arrowMove('I6', 330, 510, 0, 60)
            this.arrowMove('I7', 390, 510, 0, 60)
            this.arrowMove('I8', 450, 510, 0, 60)
            this.arrowMove('I9', 510, 510, 0, 60)
            this.arrowMove('I10', 570, 510, 0, 60)
            this.arrowMove('I11', 630, 510, 0, 60)
            this.arrowMove('I12', 690, 510, 0, 60)
            this.arrowMove('I13', 750, 510, 0, 60)
            this.arrowMove('I14', 810, 510, 0, 60)
            this.arrowMove('I15', 870, 510, 0, 60)
            }
            this.wagon.setTexture("WagonU")
            this.moveUpdate()
        })
        
        this.add.image(175, 590, "ArrowUR")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.y -= 120
            this.wagon.x += 120
            this.arrowMove('A1', 30, 30, 120, 120)
            this.arrowMove('A2', 90, 30, 120, 120)
            this.arrowMove('A3', 150, 30, 120, 120)
            this.arrowMove('A4', 210, 30, 120, 120)
            this.arrowMove('A5', 270, 30, 120, 120)
            this.arrowMove('A6', 330, 30, 120, 120)
            this.arrowMove('A7', 390, 30, 120, 120)
            this.arrowMove('A8', 450, 30, 120, 120)
            this.arrowMove('A9', 510, 30, 120, 120)
            this.arrowMove('A10', 570, 30, 120, 120)
            this.arrowMove('A11', 630, 30, 120, 120)
            this.arrowMove('A12', 690, 30, 120, 120)
            this.arrowMove('A13', 750, 30, 120, 120)
            this.arrowMove('A14', 810, 30, 120, 120)
            this.arrowMove('B1', 30, 90, 120, 120)
            this.arrowMove('B2', 90, 90, 120, 120)
            this.arrowMove('B3', 150, 90, 120, 120)
            this.arrowMove('B4', 210, 90, 120, 120)
            this.arrowMove('B5', 270, 90, 120, 120)
            this.arrowMove('B6', 330, 90, 120, 120)
            this.arrowMove('B7', 390, 90, 120, 120)
            this.arrowMove('B8', 450, 90, 120, 120)
            this.arrowMove('B9', 510, 90, 120, 120)
            this.arrowMove('B10', 570, 90, 120, 120)
            this.arrowMove('B11', 630, 90, 120, 120)
            this.arrowMove('B12', 690, 90, 120, 120)
            this.arrowMove('B13', 750, 90, 120, 120)
            this.arrowMove('B14', 810, 90, 120, 120)
            this.arrowMove('B15', 870, 90, 120, 120)
            this.arrowMove('C1', 30, 150, 120, 120)
            this.arrowMove('C2', 90, 150, 120, 120)
            this.arrowMove('C3', 150, 150, 120, 120)
            this.arrowMove('C4', 210, 150, 120, 120)
            this.arrowMove('C5', 270, 150, 120, 120)
            this.arrowMove('C6', 330, 150, 120, 120)
            this.arrowMove('C7', 390, 150, 120, 120)
            this.arrowMove('C8', 450, 150, 120, 120)
            this.arrowMove('C9', 510, 150, 120, 120)
            this.arrowMove('C10', 570, 150, 120, 120)
            this.arrowMove('C11', 630, 150, 120, 120)
            this.arrowMove('C12', 690, 150, 120, 120)
            this.arrowMove('C13', 750, 150, 120, 120)
            this.arrowMove('C14', 810, 150, 120, 120)
            this.arrowMove('C15', 870, 150, 120, 120)
            this.arrowMove('D1', 30, 210, 120, 120)
            this.arrowMove('D2', 90, 210, 120, 120)
            this.arrowMove('D3', 150, 210, 120, 120)
            this.arrowMove('D4', 210, 210, 120, 120)
            this.arrowMove('D5', 270, 210, 120, 120)
            this.arrowMove('D6', 330, 210, 120, 120)
            this.arrowMove('D7', 390, 210, 120, 120)
            this.arrowMove('D8', 450, 210, 120, 120)
            this.arrowMove('D9', 510, 210, 120, 120)
            this.arrowMove('D10', 570, 210, 120, 120)
            this.arrowMove('D11', 630, 210, 120, 120)
            this.arrowMove('D12', 690, 210, 120, 120)
            this.arrowMove('D13', 750, 210, 120, 120)
            this.arrowMove('D14', 810, 210, 120, 120)
            this.arrowMove('D15', 870, 210, 120, 120)
            this.arrowMove('E1', 30, 270, 120, 120)
            this.arrowMove('E2', 90, 270, 120, 120)
            this.arrowMove('E3', 150, 270, 120, 120)
            this.arrowMove('E4', 210, 270, 120, 120)
            this.arrowMove('E5', 270, 270, 120, 120)
            this.arrowMove('E6', 330, 270, 120, 120)
            this.arrowMove('E7', 390, 270, 120, 120)
            this.arrowMove('E8', 450, 270, 120, 120)
            this.arrowMove('E9', 510, 270, 120, 120)
            this.arrowMove('E10', 570, 270, 120, 120)
            this.arrowMove('E11', 630, 270, 120, 120)
            this.arrowMove('E12', 690, 270, 120, 120)
            this.arrowMove('E13', 750, 270, 120, 120)
            this.arrowMove('E14', 810, 270, 120, 120)
            this.arrowMove('E15', 870, 270, 120, 120)
            this.arrowMove('F1', 30, 330, 120, 120)
            this.arrowMove('F2', 90, 330, 120, 120)
            this.arrowMove('F3', 150, 330, 120, 120)
            this.arrowMove('F4', 210, 330, 120, 120)
            this.arrowMove('F5', 270, 330, 120, 120)
            this.arrowMove('F6', 330, 330, 120, 120)
            this.arrowMove('F7', 390, 330, 120, 120)
            this.arrowMove('F8', 450, 330, 120, 120)
            this.arrowMove('F9', 510, 330, 120, 120)
            this.arrowMove('F10', 570, 330, 120, 120)
            this.arrowMove('F11', 630, 330, 120, 120)
            this.arrowMove('F12', 690, 330, 120, 120)
            this.arrowMove('F13', 750, 330, 120, 120)
            this.arrowMove('F14', 810, 330, 120, 120)
            this.arrowMove('F15', 870, 330, 120, 120)
            this.arrowMove('G1', 30, 390, 120, 120)
            this.arrowMove('G2', 90, 390, 120, 120)
            this.arrowMove('G3', 150, 390, 120, 120)
            this.arrowMove('G4', 210, 390, 120, 120)
            this.arrowMove('G5', 270, 390, 120, 120)
            this.arrowMove('G6', 330, 390, 120, 120)
            this.arrowMove('G7', 390, 390, 120, 120)
            this.arrowMove('G8', 450, 390, 120, 120)
            this.arrowMove('G9', 510, 390, 120, 120)
            this.arrowMove('G10', 570, 390, 120, 120)
            this.arrowMove('G11', 630, 390, 120, 120)
            this.arrowMove('G12', 690, 390, 120, 120)
            this.arrowMove('G13', 750, 390, 120, 120)
            this.arrowMove('G14', 810, 390, 120, 120)
            this.arrowMove('G15', 870, 390, 120, 120)
            this.arrowMove('H1', 30, 450, 120, 120)
            this.arrowMove('H2', 90, 450, 120, 120)
            this.arrowMove('H3', 150, 450, 120, 120)
            this.arrowMove('H4', 210, 450, 120, 120)
            this.arrowMove('H5', 270, 450, 120, 120)
            this.arrowMove('H6', 330, 450, 120, 120)
            this.arrowMove('H7', 390, 450, 120, 120)
            this.arrowMove('H8', 450, 450, 120, 120)
            this.arrowMove('H9', 510, 450, 120, 120)
            this.arrowMove('H10', 570, 450, 120, 120)
            this.arrowMove('H11', 630, 450, 120, 120)
            this.arrowMove('H12', 690, 450, 120, 120)
            this.arrowMove('H13', 750, 450, 120, 120)
            this.arrowMove('H14', 810, 450, 120, 120)
            this.arrowMove('H15', 870, 450, 120, 120)
            this.arrowMove('I2', 90, 510, 120, 120)
            this.arrowMove('I3', 150, 510, 120, 120)
            this.arrowMove('I4', 210, 510, 120, 120)
            this.arrowMove('I5', 270, 510, 120, 120)
            this.arrowMove('I6', 330, 510, 120, 120)
            this.arrowMove('I7', 390, 510, 120, 120)
            this.arrowMove('I8', 450, 510, 120, 120)
            this.arrowMove('I9', 510, 510, 120, 120)
            this.arrowMove('I10', 570, 510, 120, 120)
            this.arrowMove('I11', 630, 510, 120, 120)
            this.arrowMove('I12', 690, 510, 120, 120)
            this.arrowMove('I13', 750, 510, 120, 120)
            this.arrowMove('I14', 810, 510, 120, 120)
            this.arrowMove('I15', 870, 510, 120, 120)
            }
            else {
            this.wagon.y -= 60
            this.wagon.x += 60
            this.arrowMove('A1', 30, 30, 60, 60)
            this.arrowMove('A2', 90, 30, 60, 60)
            this.arrowMove('A3', 150, 30, 60, 60)
            this.arrowMove('A4', 210, 30, 60, 60)
            this.arrowMove('A5', 270, 30, 60, 60)
            this.arrowMove('A6', 330, 30, 60, 60)
            this.arrowMove('A7', 390, 30, 60, 60)
            this.arrowMove('A8', 450, 30, 60, 60)
            this.arrowMove('A9', 510, 30, 60, 60)
            this.arrowMove('A10', 570, 30, 60, 60)
            this.arrowMove('A11', 630, 30, 60, 60)
            this.arrowMove('A12', 690, 30, 60, 60)
            this.arrowMove('A13', 750, 30, 60, 60)
            this.arrowMove('A14', 810, 30, 60, 60)
            this.arrowMove('B1', 30, 90, 60, 60)
            this.arrowMove('B2', 90, 90, 60, 60)
            this.arrowMove('B3', 150, 90, 60, 60)
            this.arrowMove('B4', 210, 90, 60, 60)
            this.arrowMove('B5', 270, 90, 60, 60)
            this.arrowMove('B6', 330, 90, 60, 60)
            this.arrowMove('B7', 390, 90, 60, 60)
            this.arrowMove('B8', 450, 90, 60, 60)
            this.arrowMove('B9', 510, 90, 60, 60)
            this.arrowMove('B10', 570, 90, 60, 60)
            this.arrowMove('B11', 630, 90, 60, 60)
            this.arrowMove('B12', 690, 90, 60, 60)
            this.arrowMove('B13', 750, 90, 60, 60)
            this.arrowMove('B14', 810, 90, 60, 60)
            this.arrowMove('B15', 870, 90, 60, 60)
            this.arrowMove('C1', 30, 150, 60, 60)
            this.arrowMove('C2', 90, 150, 60, 60)
            this.arrowMove('C3', 150, 150, 60, 60)
            this.arrowMove('C4', 210, 150, 60, 60)
            this.arrowMove('C5', 270, 150, 60, 60)
            this.arrowMove('C6', 330, 150, 60, 60)
            this.arrowMove('C7', 390, 150, 60, 60)
            this.arrowMove('C8', 450, 150, 60, 60)
            this.arrowMove('C9', 510, 150, 60, 60)
            this.arrowMove('C10', 570, 150, 60, 60)
            this.arrowMove('C11', 630, 150, 60, 60)
            this.arrowMove('C12', 690, 150, 60, 60)
            this.arrowMove('C13', 750, 150, 60, 60)
            this.arrowMove('C14', 810, 150, 60, 60)
            this.arrowMove('C15', 870, 150, 60, 60)
            this.arrowMove('D1', 30, 210, 60, 60)
            this.arrowMove('D2', 90, 210, 60, 60)
            this.arrowMove('D3', 150, 210, 60, 60)
            this.arrowMove('D4', 210, 210, 60, 60)
            this.arrowMove('D5', 270, 210, 60, 60)
            this.arrowMove('D6', 330, 210, 60, 60)
            this.arrowMove('D7', 390, 210, 60, 60)
            this.arrowMove('D8', 450, 210, 60, 60)
            this.arrowMove('D9', 510, 210, 60, 60)
            this.arrowMove('D10', 570, 210, 60, 60)
            this.arrowMove('D11', 630, 210, 60, 60)
            this.arrowMove('D12', 690, 210, 60, 60)
            this.arrowMove('D13', 750, 210, 60, 60)
            this.arrowMove('D14', 810, 210, 60, 60)
            this.arrowMove('D15', 870, 210, 60, 60)
            this.arrowMove('E1', 30, 270, 60, 60)
            this.arrowMove('E2', 90, 270, 60, 60)
            this.arrowMove('E3', 150, 270, 60, 60)
            this.arrowMove('E4', 210, 270, 60, 60)
            this.arrowMove('E5', 270, 270, 60, 60)
            this.arrowMove('E6', 330, 270, 60, 60)
            this.arrowMove('E7', 390, 270, 60, 60)
            this.arrowMove('E8', 450, 270, 60, 60)
            this.arrowMove('E9', 510, 270, 60, 60)
            this.arrowMove('E10', 570, 270, 60, 60)
            this.arrowMove('E11', 630, 270, 60, 60)
            this.arrowMove('E12', 690, 270, 60, 60)
            this.arrowMove('E13', 750, 270, 60, 60)
            this.arrowMove('E14', 810, 270, 60, 60)
            this.arrowMove('E15', 870, 270, 60, 60)
            this.arrowMove('F1', 30, 330, 60, 60)
            this.arrowMove('F2', 90, 330, 60, 60)
            this.arrowMove('F3', 150, 330, 60, 60)
            this.arrowMove('F4', 210, 330, 60, 60)
            this.arrowMove('F5', 270, 330, 60, 60)
            this.arrowMove('F6', 330, 330, 60, 60)
            this.arrowMove('F7', 390, 330, 60, 60)
            this.arrowMove('F8', 450, 330, 60, 60)
            this.arrowMove('F9', 510, 330, 60, 60)
            this.arrowMove('F10', 570, 330, 60, 60)
            this.arrowMove('F11', 630, 330, 60, 60)
            this.arrowMove('F12', 690, 330, 60, 60)
            this.arrowMove('F13', 750, 330, 60, 60)
            this.arrowMove('F14', 810, 330, 60, 60)
            this.arrowMove('F15', 870, 330, 60, 60)
            this.arrowMove('G1', 30, 390, 60, 60)
            this.arrowMove('G2', 90, 390, 60, 60)
            this.arrowMove('G3', 150, 390, 60, 60)
            this.arrowMove('G4', 210, 390, 60, 60)
            this.arrowMove('G5', 270, 390, 60, 60)
            this.arrowMove('G6', 330, 390, 60, 60)
            this.arrowMove('G7', 390, 390, 60, 60)
            this.arrowMove('G8', 450, 390, 60, 60)
            this.arrowMove('G9', 510, 390, 60, 60)
            this.arrowMove('G10', 570, 390, 60, 60)
            this.arrowMove('G11', 630, 390, 60, 60)
            this.arrowMove('G12', 690, 390, 60, 60)
            this.arrowMove('G13', 750, 390, 60, 60)
            this.arrowMove('G14', 810, 390, 60, 60)
            this.arrowMove('G15', 870, 390, 60, 60)
            this.arrowMove('H1', 30, 450, 60, 60)
            this.arrowMove('H2', 90, 450, 60, 60)
            this.arrowMove('H3', 150, 450, 60, 60)
            this.arrowMove('H4', 210, 450, 60, 60)
            this.arrowMove('H5', 270, 450, 60, 60)
            this.arrowMove('H6', 330, 450, 60, 60)
            this.arrowMove('H7', 390, 450, 60, 60)
            this.arrowMove('H8', 450, 450, 60, 60)
            this.arrowMove('H9', 510, 450, 60, 60)
            this.arrowMove('H10', 570, 450, 60, 60)
            this.arrowMove('H11', 630, 450, 60, 60)
            this.arrowMove('H12', 690, 450, 60, 60)
            this.arrowMove('H13', 750, 450, 60, 60)
            this.arrowMove('H14', 810, 450, 60, 60)
            this.arrowMove('H15', 870, 450, 60, 60)
            this.arrowMove('I2', 90, 510, 60, 60)
            this.arrowMove('I3', 150, 510, 60, 60)
            this.arrowMove('I4', 210, 510, 60, 60)
            this.arrowMove('I5', 270, 510, 60, 60)
            this.arrowMove('I6', 330, 510, 60, 60)
            this.arrowMove('I7', 390, 510, 60, 60)
            this.arrowMove('I8', 450, 510, 60, 60)
            this.arrowMove('I9', 510, 510, 60, 60)
            this.arrowMove('I10', 570, 510, 60, 60)
            this.arrowMove('I11', 630, 510, 60, 60)
            this.arrowMove('I12', 690, 510, 60, 60)
            this.arrowMove('I13', 750, 510, 60, 60)
            this.arrowMove('I14', 810, 510, 60, 60)
            this.arrowMove('I15', 870, 510, 60, 60)
            }
            this.wagon.setTexture("WagonUR")
            this.moveUpdate()
        })

        this.add.image(270, 590, "ArrowR")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.x += 120
            this.arrowMove('A1', 30, 30, 120, 0)
            this.arrowMove('A2', 90, 30, 120, 0)
            this.arrowMove('A3', 150, 30, 120, 0)
            this.arrowMove('A4', 210, 30, 120, 0)
            this.arrowMove('A5', 270, 30, 120, 0)
            this.arrowMove('A6', 330, 30, 120, 0)
            this.arrowMove('A7', 390, 30, 120, 0)
            this.arrowMove('A8', 450, 30, 120, 0)
            this.arrowMove('A9', 510, 30, 120, 0)
            this.arrowMove('A10', 570, 30, 120, 0)
            this.arrowMove('A11', 630, 30, 120, 0)
            this.arrowMove('A12', 690, 30, 120, 0)
            this.arrowMove('A13', 750, 30, 120, 0)
            this.arrowMove('A14', 810, 30, 120, 0)
            this.arrowMove('B1', 30, 90, 120, 0)
            this.arrowMove('B2', 90, 90, 120, 0)
            this.arrowMove('B3', 150, 90, 120, 0)
            this.arrowMove('B4', 210, 90, 120, 0)
            this.arrowMove('B5', 270, 90, 120, 0)
            this.arrowMove('B6', 330, 90, 120, 0)
            this.arrowMove('B7', 390, 90, 120, 0)
            this.arrowMove('B8', 450, 90, 120, 0)
            this.arrowMove('B9', 510, 90, 120, 0)
            this.arrowMove('B10', 570, 90, 120, 0)
            this.arrowMove('B11', 630, 90, 120, 0)
            this.arrowMove('B12', 690, 90, 120, 0)
            this.arrowMove('B13', 750, 90, 120, 0)
            this.arrowMove('B14', 810, 90, 120, 0)
            this.arrowMove('B15', 870, 90, 120, 0)
            this.arrowMove('C1', 30, 150, 120, 0)
            this.arrowMove('C2', 90, 150, 120, 0)
            this.arrowMove('C3', 150, 150, 120, 0)
            this.arrowMove('C4', 210, 150, 120, 0)
            this.arrowMove('C5', 270, 150, 120, 0)
            this.arrowMove('C6', 330, 150, 120, 0)
            this.arrowMove('C7', 390, 150, 120, 0)
            this.arrowMove('C8', 450, 150, 120, 0)
            this.arrowMove('C9', 510, 150, 120, 0)
            this.arrowMove('C10', 570, 150, 120, 0)
            this.arrowMove('C11', 630, 150, 120, 0)
            this.arrowMove('C12', 690, 150, 120, 0)
            this.arrowMove('C13', 750, 150, 120, 0)
            this.arrowMove('C14', 810, 150, 120, 0)
            this.arrowMove('C15', 870, 150, 120, 0)
            this.arrowMove('D1', 30, 210, 120, 0)
            this.arrowMove('D2', 90, 210, 120, 0)
            this.arrowMove('D3', 150, 210, 120, 0)
            this.arrowMove('D4', 210, 210, 120, 0)
            this.arrowMove('D5', 270, 210, 120, 0)
            this.arrowMove('D6', 330, 210, 120, 0)
            this.arrowMove('D7', 390, 210, 120, 0)
            this.arrowMove('D8', 450, 210, 120, 0)
            this.arrowMove('D9', 510, 210, 120, 0)
            this.arrowMove('D10', 570, 210, 120, 0)
            this.arrowMove('D11', 630, 210, 120, 0)
            this.arrowMove('D12', 690, 210, 120, 0)
            this.arrowMove('D13', 750, 210, 120, 0)
            this.arrowMove('D14', 810, 210, 120, 0)
            this.arrowMove('D15', 870, 210, 120, 0)
            this.arrowMove('E1', 30, 270, 120, 0)
            this.arrowMove('E2', 90, 270, 120, 0)
            this.arrowMove('E3', 150, 270, 120, 0)
            this.arrowMove('E4', 210, 270, 120, 0)
            this.arrowMove('E5', 270, 270, 120, 0)
            this.arrowMove('E6', 330, 270, 120, 0)
            this.arrowMove('E7', 390, 270, 120, 0)
            this.arrowMove('E8', 450, 270, 120, 0)
            this.arrowMove('E9', 510, 270, 120, 0)
            this.arrowMove('E10', 570, 270, 120, 0)
            this.arrowMove('E11', 630, 270, 120, 0)
            this.arrowMove('E12', 690, 270, 120, 0)
            this.arrowMove('E13', 750, 270, 120, 0)
            this.arrowMove('E14', 810, 270, 120, 0)
            this.arrowMove('E15', 870, 270, 120, 0)
            this.arrowMove('F1', 30, 330, 120, 0)
            this.arrowMove('F2', 90, 330, 120, 0)
            this.arrowMove('F3', 150, 330, 120, 0)
            this.arrowMove('F4', 210, 330, 120, 0)
            this.arrowMove('F5', 270, 330, 120, 0)
            this.arrowMove('F6', 330, 330, 120, 0)
            this.arrowMove('F7', 390, 330, 120, 0)
            this.arrowMove('F8', 450, 330, 120, 0)
            this.arrowMove('F9', 510, 330, 120, 0)
            this.arrowMove('F10', 570, 330, 120, 0)
            this.arrowMove('F11', 630, 330, 120, 0)
            this.arrowMove('F12', 690, 330, 120, 0)
            this.arrowMove('F13', 750, 330, 120, 0)
            this.arrowMove('F14', 810, 330, 120, 0)
            this.arrowMove('F15', 870, 330, 120, 0)
            this.arrowMove('G1', 30, 390, 120, 0)
            this.arrowMove('G2', 90, 390, 120, 0)
            this.arrowMove('G3', 150, 390, 120, 0)
            this.arrowMove('G4', 210, 390, 120, 0)
            this.arrowMove('G5', 270, 390, 120, 0)
            this.arrowMove('G6', 330, 390, 120, 0)
            this.arrowMove('G7', 390, 390, 120, 0)
            this.arrowMove('G8', 450, 390, 120, 0)
            this.arrowMove('G9', 510, 390, 120, 0)
            this.arrowMove('G10', 570, 390, 120, 0)
            this.arrowMove('G11', 630, 390, 120, 0)
            this.arrowMove('G12', 690, 390, 120, 0)
            this.arrowMove('G13', 750, 390, 120, 0)
            this.arrowMove('G14', 810, 390, 120, 0)
            this.arrowMove('G15', 870, 390, 120, 0)
            this.arrowMove('H1', 30, 450, 120, 0)
            this.arrowMove('H2', 90, 450, 120, 0)
            this.arrowMove('H3', 150, 450, 120, 0)
            this.arrowMove('H4', 210, 450, 120, 0)
            this.arrowMove('H5', 270, 450, 120, 0)
            this.arrowMove('H6', 330, 450, 120, 0)
            this.arrowMove('H7', 390, 450, 120, 0)
            this.arrowMove('H8', 450, 450, 120, 0)
            this.arrowMove('H9', 510, 450, 120, 0)
            this.arrowMove('H10', 570, 450, 120, 0)
            this.arrowMove('H11', 630, 450, 120, 0)
            this.arrowMove('H12', 690, 450, 120, 0)
            this.arrowMove('H13', 750, 450, 120, 0)
            this.arrowMove('H14', 810, 450, 120, 0)
            this.arrowMove('H15', 870, 450, 120, 0)
            this.arrowMove('I2', 90, 510, 120, 0)
            this.arrowMove('I3', 150, 510, 120, 0)
            this.arrowMove('I4', 210, 510, 120, 0)
            this.arrowMove('I5', 270, 510, 120, 0)
            this.arrowMove('I6', 330, 510, 120, 0)
            this.arrowMove('I7', 390, 510, 120, 0)
            this.arrowMove('I8', 450, 510, 120, 0)
            this.arrowMove('I9', 510, 510, 120, 0)
            this.arrowMove('I10', 570, 510, 120, 0)
            this.arrowMove('I11', 630, 510, 120, 0)
            this.arrowMove('I12', 690, 510, 120, 0)
            this.arrowMove('I13', 750, 510, 120, 0)
            this.arrowMove('I14', 810, 510, 120, 0)
            this.arrowMove('I15', 870, 510, 120, 0)
            }
            else {
            this.wagon.x += 60
            this.arrowMove('A1', 30, 30, 60, 0)
            this.arrowMove('A2', 90, 30, 60, 0)
            this.arrowMove('A3', 150, 30, 60, 0)
            this.arrowMove('A4', 210, 30, 60, 0)
            this.arrowMove('A5', 270, 30, 60, 0)
            this.arrowMove('A6', 330, 30, 60, 0)
            this.arrowMove('A7', 390, 30, 60, 0)
            this.arrowMove('A8', 450, 30, 60, 0)
            this.arrowMove('A9', 510, 30, 60, 0)
            this.arrowMove('A10', 570, 30, 60, 0)
            this.arrowMove('A11', 630, 30, 60, 0)
            this.arrowMove('A12', 690, 30, 60, 0)
            this.arrowMove('A13', 750, 30, 60, 0)
            this.arrowMove('A14', 810, 30, 60, 0)
            this.arrowMove('B1', 30, 90, 60, 0)
            this.arrowMove('B2', 90, 90, 60, 0)
            this.arrowMove('B3', 150, 90, 60, 0)
            this.arrowMove('B4', 210, 90, 60, 0)
            this.arrowMove('B5', 270, 90, 60, 0)
            this.arrowMove('B6', 330, 90, 60, 0)
            this.arrowMove('B7', 390, 90, 60, 0)
            this.arrowMove('B8', 450, 90, 60, 0)
            this.arrowMove('B9', 510, 90, 60, 0)
            this.arrowMove('B10', 570, 90, 60, 0)
            this.arrowMove('B11', 630, 90, 60, 0)
            this.arrowMove('B12', 690, 90, 60, 0)
            this.arrowMove('B13', 750, 90, 60, 0)
            this.arrowMove('B14', 810, 90, 60, 0)
            this.arrowMove('B15', 870, 90, 60, 0)
            this.arrowMove('C1', 30, 150, 60, 0)
            this.arrowMove('C2', 90, 150, 60, 0)
            this.arrowMove('C3', 150, 150, 60, 0)
            this.arrowMove('C4', 210, 150, 60, 0)
            this.arrowMove('C5', 270, 150, 60, 0)
            this.arrowMove('C6', 330, 150, 60, 0)
            this.arrowMove('C7', 390, 150, 60, 0)
            this.arrowMove('C8', 450, 150, 60, 0)
            this.arrowMove('C9', 510, 150, 60, 0)
            this.arrowMove('C10', 570, 150, 60, 0)
            this.arrowMove('C11', 630, 150, 60, 0)
            this.arrowMove('C12', 690, 150, 60, 0)
            this.arrowMove('C13', 750, 150, 60, 0)
            this.arrowMove('C14', 810, 150, 60, 0)
            this.arrowMove('C15', 870, 150, 60, 0)
            this.arrowMove('D1', 30, 210, 60, 0)
            this.arrowMove('D2', 90, 210, 60, 0)
            this.arrowMove('D3', 150, 210, 60, 0)
            this.arrowMove('D4', 210, 210, 60, 0)
            this.arrowMove('D5', 270, 210, 60, 0)
            this.arrowMove('D6', 330, 210, 60, 0)
            this.arrowMove('D7', 390, 210, 60, 0)
            this.arrowMove('D8', 450, 210, 60, 0)
            this.arrowMove('D9', 510, 210, 60, 0)
            this.arrowMove('D10', 570, 210, 60, 0)
            this.arrowMove('D11', 630, 210, 60, 0)
            this.arrowMove('D12', 690, 210, 60, 0)
            this.arrowMove('D13', 750, 210, 60, 0)
            this.arrowMove('D14', 810, 210, 60, 0)
            this.arrowMove('D15', 870, 210, 60, 0)
            this.arrowMove('E1', 30, 270, 60, 0)
            this.arrowMove('E2', 90, 270, 60, 0)
            this.arrowMove('E3', 150, 270, 60, 0)
            this.arrowMove('E4', 210, 270, 60, 0)
            this.arrowMove('E5', 270, 270, 60, 0)
            this.arrowMove('E6', 330, 270, 60, 0)
            this.arrowMove('E7', 390, 270, 60, 0)
            this.arrowMove('E8', 450, 270, 60, 0)
            this.arrowMove('E9', 510, 270, 60, 0)
            this.arrowMove('E10', 570, 270, 60, 0)
            this.arrowMove('E11', 630, 270, 60, 0)
            this.arrowMove('E12', 690, 270, 60, 0)
            this.arrowMove('E13', 750, 270, 60, 0)
            this.arrowMove('E14', 810, 270, 60, 0)
            this.arrowMove('E15', 870, 270, 60, 0)
            this.arrowMove('F1', 30, 330, 60, 0)
            this.arrowMove('F2', 90, 330, 60, 0)
            this.arrowMove('F3', 150, 330, 60, 0)
            this.arrowMove('F4', 210, 330, 60, 0)
            this.arrowMove('F5', 270, 330, 60, 0)
            this.arrowMove('F6', 330, 330, 60, 0)
            this.arrowMove('F7', 390, 330, 60, 0)
            this.arrowMove('F8', 450, 330, 60, 0)
            this.arrowMove('F9', 510, 330, 60, 0)
            this.arrowMove('F10', 570, 330, 60, 0)
            this.arrowMove('F11', 630, 330, 60, 0)
            this.arrowMove('F12', 690, 330, 60, 0)
            this.arrowMove('F13', 750, 330, 60, 0)
            this.arrowMove('F14', 810, 330, 60, 0)
            this.arrowMove('F15', 870, 330, 60, 0)
            this.arrowMove('G1', 30, 390, 60, 0)
            this.arrowMove('G2', 90, 390, 60, 0)
            this.arrowMove('G3', 150, 390, 60, 0)
            this.arrowMove('G4', 210, 390, 60, 0)
            this.arrowMove('G5', 270, 390, 60, 0)
            this.arrowMove('G6', 330, 390, 60, 0)
            this.arrowMove('G7', 390, 390, 60, 0)
            this.arrowMove('G8', 450, 390, 60, 0)
            this.arrowMove('G9', 510, 390, 60, 0)
            this.arrowMove('G10', 570, 390, 60, 0)
            this.arrowMove('G11', 630, 390, 60, 0)
            this.arrowMove('G12', 690, 390, 60, 0)
            this.arrowMove('G13', 750, 390, 60, 0)
            this.arrowMove('G14', 810, 390, 60, 0)
            this.arrowMove('G15', 870, 390, 60, 0)
            this.arrowMove('H1', 30, 450, 60, 0)
            this.arrowMove('H2', 90, 450, 60, 0)
            this.arrowMove('H3', 150, 450, 60, 0)
            this.arrowMove('H4', 210, 450, 60, 0)
            this.arrowMove('H5', 270, 450, 60, 0)
            this.arrowMove('H6', 330, 450, 60, 0)
            this.arrowMove('H7', 390, 450, 60, 0)
            this.arrowMove('H8', 450, 450, 60, 0)
            this.arrowMove('H9', 510, 450, 60, 0)
            this.arrowMove('H10', 570, 450, 60, 0)
            this.arrowMove('H11', 630, 450, 60, 0)
            this.arrowMove('H12', 690, 450, 60, 0)
            this.arrowMove('H13', 750, 450, 60, 0)
            this.arrowMove('H14', 810, 450, 60, 0)
            this.arrowMove('H15', 870, 450, 60, 0)
            this.arrowMove('I2', 90, 510, 60, 0)
            this.arrowMove('I3', 150, 510, 60, 0)
            this.arrowMove('I4', 210, 510, 60, 0)
            this.arrowMove('I5', 270, 510, 60, 0)
            this.arrowMove('I6', 330, 510, 60, 0)
            this.arrowMove('I7', 390, 510, 60, 0)
            this.arrowMove('I8', 450, 510, 60, 0)
            this.arrowMove('I9', 510, 510, 60, 0)
            this.arrowMove('I10', 570, 510, 60, 0)
            this.arrowMove('I11', 630, 510, 60, 0)
            this.arrowMove('I12', 690, 510, 60, 0)
            this.arrowMove('I13', 750, 510, 60, 0)
            this.arrowMove('I14', 810, 510, 60, 0)
            this.arrowMove('I15', 870, 510, 60, 0)
            }
            this.wagon.setTexture("WagonR")
            this.moveUpdate()
        })

        this.add.image(360, 590, "ArrowDR")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.y += 120
            this.wagon.x += 120
            this.arrowMove('A1', 30, 30, 120, -120)
            this.arrowMove('A2', 90, 30, 120, -120)
            this.arrowMove('A3', 150, 30, 120, -120)
            this.arrowMove('A4', 210, 30, 120, -120)
            this.arrowMove('A5', 270, 30, 120, -120)
            this.arrowMove('A6', 330, 30, 120, -120)
            this.arrowMove('A7', 390, 30, 120, -120)
            this.arrowMove('A8', 450, 30, 120, -120)
            this.arrowMove('A9', 510, 30, 120, -120)
            this.arrowMove('A10', 570, 30, 120, -120)
            this.arrowMove('A11', 630, 30, 120, -120)
            this.arrowMove('A12', 690, 30, 120, -120)
            this.arrowMove('A13', 750, 30, 120, -120)
            this.arrowMove('A14', 810, 30, 120, -120)
            this.arrowMove('B1', 30, 90, 120, -120)
            this.arrowMove('B2', 90, 90, 120, -120)
            this.arrowMove('B3', 150, 90, 120, -120)
            this.arrowMove('B4', 210, 90, 120, -120)
            this.arrowMove('B5', 270, 90, 120, -120)
            this.arrowMove('B6', 330, 90, 120, -120)
            this.arrowMove('B7', 390, 90, 120, -120)
            this.arrowMove('B8', 450, 90, 120, -120)
            this.arrowMove('B9', 510, 90, 120, -120)
            this.arrowMove('B10', 570, 90, 120, -120)
            this.arrowMove('B11', 630, 90, 120, -120)
            this.arrowMove('B12', 690, 90, 120, -120)
            this.arrowMove('B13', 750, 90, 120, -120)
            this.arrowMove('B14', 810, 90, 120, -120)
            this.arrowMove('B15', 870, 90, 120, -120)
            this.arrowMove('C1', 30, 150, 120, -120)
            this.arrowMove('C2', 90, 150, 120, -120)
            this.arrowMove('C3', 150, 150, 120, -120)
            this.arrowMove('C4', 210, 150, 120, -120)
            this.arrowMove('C5', 270, 150, 120, -120)
            this.arrowMove('C6', 330, 150, 120, -120)
            this.arrowMove('C7', 390, 150, 120, -120)
            this.arrowMove('C8', 450, 150, 120, -120)
            this.arrowMove('C9', 510, 150, 120, -120)
            this.arrowMove('C10', 570, 150, 120, -120)
            this.arrowMove('C11', 630, 150, 120, -120)
            this.arrowMove('C12', 690, 150, 120, -120)
            this.arrowMove('C13', 750, 150, 120, -120)
            this.arrowMove('C14', 810, 150, 120, -120)
            this.arrowMove('C15', 870, 150, 120, -120)
            this.arrowMove('D1', 30, 210, 120, -120)
            this.arrowMove('D2', 90, 210, 120, -120)
            this.arrowMove('D3', 150, 210, 120, -120)
            this.arrowMove('D4', 210, 210, 120, -120)
            this.arrowMove('D5', 270, 210, 120, -120)
            this.arrowMove('D6', 330, 210, 120, -120)
            this.arrowMove('D7', 390, 210, 120, -120)
            this.arrowMove('D8', 450, 210, 120, -120)
            this.arrowMove('D9', 510, 210, 120, -120)
            this.arrowMove('D10', 570, 210, 120, -120)
            this.arrowMove('D11', 630, 210, 120, -120)
            this.arrowMove('D12', 690, 210, 120, -120)
            this.arrowMove('D13', 750, 210, 120, -120)
            this.arrowMove('D14', 810, 210, 120, -120)
            this.arrowMove('D15', 870, 210, 120, -120)
            this.arrowMove('E1', 30, 270, 120, -120)
            this.arrowMove('E2', 90, 270, 120, -120)
            this.arrowMove('E3', 150, 270, 120, -120)
            this.arrowMove('E4', 210, 270, 120, -120)
            this.arrowMove('E5', 270, 270, 120, -120)
            this.arrowMove('E6', 330, 270, 120, -120)
            this.arrowMove('E7', 390, 270, 120, -120)
            this.arrowMove('E8', 450, 270, 120, -120)
            this.arrowMove('E9', 510, 270, 120, -120)
            this.arrowMove('E10', 570, 270, 120, -120)
            this.arrowMove('E11', 630, 270, 120, -120)
            this.arrowMove('E12', 690, 270, 120, -120)
            this.arrowMove('E13', 750, 270, 120, -120)
            this.arrowMove('E14', 810, 270, 120, -120)
            this.arrowMove('E15', 870, 270, 120, -120)
            this.arrowMove('F1', 30, 330, 120, -120)
            this.arrowMove('F2', 90, 330, 120, -120)
            this.arrowMove('F3', 150, 330, 120, -120)
            this.arrowMove('F4', 210, 330, 120, -120)
            this.arrowMove('F5', 270, 330, 120, -120)
            this.arrowMove('F6', 330, 330, 120, -120)
            this.arrowMove('F7', 390, 330, 120, -120)
            this.arrowMove('F8', 450, 330, 120, -120)
            this.arrowMove('F9', 510, 330, 120, -120)
            this.arrowMove('F10', 570, 330, 120, -120)
            this.arrowMove('F11', 630, 330, 120, -120)
            this.arrowMove('F12', 690, 330, 120, -120)
            this.arrowMove('F13', 750, 330, 120, -120)
            this.arrowMove('F14', 810, 330, 120, -120)
            this.arrowMove('F15', 870, 330, 120, -120)
            this.arrowMove('G1', 30, 390, 120, -120)
            this.arrowMove('G2', 90, 390, 120, -120)
            this.arrowMove('G3', 150, 390, 120, -120)
            this.arrowMove('G4', 210, 390, 120, -120)
            this.arrowMove('G5', 270, 390, 120, -120)
            this.arrowMove('G6', 330, 390, 120, -120)
            this.arrowMove('G7', 390, 390, 120, -120)
            this.arrowMove('G8', 450, 390, 120, -120)
            this.arrowMove('G9', 510, 390, 120, -120)
            this.arrowMove('G10', 570, 390, 120, -120)
            this.arrowMove('G11', 630, 390, 120, -120)
            this.arrowMove('G12', 690, 390, 120, -120)
            this.arrowMove('G13', 750, 390, 120, -120)
            this.arrowMove('G14', 810, 390, 120, -120)
            this.arrowMove('G15', 870, 390, 120, -120)
            this.arrowMove('H1', 30, 450, 120, -120)
            this.arrowMove('H2', 90, 450, 120, -120)
            this.arrowMove('H3', 150, 450, 120, -120)
            this.arrowMove('H4', 210, 450, 120, -120)
            this.arrowMove('H5', 270, 450, 120, -120)
            this.arrowMove('H6', 330, 450, 120, -120)
            this.arrowMove('H7', 390, 450, 120, -120)
            this.arrowMove('H8', 450, 450, 120, -120)
            this.arrowMove('H9', 510, 450, 120, -120)
            this.arrowMove('H10', 570, 450, 120, -120)
            this.arrowMove('H11', 630, 450, 120, -120)
            this.arrowMove('H12', 690, 450, 120, -120)
            this.arrowMove('H13', 750, 450, 120, -120)
            this.arrowMove('H14', 810, 450, 120, -120)
            this.arrowMove('H15', 870, 450, 120, -120)
            this.arrowMove('I2', 90, 510, 120, -120)
            this.arrowMove('I3', 150, 510, 120, -120)
            this.arrowMove('I4', 210, 510, 120, -120)
            this.arrowMove('I5', 270, 510, 120, -120)
            this.arrowMove('I6', 330, 510, 120, -120)
            this.arrowMove('I7', 390, 510, 120, -120)
            this.arrowMove('I8', 450, 510, 120, -120)
            this.arrowMove('I9', 510, 510, 120, -120)
            this.arrowMove('I10', 570, 510, 120, -120)
            this.arrowMove('I11', 630, 510, 120, -120)
            this.arrowMove('I12', 690, 510, 120, -120)
            this.arrowMove('I13', 750, 510, 120, -120)
            this.arrowMove('I14', 810, 510, 120, -120)
            this.arrowMove('I15', 870, 510, 120, -120)
            }
            else {
            this.wagon.y += 60
            this.wagon.x += 60
            this.arrowMove('A1', 30, 30, 60, -60)
            this.arrowMove('A2', 90, 30, 60, -60)
            this.arrowMove('A3', 150, 30, 60, -60)
            this.arrowMove('A4', 210, 30, 60, -60)
            this.arrowMove('A5', 270, 30, 60, -60)
            this.arrowMove('A6', 330, 30, 60, -60)
            this.arrowMove('A7', 390, 30, 60, -60)
            this.arrowMove('A8', 450, 30, 60, -60)
            this.arrowMove('A9', 510, 30, 60, -60)
            this.arrowMove('A10', 570, 30, 60, -60)
            this.arrowMove('A11', 630, 30, 60, -60)
            this.arrowMove('A12', 690, 30, 60, -60)
            this.arrowMove('A13', 750, 30, 60, -60)
            this.arrowMove('A14', 810, 30, 60, -60)
            this.arrowMove('B1', 30, 90, 60, -60)
            this.arrowMove('B2', 90, 90, 60, -60)
            this.arrowMove('B3', 150, 90, 60, -60)
            this.arrowMove('B4', 210, 90, 60, -60)
            this.arrowMove('B5', 270, 90, 60, -60)
            this.arrowMove('B6', 330, 90, 60, -60)
            this.arrowMove('B7', 390, 90, 60, -60)
            this.arrowMove('B8', 450, 90, 60, -60)
            this.arrowMove('B9', 510, 90, 60, -60)
            this.arrowMove('B10', 570, 90, 60, -60)
            this.arrowMove('B11', 630, 90, 60, -60)
            this.arrowMove('B12', 690, 90, 60, -60)
            this.arrowMove('B13', 750, 90, 60, -60)
            this.arrowMove('B14', 810, 90, 60, -60)
            this.arrowMove('B15', 870, 90, 60, -60)
            this.arrowMove('C1', 30, 150, 60, -60)
            this.arrowMove('C2', 90, 150, 60, -60)
            this.arrowMove('C3', 150, 150, 60, -60)
            this.arrowMove('C4', 210, 150, 60, -60)
            this.arrowMove('C5', 270, 150, 60, -60)
            this.arrowMove('C6', 330, 150, 60, -60)
            this.arrowMove('C7', 390, 150, 60, -60)
            this.arrowMove('C8', 450, 150, 60, -60)
            this.arrowMove('C9', 510, 150, 60, -60)
            this.arrowMove('C10', 570, 150, 60, -60)
            this.arrowMove('C11', 630, 150, 60, -60)
            this.arrowMove('C12', 690, 150, 60, -60)
            this.arrowMove('C13', 750, 150, 60, -60)
            this.arrowMove('C14', 810, 150, 60, -60)
            this.arrowMove('C15', 870, 150, 60, -60)
            this.arrowMove('D1', 30, 210, 60, -60)
            this.arrowMove('D2', 90, 210, 60, -60)
            this.arrowMove('D3', 150, 210, 60, -60)
            this.arrowMove('D4', 210, 210, 60, -60)
            this.arrowMove('D5', 270, 210, 60, -60)
            this.arrowMove('D6', 330, 210, 60, -60)
            this.arrowMove('D7', 390, 210, 60, -60)
            this.arrowMove('D8', 450, 210, 60, -60)
            this.arrowMove('D9', 510, 210, 60, -60)
            this.arrowMove('D10', 570, 210, 60, -60)
            this.arrowMove('D11', 630, 210, 60, -60)
            this.arrowMove('D12', 690, 210, 60, -60)
            this.arrowMove('D13', 750, 210, 60, -60)
            this.arrowMove('D14', 810, 210, 60, -60)
            this.arrowMove('D15', 870, 210, 60, -60)
            this.arrowMove('E1', 30, 270, 60, -60)
            this.arrowMove('E2', 90, 270, 60, -60)
            this.arrowMove('E3', 150, 270, 60, -60)
            this.arrowMove('E4', 210, 270, 60, -60)
            this.arrowMove('E5', 270, 270, 60, -60)
            this.arrowMove('E6', 330, 270, 60, -60)
            this.arrowMove('E7', 390, 270, 60, -60)
            this.arrowMove('E8', 450, 270, 60, -60)
            this.arrowMove('E9', 510, 270, 60, -60)
            this.arrowMove('E10', 570, 270, 60, -60)
            this.arrowMove('E11', 630, 270, 60, -60)
            this.arrowMove('E12', 690, 270, 60, -60)
            this.arrowMove('E13', 750, 270, 60, -60)
            this.arrowMove('E14', 810, 270, 60, -60)
            this.arrowMove('E15', 870, 270, 60, -60)
            this.arrowMove('F1', 30, 330, 60, -60)
            this.arrowMove('F2', 90, 330, 60, -60)
            this.arrowMove('F3', 150, 330, 60, -60)
            this.arrowMove('F4', 210, 330, 60, -60)
            this.arrowMove('F5', 270, 330, 60, -60)
            this.arrowMove('F6', 330, 330, 60, -60)
            this.arrowMove('F7', 390, 330, 60, -60)
            this.arrowMove('F8', 450, 330, 60, -60)
            this.arrowMove('F9', 510, 330, 60, -60)
            this.arrowMove('F10', 570, 330, 60, -60)
            this.arrowMove('F11', 630, 330, 60, -60)
            this.arrowMove('F12', 690, 330, 60, -60)
            this.arrowMove('F13', 750, 330, 60, -60)
            this.arrowMove('F14', 810, 330, 60, -60)
            this.arrowMove('F15', 870, 330, 60, -60)
            this.arrowMove('G1', 30, 390, 60, -60)
            this.arrowMove('G2', 90, 390, 60, -60)
            this.arrowMove('G3', 150, 390, 60, -60)
            this.arrowMove('G4', 210, 390, 60, -60)
            this.arrowMove('G5', 270, 390, 60, -60)
            this.arrowMove('G6', 330, 390, 60, -60)
            this.arrowMove('G7', 390, 390, 60, -60)
            this.arrowMove('G8', 450, 390, 60, -60)
            this.arrowMove('G9', 510, 390, 60, -60)
            this.arrowMove('G10', 570, 390, 60, -60)
            this.arrowMove('G11', 630, 390, 60, -60)
            this.arrowMove('G12', 690, 390, 60, -60)
            this.arrowMove('G13', 750, 390, 60, -60)
            this.arrowMove('G14', 810, 390, 60, -60)
            this.arrowMove('G15', 870, 390, 60, -60)
            this.arrowMove('H1', 30, 450, 60, -60)
            this.arrowMove('H2', 90, 450, 60, -60)
            this.arrowMove('H3', 150, 450, 60, -60)
            this.arrowMove('H4', 210, 450, 60, -60)
            this.arrowMove('H5', 270, 450, 60, -60)
            this.arrowMove('H6', 330, 450, 60, -60)
            this.arrowMove('H7', 390, 450, 60, -60)
            this.arrowMove('H8', 450, 450, 60, -60)
            this.arrowMove('H9', 510, 450, 60, -60)
            this.arrowMove('H10', 570, 450, 60, -60)
            this.arrowMove('H11', 630, 450, 60, -60)
            this.arrowMove('H12', 690, 450, 60, -60)
            this.arrowMove('H13', 750, 450, 60, -60)
            this.arrowMove('H14', 810, 450, 60, -60)
            this.arrowMove('H15', 870, 450, 60, -60)
            this.arrowMove('I2', 90, 510, 60, -60)
            this.arrowMove('I3', 150, 510, 60, -60)
            this.arrowMove('I4', 210, 510, 60, -60)
            this.arrowMove('I5', 270, 510, 60, -60)
            this.arrowMove('I6', 330, 510, 60, -60)
            this.arrowMove('I7', 390, 510, 60, -60)
            this.arrowMove('I8', 450, 510, 60, -60)
            this.arrowMove('I9', 510, 510, 60, -60)
            this.arrowMove('I10', 570, 510, 60, -60)
            this.arrowMove('I11', 630, 510, 60, -60)
            this.arrowMove('I12', 690, 510, 60, -60)
            this.arrowMove('I13', 750, 510, 60, -60)
            this.arrowMove('I14', 810, 510, 60, -60)
            this.arrowMove('I15', 870, 510, 60, -60)
            }
            this.wagon.setTexture("WagonDR")
            this.moveUpdate()
        })

        this.add.image(457, 590, "ArrowD")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.y += 120
            this.arrowMove('A1', 30, 30, 0, -120)
            this.arrowMove('A2', 90, 30, 0, -120)
            this.arrowMove('A3', 150, 30, 0, -120)
            this.arrowMove('A4', 210, 30, 0, -120)
            this.arrowMove('A5', 270, 30, 0, -120)
            this.arrowMove('A6', 330, 30, 0, -120)
            this.arrowMove('A7', 390, 30, 0, -120)
            this.arrowMove('A8', 450, 30, 0, -120)
            this.arrowMove('A9', 510, 30, 0, -120)
            this.arrowMove('A10', 570, 30, 0, -120)
            this.arrowMove('A11', 630, 30, 0, -120)
            this.arrowMove('A12', 690, 30, 0, -120)
            this.arrowMove('A13', 750, 30, 0, -120)
            this.arrowMove('A14', 810, 30, 0, -120)
            this.arrowMove('B1', 30, 90, 0, -120)
            this.arrowMove('B2', 90, 90, 0, -120)
            this.arrowMove('B3', 150, 90, 0, -120)
            this.arrowMove('B4', 210, 90, 0, -120)
            this.arrowMove('B5', 270, 90, 0, -120)
            this.arrowMove('B6', 330, 90, 0, -120)
            this.arrowMove('B7', 390, 90, 0, -120)
            this.arrowMove('B8', 450, 90, 0, -120)
            this.arrowMove('B9', 510, 90, 0, -120)
            this.arrowMove('B10', 570, 90, 0, -120)
            this.arrowMove('B11', 630, 90, 0, -120)
            this.arrowMove('B12', 690, 90, 0, -120)
            this.arrowMove('B13', 750, 90, 0, -120)
            this.arrowMove('B14', 810, 90, 0, -120)
            this.arrowMove('B15', 870, 90, 0, -120)
            this.arrowMove('C1', 30, 150, 0, -120)
            this.arrowMove('C2', 90, 150, 0, -120)
            this.arrowMove('C3', 150, 150, 0, -120)
            this.arrowMove('C4', 210, 150, 0, -120)
            this.arrowMove('C5', 270, 150, 0, -120)
            this.arrowMove('C6', 330, 150, 0, -120)
            this.arrowMove('C7', 390, 150, 0, -120)
            this.arrowMove('C8', 450, 150, 0, -120)
            this.arrowMove('C9', 510, 150, 0, -120)
            this.arrowMove('C10', 570, 150, 0, -120)
            this.arrowMove('C11', 630, 150, 0, -120)
            this.arrowMove('C12', 690, 150, 0, -120)
            this.arrowMove('C13', 750, 150, 0, -120)
            this.arrowMove('C14', 810, 150, 0, -120)
            this.arrowMove('C15', 870, 150, 0, -120)
            this.arrowMove('D1', 30, 210, 0, -120)
            this.arrowMove('D2', 90, 210, 0, -120)
            this.arrowMove('D3', 150, 210, 0, -120)
            this.arrowMove('D4', 210, 210, 0, -120)
            this.arrowMove('D5', 270, 210, 0, -120)
            this.arrowMove('D6', 330, 210, 0, -120)
            this.arrowMove('D7', 390, 210, 0, -120)
            this.arrowMove('D8', 450, 210, 0, -120)
            this.arrowMove('D9', 510, 210, 0, -120)
            this.arrowMove('D10', 570, 210, 0, -120)
            this.arrowMove('D11', 630, 210, 0, -120)
            this.arrowMove('D12', 690, 210, 0, -120)
            this.arrowMove('D13', 750, 210, 0, -120)
            this.arrowMove('D14', 810, 210, 0, -120)
            this.arrowMove('D15', 870, 210, 0, -120)
            this.arrowMove('E1', 30, 270, 0, -120)
            this.arrowMove('E2', 90, 270, 0, -120)
            this.arrowMove('E3', 150, 270, 0, -120)
            this.arrowMove('E4', 210, 270, 0, -120)
            this.arrowMove('E5', 270, 270, 0, -120)
            this.arrowMove('E6', 330, 270, 0, -120)
            this.arrowMove('E7', 390, 270, 0, -120)
            this.arrowMove('E8', 450, 270, 0, -120)
            this.arrowMove('E9', 510, 270, 0, -120)
            this.arrowMove('E10', 570, 270, 0, -120)
            this.arrowMove('E11', 630, 270, 0, -120)
            this.arrowMove('E12', 690, 270, 0, -120)
            this.arrowMove('E13', 750, 270, 0, -120)
            this.arrowMove('E14', 810, 270, 0, -120)
            this.arrowMove('E15', 870, 270, 0, -120)
            this.arrowMove('F1', 30, 330, 0, -120)
            this.arrowMove('F2', 90, 330, 0, -120)
            this.arrowMove('F3', 150, 330, 0, -120)
            this.arrowMove('F4', 210, 330, 0, -120)
            this.arrowMove('F5', 270, 330, 0, -120)
            this.arrowMove('F6', 330, 330, 0, -120)
            this.arrowMove('F7', 390, 330, 0, -120)
            this.arrowMove('F8', 450, 330, 0, -120)
            this.arrowMove('F9', 510, 330, 0, -120)
            this.arrowMove('F10', 570, 330, 0, -120)
            this.arrowMove('F11', 630, 330, 0, -120)
            this.arrowMove('F12', 690, 330, 0, -120)
            this.arrowMove('F13', 750, 330, 0, -120)
            this.arrowMove('F14', 810, 330, 0, -120)
            this.arrowMove('F15', 870, 330, 0, -120)
            this.arrowMove('G1', 30, 390, 0, -120)
            this.arrowMove('G2', 90, 390, 0, -120)
            this.arrowMove('G3', 150, 390, 0, -120)
            this.arrowMove('G4', 210, 390, 0, -120)
            this.arrowMove('G5', 270, 390, 0, -120)
            this.arrowMove('G6', 330, 390, 0, -120)
            this.arrowMove('G7', 390, 390, 0, -120)
            this.arrowMove('G8', 450, 390, 0, -120)
            this.arrowMove('G9', 510, 390, 0, -120)
            this.arrowMove('G10', 570, 390, 0, -120)
            this.arrowMove('G11', 630, 390, 0, -120)
            this.arrowMove('G12', 690, 390, 0, -120)
            this.arrowMove('G13', 750, 390, 0, -120)
            this.arrowMove('G14', 810, 390, 0, -120)
            this.arrowMove('G15', 870, 390, 0, -120)
            this.arrowMove('H1', 30, 450, 0, -120)
            this.arrowMove('H2', 90, 450, 0, -120)
            this.arrowMove('H3', 150, 450, 0, -120)
            this.arrowMove('H4', 210, 450, 0, -120)
            this.arrowMove('H5', 270, 450, 0, -120)
            this.arrowMove('H6', 330, 450, 0, -120)
            this.arrowMove('H7', 390, 450, 0, -120)
            this.arrowMove('H8', 450, 450, 0, -120)
            this.arrowMove('H9', 510, 450, 0, -120)
            this.arrowMove('H10', 570, 450, 0, -120)
            this.arrowMove('H11', 630, 450, 0, -120)
            this.arrowMove('H12', 690, 450, 0, -120)
            this.arrowMove('H13', 750, 450, 0, -120)
            this.arrowMove('H14', 810, 450, 0, -120)
            this.arrowMove('H15', 870, 450, 0, -120)
            this.arrowMove('I2', 90, 510, 0, -120)
            this.arrowMove('I3', 150, 510, 0, -120)
            this.arrowMove('I4', 210, 510, 0, -120)
            this.arrowMove('I5', 270, 510, 0, -120)
            this.arrowMove('I6', 330, 510, 0, -120)
            this.arrowMove('I7', 390, 510, 0, -120)
            this.arrowMove('I8', 450, 510, 0, -120)
            this.arrowMove('I9', 510, 510, 0, -120)
            this.arrowMove('I10', 570, 510, 0, -120)
            this.arrowMove('I11', 630, 510, 0, -120)
            this.arrowMove('I12', 690, 510, 0, -120)
            this.arrowMove('I13', 750, 510, 0, -120)
            this.arrowMove('I14', 810, 510, 0, -120)
            this.arrowMove('I15', 870, 510, 0, -120)
            }
            else {
            this.wagon.y += 60
            this.arrowMove('A1', 30, 30, 0, -60)
            this.arrowMove('A2', 90, 30, 0, -60)
            this.arrowMove('A3', 150, 30, 0, -60)
            this.arrowMove('A4', 210, 30, 0, -60)
            this.arrowMove('A5', 270, 30, 0, -60)
            this.arrowMove('A6', 330, 30, 0, -60)
            this.arrowMove('A7', 390, 30, 0, -60)
            this.arrowMove('A8', 450, 30, 0, -60)
            this.arrowMove('A9', 510, 30, 0, -60)
            this.arrowMove('A10', 570, 30, 0, -60)
            this.arrowMove('A11', 630, 30, 0, -60)
            this.arrowMove('A12', 690, 30, 0, -60)
            this.arrowMove('A13', 750, 30, 0, -60)
            this.arrowMove('A14', 810, 30, 0, -60)
            this.arrowMove('B1', 30, 90, 0, -60)
            this.arrowMove('B2', 90, 90, 0, -60)
            this.arrowMove('B3', 150, 90, 0, -60)
            this.arrowMove('B4', 210, 90, 0, -60)
            this.arrowMove('B5', 270, 90, 0, -60)
            this.arrowMove('B6', 330, 90, 0, -60)
            this.arrowMove('B7', 390, 90, 0, -60)
            this.arrowMove('B8', 450, 90, 0, -60)
            this.arrowMove('B9', 510, 90, 0, -60)
            this.arrowMove('B10', 570, 90, 0, -60)
            this.arrowMove('B11', 630, 90, 0, -60)
            this.arrowMove('B12', 690, 90, 0, -60)
            this.arrowMove('B13', 750, 90, 0, -60)
            this.arrowMove('B14', 810, 90, 0, -60)
            this.arrowMove('B15', 870, 90, 0, -60)
            this.arrowMove('C1', 30, 150, 0, -60)
            this.arrowMove('C2', 90, 150, 0, -60)
            this.arrowMove('C3', 150, 150, 0, -60)
            this.arrowMove('C4', 210, 150, 0, -60)
            this.arrowMove('C5', 270, 150, 0, -60)
            this.arrowMove('C6', 330, 150, 0, -60)
            this.arrowMove('C7', 390, 150, 0, -60)
            this.arrowMove('C8', 450, 150, 0, -60)
            this.arrowMove('C9', 510, 150, 0, -60)
            this.arrowMove('C10', 570, 150, 0, -60)
            this.arrowMove('C11', 630, 150, 0, -60)
            this.arrowMove('C12', 690, 150, 0, -60)
            this.arrowMove('C13', 750, 150, 0, -60)
            this.arrowMove('C14', 810, 150, 0, -60)
            this.arrowMove('C15', 870, 150, 0, -60)
            this.arrowMove('D1', 30, 210, 0, -60)
            this.arrowMove('D2', 90, 210, 0, -60)
            this.arrowMove('D3', 150, 210, 0, -60)
            this.arrowMove('D4', 210, 210, 0, -60)
            this.arrowMove('D5', 270, 210, 0, -60)
            this.arrowMove('D6', 330, 210, 0, -60)
            this.arrowMove('D7', 390, 210, 0, -60)
            this.arrowMove('D8', 450, 210, 0, -60)
            this.arrowMove('D9', 510, 210, 0, -60)
            this.arrowMove('D10', 570, 210, 0, -60)
            this.arrowMove('D11', 630, 210, 0, -60)
            this.arrowMove('D12', 690, 210, 0, -60)
            this.arrowMove('D13', 750, 210, 0, -60)
            this.arrowMove('D14', 810, 210, 0, -60)
            this.arrowMove('D15', 870, 210, 0, -60)
            this.arrowMove('E1', 30, 270, 0, -60)
            this.arrowMove('E2', 90, 270, 0, -60)
            this.arrowMove('E3', 150, 270, 0, -60)
            this.arrowMove('E4', 210, 270, 0, -60)
            this.arrowMove('E5', 270, 270, 0, -60)
            this.arrowMove('E6', 330, 270, 0, -60)
            this.arrowMove('E7', 390, 270, 0, -60)
            this.arrowMove('E8', 450, 270, 0, -60)
            this.arrowMove('E9', 510, 270, 0, -60)
            this.arrowMove('E10', 570, 270, 0, -60)
            this.arrowMove('E11', 630, 270, 0, -60)
            this.arrowMove('E12', 690, 270, 0, -60)
            this.arrowMove('E13', 750, 270, 0, -60)
            this.arrowMove('E14', 810, 270, 0, -60)
            this.arrowMove('E15', 870, 270, 0, -60)
            this.arrowMove('F1', 30, 330, 0, -60)
            this.arrowMove('F2', 90, 330, 0, -60)
            this.arrowMove('F3', 150, 330, 0, -60)
            this.arrowMove('F4', 210, 330, 0, -60)
            this.arrowMove('F5', 270, 330, 0, -60)
            this.arrowMove('F6', 330, 330, 0, -60)
            this.arrowMove('F7', 390, 330, 0, -60)
            this.arrowMove('F8', 450, 330, 0, -60)
            this.arrowMove('F9', 510, 330, 0, -60)
            this.arrowMove('F10', 570, 330, 0, -60)
            this.arrowMove('F11', 630, 330, 0, -60)
            this.arrowMove('F12', 690, 330, 0, -60)
            this.arrowMove('F13', 750, 330, 0, -60)
            this.arrowMove('F14', 810, 330, 0, -60)
            this.arrowMove('F15', 870, 330, 0, -60)
            this.arrowMove('G1', 30, 390, 0, -60)
            this.arrowMove('G2', 90, 390, 0, -60)
            this.arrowMove('G3', 150, 390, 0, -60)
            this.arrowMove('G4', 210, 390, 0, -60)
            this.arrowMove('G5', 270, 390, 0, -60)
            this.arrowMove('G6', 330, 390, 0, -60)
            this.arrowMove('G7', 390, 390, 0, -60)
            this.arrowMove('G8', 450, 390, 0, -60)
            this.arrowMove('G9', 510, 390, 0, -60)
            this.arrowMove('G10', 570, 390, 0, -60)
            this.arrowMove('G11', 630, 390, 0, -60)
            this.arrowMove('G12', 690, 390, 0, -60)
            this.arrowMove('G13', 750, 390, 0, -60)
            this.arrowMove('G14', 810, 390, 0, -60)
            this.arrowMove('G15', 870, 390, 0, -60)
            this.arrowMove('H1', 30, 450, 0, -60)
            this.arrowMove('H2', 90, 450, 0, -60)
            this.arrowMove('H3', 150, 450, 0, -60)
            this.arrowMove('H4', 210, 450, 0, -60)
            this.arrowMove('H5', 270, 450, 0, -60)
            this.arrowMove('H6', 330, 450, 0, -60)
            this.arrowMove('H7', 390, 450, 0, -60)
            this.arrowMove('H8', 450, 450, 0, -60)
            this.arrowMove('H9', 510, 450, 0, -60)
            this.arrowMove('H10', 570, 450, 0, -60)
            this.arrowMove('H11', 630, 450, 0, -60)
            this.arrowMove('H12', 690, 450, 0, -60)
            this.arrowMove('H13', 750, 450, 0, -60)
            this.arrowMove('H14', 810, 450, 0, -60)
            this.arrowMove('H15', 870, 450, 0, -60)
            this.arrowMove('I2', 90, 510, 0, -60)
            this.arrowMove('I3', 150, 510, 0, -60)
            this.arrowMove('I4', 210, 510, 0, -60)
            this.arrowMove('I5', 270, 510, 0, -60)
            this.arrowMove('I6', 330, 510, 0, -60)
            this.arrowMove('I7', 390, 510, 0, -60)
            this.arrowMove('I8', 450, 510, 0, -60)
            this.arrowMove('I9', 510, 510, 0, -60)
            this.arrowMove('I10', 570, 510, 0, -60)
            this.arrowMove('I11', 630, 510, 0, -60)
            this.arrowMove('I12', 690, 510, 0, -60)
            this.arrowMove('I13', 750, 510, 0, -60)
            this.arrowMove('I14', 810, 510, 0, -60)
            this.arrowMove('I15', 870, 510, 0, -60)
            }
            this.wagon.setTexture("WagonD")
            this.moveUpdate()
        })

        this.add.image(550, 590, "ArrowDL")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.y += 120
            this.wagon.x -= 120
            this.arrowMove('A1', 30, 30, -120, -120)
            this.arrowMove('A2', 90, 30, -120, -120)
            this.arrowMove('A3', 150, 30, -120, -120)
            this.arrowMove('A4', 210, 30, -120, -120)
            this.arrowMove('A5', 270, 30, -120, -120)
            this.arrowMove('A6', 330, 30, -120, -120)
            this.arrowMove('A7', 390, 30, -120, -120)
            this.arrowMove('A8', 450, 30, -120, -120)
            this.arrowMove('A9', 510, 30, -120, -120)
            this.arrowMove('A10', 570, 30, -120, -120)
            this.arrowMove('A11', 630, 30, -120, -120)
            this.arrowMove('A12', 690, 30, -120, -120)
            this.arrowMove('A13', 750, 30, -120, -120)
            this.arrowMove('A14', 810, 30, -120, -120)
            this.arrowMove('B1', 30, 90, -120, -120)
            this.arrowMove('B2', 90, 90, -120, -120)
            this.arrowMove('B3', 150, 90, -120, -120)
            this.arrowMove('B4', 210, 90, -120, -120)
            this.arrowMove('B5', 270, 90, -120, -120)
            this.arrowMove('B6', 330, 90, -120, -120)
            this.arrowMove('B7', 390, 90, -120, -120)
            this.arrowMove('B8', 450, 90, -120, -120)
            this.arrowMove('B9', 510, 90, -120, -120)
            this.arrowMove('B10', 570, 90, -120, -120)
            this.arrowMove('B11', 630, 90, -120, -120)
            this.arrowMove('B12', 690, 90, -120, -120)
            this.arrowMove('B13', 750, 90, -120, -120)
            this.arrowMove('B14', 810, 90, -120, -120)
            this.arrowMove('B15', 870, 90, -120, -120)
            this.arrowMove('C1', 30, 150, -120, -120)
            this.arrowMove('C2', 90, 150, -120, -120)
            this.arrowMove('C3', 150, 150, -120, -120)
            this.arrowMove('C4', 210, 150, -120, -120)
            this.arrowMove('C5', 270, 150, -120, -120)
            this.arrowMove('C6', 330, 150, -120, -120)
            this.arrowMove('C7', 390, 150, -120, -120)
            this.arrowMove('C8', 450, 150, -120, -120)
            this.arrowMove('C9', 510, 150, -120, -120)
            this.arrowMove('C10', 570, 150, -120, -120)
            this.arrowMove('C11', 630, 150, -120, -120)
            this.arrowMove('C12', 690, 150, -120, -120)
            this.arrowMove('C13', 750, 150, -120, -120)
            this.arrowMove('C14', 810, 150, -120, -120)
            this.arrowMove('C15', 870, 150, -120, -120)
            this.arrowMove('D1', 30, 210, -120, -120)
            this.arrowMove('D2', 90, 210, -120, -120)
            this.arrowMove('D3', 150, 210, -120, -120)
            this.arrowMove('D4', 210, 210, -120, -120)
            this.arrowMove('D5', 270, 210, -120, -120)
            this.arrowMove('D6', 330, 210, -120, -120)
            this.arrowMove('D7', 390, 210, -120, -120)
            this.arrowMove('D8', 450, 210, -120, -120)
            this.arrowMove('D9', 510, 210, -120, -120)
            this.arrowMove('D10', 570, 210, -120, -120)
            this.arrowMove('D11', 630, 210, -120, -120)
            this.arrowMove('D12', 690, 210, -120, -120)
            this.arrowMove('D13', 750, 210, -120, -120)
            this.arrowMove('D14', 810, 210, -120, -120)
            this.arrowMove('D15', 870, 210, -120, -120)
            this.arrowMove('E1', 30, 270, -120, -120)
            this.arrowMove('E2', 90, 270, -120, -120)
            this.arrowMove('E3', 150, 270, -120, -120)
            this.arrowMove('E4', 210, 270, -120, -120)
            this.arrowMove('E5', 270, 270, -120, -120)
            this.arrowMove('E6', 330, 270, -120, -120)
            this.arrowMove('E7', 390, 270, -120, -120)
            this.arrowMove('E8', 450, 270, -120, -120)
            this.arrowMove('E9', 510, 270, -120, -120)
            this.arrowMove('E10', 570, 270, -120, -120)
            this.arrowMove('E11', 630, 270, -120, -120)
            this.arrowMove('E12', 690, 270, -120, -120)
            this.arrowMove('E13', 750, 270, -120, -120)
            this.arrowMove('E14', 810, 270, -120, -120)
            this.arrowMove('E15', 870, 270, -120, -120)
            this.arrowMove('F1', 30, 330, -120, -120)
            this.arrowMove('F2', 90, 330, -120, -120)
            this.arrowMove('F3', 150, 330, -120, -120)
            this.arrowMove('F4', 210, 330, -120, -120)
            this.arrowMove('F5', 270, 330, -120, -120)
            this.arrowMove('F6', 330, 330, -120, -120)
            this.arrowMove('F7', 390, 330, -120, -120)
            this.arrowMove('F8', 450, 330, -120, -120)
            this.arrowMove('F9', 510, 330, -120, -120)
            this.arrowMove('F10', 570, 330, -120, -120)
            this.arrowMove('F11', 630, 330, -120, -120)
            this.arrowMove('F12', 690, 330, -120, -120)
            this.arrowMove('F13', 750, 330, -120, -120)
            this.arrowMove('F14', 810, 330, -120, -120)
            this.arrowMove('F15', 870, 330, -120, -120)
            this.arrowMove('G1', 30, 390, -120, -120)
            this.arrowMove('G2', 90, 390, -120, -120)
            this.arrowMove('G3', 150, 390, -120, -120)
            this.arrowMove('G4', 210, 390, -120, -120)
            this.arrowMove('G5', 270, 390, -120, -120)
            this.arrowMove('G6', 330, 390, -120, -120)
            this.arrowMove('G7', 390, 390, -120, -120)
            this.arrowMove('G8', 450, 390, -120, -120)
            this.arrowMove('G9', 510, 390, -120, -120)
            this.arrowMove('G10', 570, 390, -120, -120)
            this.arrowMove('G11', 630, 390, -120, -120)
            this.arrowMove('G12', 690, 390, -120, -120)
            this.arrowMove('G13', 750, 390, -120, -120)
            this.arrowMove('G14', 810, 390, -120, -120)
            this.arrowMove('G15', 870, 390, -120, -120)
            this.arrowMove('H1', 30, 450, -120, -120)
            this.arrowMove('H2', 90, 450, -120, -120)
            this.arrowMove('H3', 150, 450, -120, -120)
            this.arrowMove('H4', 210, 450, -120, -120)
            this.arrowMove('H5', 270, 450, -120, -120)
            this.arrowMove('H6', 330, 450, -120, -120)
            this.arrowMove('H7', 390, 450, -120, -120)
            this.arrowMove('H8', 450, 450, -120, -120)
            this.arrowMove('H9', 510, 450, -120, -120)
            this.arrowMove('H10', 570, 450, -120, -120)
            this.arrowMove('H11', 630, 450, -120, -120)
            this.arrowMove('H12', 690, 450, -120, -120)
            this.arrowMove('H13', 750, 450, -120, -120)
            this.arrowMove('H14', 810, 450, -120, -120)
            this.arrowMove('H15', 870, 450, -120, -120)
            this.arrowMove('I2', 90, 510, -120, -120)
            this.arrowMove('I3', 150, 510, -120, -120)
            this.arrowMove('I4', 210, 510, -120, -120)
            this.arrowMove('I5', 270, 510, -120, -120)
            this.arrowMove('I6', 330, 510, -120, -120)
            this.arrowMove('I7', 390, 510, -120, -120)
            this.arrowMove('I8', 450, 510, -120, -120)
            this.arrowMove('I9', 510, 510, -120, -120)
            this.arrowMove('I10', 570, 510, -120, -120)
            this.arrowMove('I11', 630, 510, -120, -120)
            this.arrowMove('I12', 690, 510, -120, -120)
            this.arrowMove('I13', 750, 510, -120, -120)
            this.arrowMove('I14', 810, 510, -120, -120)
            this.arrowMove('I15', 870, 510, -120, -120)
            }
            else {
            this.wagon.y += 60
            this.wagon.x -= 60
            this.arrowMove('A1', 30, 30, -60, -60)
            this.arrowMove('A2', 90, 30, -60, -60)
            this.arrowMove('A3', 150, 30, -60, -60)
            this.arrowMove('A4', 210, 30, -60, -60)
            this.arrowMove('A5', 270, 30, -60, -60)
            this.arrowMove('A6', 330, 30, -60, -60)
            this.arrowMove('A7', 390, 30, -60, -60)
            this.arrowMove('A8', 450, 30, -60, -60)
            this.arrowMove('A9', 510, 30, -60, -60)
            this.arrowMove('A10', 570, 30, -60, -60)
            this.arrowMove('A11', 630, 30, -60, -60)
            this.arrowMove('A12', 690, 30, -60, -60)
            this.arrowMove('A13', 750, 30, -60, -60)
            this.arrowMove('A14', 810, 30, -60, -60)
            this.arrowMove('B1', 30, 90, -60, -60)
            this.arrowMove('B2', 90, 90, -60, -60)
            this.arrowMove('B3', 150, 90, -60, -60)
            this.arrowMove('B4', 210, 90, -60, -60)
            this.arrowMove('B5', 270, 90, -60, -60)
            this.arrowMove('B6', 330, 90, -60, -60)
            this.arrowMove('B7', 390, 90, -60, -60)
            this.arrowMove('B8', 450, 90, -60, -60)
            this.arrowMove('B9', 510, 90, -60, -60)
            this.arrowMove('B10', 570, 90, -60, -60)
            this.arrowMove('B11', 630, 90, -60, -60)
            this.arrowMove('B12', 690, 90, -60, -60)
            this.arrowMove('B13', 750, 90, -60, -60)
            this.arrowMove('B14', 810, 90, -60, -60)
            this.arrowMove('B15', 870, 90, -60, -60)
            this.arrowMove('C1', 30, 150, -60, -60)
            this.arrowMove('C2', 90, 150, -60, -60)
            this.arrowMove('C3', 150, 150, -60, -60)
            this.arrowMove('C4', 210, 150, -60, -60)
            this.arrowMove('C5', 270, 150, -60, -60)
            this.arrowMove('C6', 330, 150, -60, -60)
            this.arrowMove('C7', 390, 150, -60, -60)
            this.arrowMove('C8', 450, 150, -60, -60)
            this.arrowMove('C9', 510, 150, -60, -60)
            this.arrowMove('C10', 570, 150, -60, -60)
            this.arrowMove('C11', 630, 150, -60, -60)
            this.arrowMove('C12', 690, 150, -60, -60)
            this.arrowMove('C13', 750, 150, -60, -60)
            this.arrowMove('C14', 810, 150, -60, -60)
            this.arrowMove('C15', 870, 150, -60, -60)
            this.arrowMove('D1', 30, 210, -60, -60)
            this.arrowMove('D2', 90, 210, -60, -60)
            this.arrowMove('D3', 150, 210, -60, -60)
            this.arrowMove('D4', 210, 210, -60, -60)
            this.arrowMove('D5', 270, 210, -60, -60)
            this.arrowMove('D6', 330, 210, -60, -60)
            this.arrowMove('D7', 390, 210, -60, -60)
            this.arrowMove('D8', 450, 210, -60, -60)
            this.arrowMove('D9', 510, 210, -60, -60)
            this.arrowMove('D10', 570, 210, -60, -60)
            this.arrowMove('D11', 630, 210, -60, -60)
            this.arrowMove('D12', 690, 210, -60, -60)
            this.arrowMove('D13', 750, 210, -60, -60)
            this.arrowMove('D14', 810, 210, -60, -60)
            this.arrowMove('D15', 870, 210, -60, -60)
            this.arrowMove('E1', 30, 270, -60, -60)
            this.arrowMove('E2', 90, 270, -60, -60)
            this.arrowMove('E3', 150, 270, -60, -60)
            this.arrowMove('E4', 210, 270, -60, -60)
            this.arrowMove('E5', 270, 270, -60, -60)
            this.arrowMove('E6', 330, 270, -60, -60)
            this.arrowMove('E7', 390, 270, -60, -60)
            this.arrowMove('E8', 450, 270, -60, -60)
            this.arrowMove('E9', 510, 270, -60, -60)
            this.arrowMove('E10', 570, 270, -60, -60)
            this.arrowMove('E11', 630, 270, -60, -60)
            this.arrowMove('E12', 690, 270, -60, -60)
            this.arrowMove('E13', 750, 270, -60, -60)
            this.arrowMove('E14', 810, 270, -60, -60)
            this.arrowMove('E15', 870, 270, -60, -60)
            this.arrowMove('F1', 30, 330, -60, -60)
            this.arrowMove('F2', 90, 330, -60, -60)
            this.arrowMove('F3', 150, 330, -60, -60)
            this.arrowMove('F4', 210, 330, -60, -60)
            this.arrowMove('F5', 270, 330, -60, -60)
            this.arrowMove('F6', 330, 330, -60, -60)
            this.arrowMove('F7', 390, 330, -60, -60)
            this.arrowMove('F8', 450, 330, -60, -60)
            this.arrowMove('F9', 510, 330, -60, -60)
            this.arrowMove('F10', 570, 330, -60, -60)
            this.arrowMove('F11', 630, 330, -60, -60)
            this.arrowMove('F12', 690, 330, -60, -60)
            this.arrowMove('F13', 750, 330, -60, -60)
            this.arrowMove('F14', 810, 330, -60, -60)
            this.arrowMove('F15', 870, 330, -60, -60)
            this.arrowMove('G1', 30, 390, -60, -60)
            this.arrowMove('G2', 90, 390, -60, -60)
            this.arrowMove('G3', 150, 390, -60, -60)
            this.arrowMove('G4', 210, 390, -60, -60)
            this.arrowMove('G5', 270, 390, -60, -60)
            this.arrowMove('G6', 330, 390, -60, -60)
            this.arrowMove('G7', 390, 390, -60, -60)
            this.arrowMove('G8', 450, 390, -60, -60)
            this.arrowMove('G9', 510, 390, -60, -60)
            this.arrowMove('G10', 570, 390, -60, -60)
            this.arrowMove('G11', 630, 390, -60, -60)
            this.arrowMove('G12', 690, 390, -60, -60)
            this.arrowMove('G13', 750, 390, -60, -60)
            this.arrowMove('G14', 810, 390, -60, -60)
            this.arrowMove('G15', 870, 390, -60, -60)
            this.arrowMove('H1', 30, 450, -60, -60)
            this.arrowMove('H2', 90, 450, -60, -60)
            this.arrowMove('H3', 150, 450, -60, -60)
            this.arrowMove('H4', 210, 450, -60, -60)
            this.arrowMove('H5', 270, 450, -60, -60)
            this.arrowMove('H6', 330, 450, -60, -60)
            this.arrowMove('H7', 390, 450, -60, -60)
            this.arrowMove('H8', 450, 450, -60, -60)
            this.arrowMove('H9', 510, 450, -60, -60)
            this.arrowMove('H10', 570, 450, -60, -60)
            this.arrowMove('H11', 630, 450, -60, -60)
            this.arrowMove('H12', 690, 450, -60, -60)
            this.arrowMove('H13', 750, 450, -60, -60)
            this.arrowMove('H14', 810, 450, -60, -60)
            this.arrowMove('H15', 870, 450, -60, -60)
            this.arrowMove('I2', 90, 510, -60, -60)
            this.arrowMove('I3', 150, 510, -60, -60)
            this.arrowMove('I4', 210, 510, -60, -60)
            this.arrowMove('I5', 270, 510, -60, -60)
            this.arrowMove('I6', 330, 510, -60, -60)
            this.arrowMove('I7', 390, 510, -60, -60)
            this.arrowMove('I8', 450, 510, -60, -60)
            this.arrowMove('I9', 510, 510, -60, -60)
            this.arrowMove('I10', 570, 510, -60, -60)
            this.arrowMove('I11', 630, 510, -60, -60)
            this.arrowMove('I12', 690, 510, -60, -60)
            this.arrowMove('I13', 750, 510, -60, -60)
            this.arrowMove('I14', 810, 510, -60, -60)
            this.arrowMove('I15', 870, 510, -60, -60)
            }
            this.wagon.setTexture("WagonDL")
            this.moveUpdate()
        })

        this.add.image(650, 590, "ArrowL")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.x -= 120
            this.arrowMove('A1', 30, 30, -120, 0)
            this.arrowMove('A2', 90, 30, -120, 0)
            this.arrowMove('A3', 150, 30, -120, 0)
            this.arrowMove('A4', 210, 30, -120, 0)
            this.arrowMove('A5', 270, 30, -120, 0)
            this.arrowMove('A6', 330, 30, -120, 0)
            this.arrowMove('A7', 390, 30, -120, 0)
            this.arrowMove('A8', 450, 30, -120, 0)
            this.arrowMove('A9', 510, 30, -120, 0)
            this.arrowMove('A10', 570, 30, -120, 0)
            this.arrowMove('A11', 630, 30, -120, 0)
            this.arrowMove('A12', 690, 30, -120, 0)
            this.arrowMove('A13', 750, 30, -120, 0)
            this.arrowMove('A14', 810, 30, -120, 0)
            this.arrowMove('B1', 30, 90, -120, 0)
            this.arrowMove('B2', 90, 90, -120, 0)
            this.arrowMove('B3', 150, 90, -120, 0)
            this.arrowMove('B4', 210, 90, -120, 0)
            this.arrowMove('B5', 270, 90, -120, 0)
            this.arrowMove('B6', 330, 90, -120, 0)
            this.arrowMove('B7', 390, 90, -120, 0)
            this.arrowMove('B8', 450, 90, -120, 0)
            this.arrowMove('B9', 510, 90, -120, 0)
            this.arrowMove('B10', 570, 90, -120, 0)
            this.arrowMove('B11', 630, 90, -120, 0)
            this.arrowMove('B12', 690, 90, -120, 0)
            this.arrowMove('B13', 750, 90, -120, 0)
            this.arrowMove('B14', 810, 90, -120, 0)
            this.arrowMove('B15', 870, 90, -120, 0)
            this.arrowMove('C1', 30, 150, -120, 0)
            this.arrowMove('C2', 90, 150, -120, 0)
            this.arrowMove('C3', 150, 150, -120, 0)
            this.arrowMove('C4', 210, 150, -120, 0)
            this.arrowMove('C5', 270, 150, -120, 0)
            this.arrowMove('C6', 330, 150, -120, 0)
            this.arrowMove('C7', 390, 150, -120, 0)
            this.arrowMove('C8', 450, 150, -120, 0)
            this.arrowMove('C9', 510, 150, -120, 0)
            this.arrowMove('C10', 570, 150, -120, 0)
            this.arrowMove('C11', 630, 150, -120, 0)
            this.arrowMove('C12', 690, 150, -120, 0)
            this.arrowMove('C13', 750, 150, -120, 0)
            this.arrowMove('C14', 810, 150, -120, 0)
            this.arrowMove('C15', 870, 150, -120, 0)
            this.arrowMove('D1', 30, 210, -120, 0)
            this.arrowMove('D2', 90, 210, -120, 0)
            this.arrowMove('D3', 150, 210, -120, 0)
            this.arrowMove('D4', 210, 210, -120, 0)
            this.arrowMove('D5', 270, 210, -120, 0)
            this.arrowMove('D6', 330, 210, -120, 0)
            this.arrowMove('D7', 390, 210, -120, 0)
            this.arrowMove('D8', 450, 210, -120, 0)
            this.arrowMove('D9', 510, 210, -120, 0)
            this.arrowMove('D10', 570, 210, -120, 0)
            this.arrowMove('D11', 630, 210, -120, 0)
            this.arrowMove('D12', 690, 210, -120, 0)
            this.arrowMove('D13', 750, 210, -120, 0)
            this.arrowMove('D14', 810, 210, -120, 0)
            this.arrowMove('D15', 870, 210, -120, 0)
            this.arrowMove('E1', 30, 270, -120, 0)
            this.arrowMove('E2', 90, 270, -120, 0)
            this.arrowMove('E3', 150, 270, -120, 0)
            this.arrowMove('E4', 210, 270, -120, 0)
            this.arrowMove('E5', 270, 270, -120, 0)
            this.arrowMove('E6', 330, 270, -120, 0)
            this.arrowMove('E7', 390, 270, -120, 0)
            this.arrowMove('E8', 450, 270, -120, 0)
            this.arrowMove('E9', 510, 270, -120, 0)
            this.arrowMove('E10', 570, 270, -120, 0)
            this.arrowMove('E11', 630, 270, -120, 0)
            this.arrowMove('E12', 690, 270, -120, 0)
            this.arrowMove('E13', 750, 270, -120, 0)
            this.arrowMove('E14', 810, 270, -120, 0)
            this.arrowMove('E15', 870, 270, -120, 0)
            this.arrowMove('F1', 30, 330, -120, 0)
            this.arrowMove('F2', 90, 330, -120, 0)
            this.arrowMove('F3', 150, 330, -120, 0)
            this.arrowMove('F4', 210, 330, -120, 0)
            this.arrowMove('F5', 270, 330, -120, 0)
            this.arrowMove('F6', 330, 330, -120, 0)
            this.arrowMove('F7', 390, 330, -120, 0)
            this.arrowMove('F8', 450, 330, -120, 0)
            this.arrowMove('F9', 510, 330, -120, 0)
            this.arrowMove('F10', 570, 330, -120, 0)
            this.arrowMove('F11', 630, 330, -120, 0)
            this.arrowMove('F12', 690, 330, -120, 0)
            this.arrowMove('F13', 750, 330, -120, 0)
            this.arrowMove('F14', 810, 330, -120, 0)
            this.arrowMove('F15', 870, 330, -120, 0)
            this.arrowMove('G1', 30, 390, -120, 0)
            this.arrowMove('G2', 90, 390, -120, 0)
            this.arrowMove('G3', 150, 390, -120, 0)
            this.arrowMove('G4', 210, 390, -120, 0)
            this.arrowMove('G5', 270, 390, -120, 0)
            this.arrowMove('G6', 330, 390, -120, 0)
            this.arrowMove('G7', 390, 390, -120, 0)
            this.arrowMove('G8', 450, 390, -120, 0)
            this.arrowMove('G9', 510, 390, -120, 0)
            this.arrowMove('G10', 570, 390, -120, 0)
            this.arrowMove('G11', 630, 390, -120, 0)
            this.arrowMove('G12', 690, 390, -120, 0)
            this.arrowMove('G13', 750, 390, -120, 0)
            this.arrowMove('G14', 810, 390, -120, 0)
            this.arrowMove('G15', 870, 390, -120, 0)
            this.arrowMove('H1', 30, 450, -120, 0)
            this.arrowMove('H2', 90, 450, -120, 0)
            this.arrowMove('H3', 150, 450, -120, 0)
            this.arrowMove('H4', 210, 450, -120, 0)
            this.arrowMove('H5', 270, 450, -120, 0)
            this.arrowMove('H6', 330, 450, -120, 0)
            this.arrowMove('H7', 390, 450, -120, 0)
            this.arrowMove('H8', 450, 450, -120, 0)
            this.arrowMove('H9', 510, 450, -120, 0)
            this.arrowMove('H10', 570, 450, -120, 0)
            this.arrowMove('H11', 630, 450, -120, 0)
            this.arrowMove('H12', 690, 450, -120, 0)
            this.arrowMove('H13', 750, 450, -120, 0)
            this.arrowMove('H14', 810, 450, -120, 0)
            this.arrowMove('H15', 870, 450, -120, 0)
            this.arrowMove('I2', 90, 510, -120, 0)
            this.arrowMove('I3', 150, 510, -120, 0)
            this.arrowMove('I4', 210, 510, -120, 0)
            this.arrowMove('I5', 270, 510, -120, 0)
            this.arrowMove('I6', 330, 510, -120, 0)
            this.arrowMove('I7', 390, 510, -120, 0)
            this.arrowMove('I8', 450, 510, -120, 0)
            this.arrowMove('I9', 510, 510, -120, 0)
            this.arrowMove('I10', 570, 510, -120, 0)
            this.arrowMove('I11', 630, 510, -120, 0)
            this.arrowMove('I12', 690, 510, -120, 0)
            this.arrowMove('I13', 750, 510, -120, 0)
            this.arrowMove('I14', 810, 510, -120, 0)
            this.arrowMove('I15', 870, 510, -120, 0)
            }
            else {
            this.wagon.x -= 60
            this.arrowMove('A1', 30, 30, -60, 0)
            this.arrowMove('A2', 90, 30, -60, 0)
            this.arrowMove('A3', 150, 30, -60, 0)
            this.arrowMove('A4', 210, 30, -60, 0)
            this.arrowMove('A5', 270, 30, -60, 0)
            this.arrowMove('A6', 330, 30, -60, 0)
            this.arrowMove('A7', 390, 30, -60, 0)
            this.arrowMove('A8', 450, 30, -60, 0)
            this.arrowMove('A9', 510, 30, -60, 0)
            this.arrowMove('A10', 570, 30, -60, 0)
            this.arrowMove('A11', 630, 30, -60, 0)
            this.arrowMove('A12', 690, 30, -60, 0)
            this.arrowMove('A13', 750, 30, -60, 0)
            this.arrowMove('A14', 810, 30, -60, 0)
            this.arrowMove('B1', 30, 90, -60, 0)
            this.arrowMove('B2', 90, 90, -60, 0)
            this.arrowMove('B3', 150, 90, -60, 0)
            this.arrowMove('B4', 210, 90, -60, 0)
            this.arrowMove('B5', 270, 90, -60, 0)
            this.arrowMove('B6', 330, 90, -60, 0)
            this.arrowMove('B7', 390, 90, -60, 0)
            this.arrowMove('B8', 450, 90, -60, 0)
            this.arrowMove('B9', 510, 90, -60, 0)
            this.arrowMove('B10', 570, 90, -60, 0)
            this.arrowMove('B11', 630, 90, -60, 0)
            this.arrowMove('B12', 690, 90, -60, 0)
            this.arrowMove('B13', 750, 90, -60, 0)
            this.arrowMove('B14', 810, 90, -60, 0)
            this.arrowMove('B15', 870, 90, -60, 0)
            this.arrowMove('C1', 30, 150, -60, 0)
            this.arrowMove('C2', 90, 150, -60, 0)
            this.arrowMove('C3', 150, 150, -60, 0)
            this.arrowMove('C4', 210, 150, -60, 0)
            this.arrowMove('C5', 270, 150, -60, 0)
            this.arrowMove('C6', 330, 150, -60, 0)
            this.arrowMove('C7', 390, 150, -60, 0)
            this.arrowMove('C8', 450, 150, -60, 0)
            this.arrowMove('C9', 510, 150, -60, 0)
            this.arrowMove('C10', 570, 150, -60, 0)
            this.arrowMove('C11', 630, 150, -60, 0)
            this.arrowMove('C12', 690, 150, -60, 0)
            this.arrowMove('C13', 750, 150, -60, 0)
            this.arrowMove('C14', 810, 150, -60, 0)
            this.arrowMove('C15', 870, 150, -60, 0)
            this.arrowMove('D1', 30, 210, -60, 0)
            this.arrowMove('D2', 90, 210, -60, 0)
            this.arrowMove('D3', 150, 210, -60, 0)
            this.arrowMove('D4', 210, 210, -60, 0)
            this.arrowMove('D5', 270, 210, -60, 0)
            this.arrowMove('D6', 330, 210, -60, 0)
            this.arrowMove('D7', 390, 210, -60, 0)
            this.arrowMove('D8', 450, 210, -60, 0)
            this.arrowMove('D9', 510, 210, -60, 0)
            this.arrowMove('D10', 570, 210, -60, 0)
            this.arrowMove('D11', 630, 210, -60, 0)
            this.arrowMove('D12', 690, 210, -60, 0)
            this.arrowMove('D13', 750, 210, -60, 0)
            this.arrowMove('D14', 810, 210, -60, 0)
            this.arrowMove('D15', 870, 210, -60, 0)
            this.arrowMove('E1', 30, 270, -60, 0)
            this.arrowMove('E2', 90, 270, -60, 0)
            this.arrowMove('E3', 150, 270, -60, 0)
            this.arrowMove('E4', 210, 270, -60, 0)
            this.arrowMove('E5', 270, 270, -60, 0)
            this.arrowMove('E6', 330, 270, -60, 0)
            this.arrowMove('E7', 390, 270, -60, 0)
            this.arrowMove('E8', 450, 270, -60, 0)
            this.arrowMove('E9', 510, 270, -60, 0)
            this.arrowMove('E10', 570, 270, -60, 0)
            this.arrowMove('E11', 630, 270, -60, 0)
            this.arrowMove('E12', 690, 270, -60, 0)
            this.arrowMove('E13', 750, 270, -60, 0)
            this.arrowMove('E14', 810, 270, -60, 0)
            this.arrowMove('E15', 870, 270, -60, 0)
            this.arrowMove('F1', 30, 330, -60, 0)
            this.arrowMove('F2', 90, 330, -60, 0)
            this.arrowMove('F3', 150, 330, -60, 0)
            this.arrowMove('F4', 210, 330, -60, 0)
            this.arrowMove('F5', 270, 330, -60, 0)
            this.arrowMove('F6', 330, 330, -60, 0)
            this.arrowMove('F7', 390, 330, -60, 0)
            this.arrowMove('F8', 450, 330, -60, 0)
            this.arrowMove('F9', 510, 330, -60, 0)
            this.arrowMove('F10', 570, 330, -60, 0)
            this.arrowMove('F11', 630, 330, -60, 0)
            this.arrowMove('F12', 690, 330, -60, 0)
            this.arrowMove('F13', 750, 330, -60, 0)
            this.arrowMove('F14', 810, 330, -60, 0)
            this.arrowMove('F15', 870, 330, -60, 0)
            this.arrowMove('G1', 30, 390, -60, 0)
            this.arrowMove('G2', 90, 390, -60, 0)
            this.arrowMove('G3', 150, 390, -60, 0)
            this.arrowMove('G4', 210, 390, -60, 0)
            this.arrowMove('G5', 270, 390, -60, 0)
            this.arrowMove('G6', 330, 390, -60, 0)
            this.arrowMove('G7', 390, 390, -60, 0)
            this.arrowMove('G8', 450, 390, -60, 0)
            this.arrowMove('G9', 510, 390, -60, 0)
            this.arrowMove('G10', 570, 390, -60, 0)
            this.arrowMove('G11', 630, 390, -60, 0)
            this.arrowMove('G12', 690, 390, -60, 0)
            this.arrowMove('G13', 750, 390, -60, 0)
            this.arrowMove('G14', 810, 390, -60, 0)
            this.arrowMove('G15', 870, 390, -60, 0)
            this.arrowMove('H1', 30, 450, -60, 0)
            this.arrowMove('H2', 90, 450, -60, 0)
            this.arrowMove('H3', 150, 450, -60, 0)
            this.arrowMove('H4', 210, 450, -60, 0)
            this.arrowMove('H5', 270, 450, -60, 0)
            this.arrowMove('H6', 330, 450, -60, 0)
            this.arrowMove('H7', 390, 450, -60, 0)
            this.arrowMove('H8', 450, 450, -60, 0)
            this.arrowMove('H9', 510, 450, -60, 0)
            this.arrowMove('H10', 570, 450, -60, 0)
            this.arrowMove('H11', 630, 450, -60, 0)
            this.arrowMove('H12', 690, 450, -60, 0)
            this.arrowMove('H13', 750, 450, -60, 0)
            this.arrowMove('H14', 810, 450, -60, 0)
            this.arrowMove('H15', 870, 450, -60, 0)
            this.arrowMove('I2', 90, 510, -60, 0)
            this.arrowMove('I3', 150, 510, -60, 0)
            this.arrowMove('I4', 210, 510, -60, 0)
            this.arrowMove('I5', 270, 510, -60, 0)
            this.arrowMove('I6', 330, 510, -60, 0)
            this.arrowMove('I7', 390, 510, -60, 0)
            this.arrowMove('I8', 450, 510, -60, 0)
            this.arrowMove('I9', 510, 510, -60, 0)
            this.arrowMove('I10', 570, 510, -60, 0)
            this.arrowMove('I11', 630, 510, -60, 0)
            this.arrowMove('I12', 690, 510, -60, 0)
            this.arrowMove('I13', 750, 510, -60, 0)
            this.arrowMove('I14', 810, 510, -60, 0)
            this.arrowMove('I15', 870, 510, -60, 0)
            }
            this.wagon.setTexture("WagonL")
            this.moveUpdate()
        })

        this.add.image(743, 590, "ArrowUL")
        .setScale(0.27)
        .setDepth(2)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if (this.cursors.shift.isDown) {
            this.wagon.y -= 120
            this.wagon.x -= 120
            this.arrowMove('A1', 30, 30, -120, 120)
            this.arrowMove('A2', 90, 30, -120, 120)
            this.arrowMove('A3', 150, 30, -120, 120)
            this.arrowMove('A4', 210, 30, -120, 120)
            this.arrowMove('A5', 270, 30, -120, 120)
            this.arrowMove('A6', 330, 30, -120, 120)
            this.arrowMove('A7', 390, 30, -120, 120)
            this.arrowMove('A8', 450, 30, -120, 120)
            this.arrowMove('A9', 510, 30, -120, 120)
            this.arrowMove('A10', 570, 30, -120, 120)
            this.arrowMove('A11', 630, 30, -120, 120)
            this.arrowMove('A12', 690, 30, -120, 120)
            this.arrowMove('A13', 750, 30, -120, 120)
            this.arrowMove('A14', 810, 30, -120, 120)
            this.arrowMove('B1', 30, 90, -120, 120)
            this.arrowMove('B2', 90, 90, -120, 120)
            this.arrowMove('B3', 150, 90, -120, 120)
            this.arrowMove('B4', 210, 90, -120, 120)
            this.arrowMove('B5', 270, 90, -120, 120)
            this.arrowMove('B6', 330, 90, -120, 120)
            this.arrowMove('B7', 390, 90, -120, 120)
            this.arrowMove('B8', 450, 90, -120, 120)
            this.arrowMove('B9', 510, 90, -120, 120)
            this.arrowMove('B10', 570, 90, -120, 120)
            this.arrowMove('B11', 630, 90, -120, 120)
            this.arrowMove('B12', 690, 90, -120, 120)
            this.arrowMove('B13', 750, 90, -120, 120)
            this.arrowMove('B14', 810, 90, -120, 120)
            this.arrowMove('B15', 870, 90, -120, 120)
            this.arrowMove('C1', 30, 150, -120, 120)
            this.arrowMove('C2', 90, 150, -120, 120)
            this.arrowMove('C3', 150, 150, -120, 120)
            this.arrowMove('C4', 210, 150, -120, 120)
            this.arrowMove('C5', 270, 150, -120, 120)
            this.arrowMove('C6', 330, 150, -120, 120)
            this.arrowMove('C7', 390, 150, -120, 120)
            this.arrowMove('C8', 450, 150, -120, 120)
            this.arrowMove('C9', 510, 150, -120, 120)
            this.arrowMove('C10', 570, 150, -120, 120)
            this.arrowMove('C11', 630, 150, -120, 120)
            this.arrowMove('C12', 690, 150, -120, 120)
            this.arrowMove('C13', 750, 150, -120, 120)
            this.arrowMove('C14', 810, 150, -120, 120)
            this.arrowMove('C15', 870, 150, -120, 120)
            this.arrowMove('D1', 30, 210, -120, 120)
            this.arrowMove('D2', 90, 210, -120, 120)
            this.arrowMove('D3', 150, 210, -120, 120)
            this.arrowMove('D4', 210, 210, -120, 120)
            this.arrowMove('D5', 270, 210, -120, 120)
            this.arrowMove('D6', 330, 210, -120, 120)
            this.arrowMove('D7', 390, 210, -120, 120)
            this.arrowMove('D8', 450, 210, -120, 120)
            this.arrowMove('D9', 510, 210, -120, 120)
            this.arrowMove('D10', 570, 210, -120, 120)
            this.arrowMove('D11', 630, 210, -120, 120)
            this.arrowMove('D12', 690, 210, -120, 120)
            this.arrowMove('D13', 750, 210, -120, 120)
            this.arrowMove('D14', 810, 210, -120, 120)
            this.arrowMove('D15', 870, 210, -120, 120)
            this.arrowMove('E1', 30, 270, -120, 120)
            this.arrowMove('E2', 90, 270, -120, 120)
            this.arrowMove('E3', 150, 270, -120, 120)
            this.arrowMove('E4', 210, 270, -120, 120)
            this.arrowMove('E5', 270, 270, -120, 120)
            this.arrowMove('E6', 330, 270, -120, 120)
            this.arrowMove('E7', 390, 270, -120, 120)
            this.arrowMove('E8', 450, 270, -120, 120)
            this.arrowMove('E9', 510, 270, -120, 120)
            this.arrowMove('E10', 570, 270, -120, 120)
            this.arrowMove('E11', 630, 270, -120, 120)
            this.arrowMove('E12', 690, 270, -120, 120)
            this.arrowMove('E13', 750, 270, -120, 120)
            this.arrowMove('E14', 810, 270, -120, 120)
            this.arrowMove('E15', 870, 270, -120, 120)
            this.arrowMove('F1', 30, 330, -120, 120)
            this.arrowMove('F2', 90, 330, -120, 120)
            this.arrowMove('F3', 150, 330, -120, 120)
            this.arrowMove('F4', 210, 330, -120, 120)
            this.arrowMove('F5', 270, 330, -120, 120)
            this.arrowMove('F6', 330, 330, -120, 120)
            this.arrowMove('F7', 390, 330, -120, 120)
            this.arrowMove('F8', 450, 330, -120, 120)
            this.arrowMove('F9', 510, 330, -120, 120)
            this.arrowMove('F10', 570, 330, -120, 120)
            this.arrowMove('F11', 630, 330, -120, 120)
            this.arrowMove('F12', 690, 330, -120, 120)
            this.arrowMove('F13', 750, 330, -120, 120)
            this.arrowMove('F14', 810, 330, -120, 120)
            this.arrowMove('F15', 870, 330, -120, 120)
            this.arrowMove('G1', 30, 390, -120, 120)
            this.arrowMove('G2', 90, 390, -120, 120)
            this.arrowMove('G3', 150, 390, -120, 120)
            this.arrowMove('G4', 210, 390, -120, 120)
            this.arrowMove('G5', 270, 390, -120, 120)
            this.arrowMove('G6', 330, 390, -120, 120)
            this.arrowMove('G7', 390, 390, -120, 120)
            this.arrowMove('G8', 450, 390, -120, 120)
            this.arrowMove('G9', 510, 390, -120, 120)
            this.arrowMove('G10', 570, 390, -120, 120)
            this.arrowMove('G11', 630, 390, -120, 120)
            this.arrowMove('G12', 690, 390, -120, 120)
            this.arrowMove('G13', 750, 390, -120, 120)
            this.arrowMove('G14', 810, 390, -120, 120)
            this.arrowMove('G15', 870, 390, -120, 120)
            this.arrowMove('H1', 30, 450, -120, 120)
            this.arrowMove('H2', 90, 450, -120, 120)
            this.arrowMove('H3', 150, 450, -120, 120)
            this.arrowMove('H4', 210, 450, -120, 120)
            this.arrowMove('H5', 270, 450, -120, 120)
            this.arrowMove('H6', 330, 450, -120, 120)
            this.arrowMove('H7', 390, 450, -120, 120)
            this.arrowMove('H8', 450, 450, -120, 120)
            this.arrowMove('H9', 510, 450, -120, 120)
            this.arrowMove('H10', 570, 450, -120, 120)
            this.arrowMove('H11', 630, 450, -120, 120)
            this.arrowMove('H12', 690, 450, -120, 120)
            this.arrowMove('H13', 750, 450, -120, 120)
            this.arrowMove('H14', 810, 450, -120, 120)
            this.arrowMove('H15', 870, 450, -120, 120)
            this.arrowMove('I2', 90, 510, -120, 120)
            this.arrowMove('I3', 150, 510, -120, 120)
            this.arrowMove('I4', 210, 510, -120, 120)
            this.arrowMove('I5', 270, 510, -120, 120)
            this.arrowMove('I6', 330, 510, -120, 120)
            this.arrowMove('I7', 390, 510, -120, 120)
            this.arrowMove('I8', 450, 510, -120, 120)
            this.arrowMove('I9', 510, 510, -120, 120)
            this.arrowMove('I10', 570, 510, -120, 120)
            this.arrowMove('I11', 630, 510, -120, 120)
            this.arrowMove('I12', 690, 510, -120, 120)
            this.arrowMove('I13', 750, 510, -120, 120)
            this.arrowMove('I14', 810, 510, -120, 120)
            this.arrowMove('I15', 870, 510, -120, 120)
            }
            else {
            this.wagon.y -= 60
            this.wagon.x -= 60
            this.arrowMove('A1', 30, 30, -60, 60)
            this.arrowMove('A2', 90, 30, -60, 60)
            this.arrowMove('A3', 150, 30, -60, 60)
            this.arrowMove('A4', 210, 30, -60, 60)
            this.arrowMove('A5', 270, 30, -60, 60)
            this.arrowMove('A6', 330, 30, -60, 60)
            this.arrowMove('A7', 390, 30, -60, 60)
            this.arrowMove('A8', 450, 30, -60, 60)
            this.arrowMove('A9', 510, 30, -60, 60)
            this.arrowMove('A10', 570, 30, -60, 60)
            this.arrowMove('A11', 630, 30, -60, 60)
            this.arrowMove('A12', 690, 30, -60, 60)
            this.arrowMove('A13', 750, 30, -60, 60)
            this.arrowMove('A14', 810, 30, -60, 60)
            this.arrowMove('B1', 30, 90, -60, 60)
            this.arrowMove('B2', 90, 90, -60, 60)
            this.arrowMove('B3', 150, 90, -60, 60)
            this.arrowMove('B4', 210, 90, -60, 60)
            this.arrowMove('B5', 270, 90, -60, 60)
            this.arrowMove('B6', 330, 90, -60, 60)
            this.arrowMove('B7', 390, 90, -60, 60)
            this.arrowMove('B8', 450, 90, -60, 60)
            this.arrowMove('B9', 510, 90, -60, 60)
            this.arrowMove('B10', 570, 90, -60, 60)
            this.arrowMove('B11', 630, 90, -60, 60)
            this.arrowMove('B12', 690, 90, -60, 60)
            this.arrowMove('B13', 750, 90, -60, 60)
            this.arrowMove('B14', 810, 90, -60, 60)
            this.arrowMove('B15', 870, 90, -60, 60)
            this.arrowMove('C1', 30, 150, -60, 60)
            this.arrowMove('C2', 90, 150, -60, 60)
            this.arrowMove('C3', 150, 150, -60, 60)
            this.arrowMove('C4', 210, 150, -60, 60)
            this.arrowMove('C5', 270, 150, -60, 60)
            this.arrowMove('C6', 330, 150, -60, 60)
            this.arrowMove('C7', 390, 150, -60, 60)
            this.arrowMove('C8', 450, 150, -60, 60)
            this.arrowMove('C9', 510, 150, -60, 60)
            this.arrowMove('C10', 570, 150, -60, 60)
            this.arrowMove('C11', 630, 150, -60, 60)
            this.arrowMove('C12', 690, 150, -60, 60)
            this.arrowMove('C13', 750, 150, -60, 60)
            this.arrowMove('C14', 810, 150, -60, 60)
            this.arrowMove('C15', 870, 150, -60, 60)
            this.arrowMove('D1', 30, 210, -60, 60)
            this.arrowMove('D2', 90, 210, -60, 60)
            this.arrowMove('D3', 150, 210, -60, 60)
            this.arrowMove('D4', 210, 210, -60, 60)
            this.arrowMove('D5', 270, 210, -60, 60)
            this.arrowMove('D6', 330, 210, -60, 60)
            this.arrowMove('D7', 390, 210, -60, 60)
            this.arrowMove('D8', 450, 210, -60, 60)
            this.arrowMove('D9', 510, 210, -60, 60)
            this.arrowMove('D10', 570, 210, -60, 60)
            this.arrowMove('D11', 630, 210, -60, 60)
            this.arrowMove('D12', 690, 210, -60, 60)
            this.arrowMove('D13', 750, 210, -60, 60)
            this.arrowMove('D14', 810, 210, -60, 60)
            this.arrowMove('D15', 870, 210, -60, 60)
            this.arrowMove('E1', 30, 270, -60, 60)
            this.arrowMove('E2', 90, 270, -60, 60)
            this.arrowMove('E3', 150, 270, -60, 60)
            this.arrowMove('E4', 210, 270, -60, 60)
            this.arrowMove('E5', 270, 270, -60, 60)
            this.arrowMove('E6', 330, 270, -60, 60)
            this.arrowMove('E7', 390, 270, -60, 60)
            this.arrowMove('E8', 450, 270, -60, 60)
            this.arrowMove('E9', 510, 270, -60, 60)
            this.arrowMove('E10', 570, 270, -60, 60)
            this.arrowMove('E11', 630, 270, -60, 60)
            this.arrowMove('E12', 690, 270, -60, 60)
            this.arrowMove('E13', 750, 270, -60, 60)
            this.arrowMove('E14', 810, 270, -60, 60)
            this.arrowMove('E15', 870, 270, -60, 60)
            this.arrowMove('F1', 30, 330, -60, 60)
            this.arrowMove('F2', 90, 330, -60, 60)
            this.arrowMove('F3', 150, 330, -60, 60)
            this.arrowMove('F4', 210, 330, -60, 60)
            this.arrowMove('F5', 270, 330, -60, 60)
            this.arrowMove('F6', 330, 330, -60, 60)
            this.arrowMove('F7', 390, 330, -60, 60)
            this.arrowMove('F8', 450, 330, -60, 60)
            this.arrowMove('F9', 510, 330, -60, 60)
            this.arrowMove('F10', 570, 330, -60, 60)
            this.arrowMove('F11', 630, 330, -60, 60)
            this.arrowMove('F12', 690, 330, -60, 60)
            this.arrowMove('F13', 750, 330, -60, 60)
            this.arrowMove('F14', 810, 330, -60, 60)
            this.arrowMove('F15', 870, 330, -60, 60)
            this.arrowMove('G1', 30, 390, -60, 60)
            this.arrowMove('G2', 90, 390, -60, 60)
            this.arrowMove('G3', 150, 390, -60, 60)
            this.arrowMove('G4', 210, 390, -60, 60)
            this.arrowMove('G5', 270, 390, -60, 60)
            this.arrowMove('G6', 330, 390, -60, 60)
            this.arrowMove('G7', 390, 390, -60, 60)
            this.arrowMove('G8', 450, 390, -60, 60)
            this.arrowMove('G9', 510, 390, -60, 60)
            this.arrowMove('G10', 570, 390, -60, 60)
            this.arrowMove('G11', 630, 390, -60, 60)
            this.arrowMove('G12', 690, 390, -60, 60)
            this.arrowMove('G13', 750, 390, -60, 60)
            this.arrowMove('G14', 810, 390, -60, 60)
            this.arrowMove('G15', 870, 390, -60, 60)
            this.arrowMove('H1', 30, 450, -60, 60)
            this.arrowMove('H2', 90, 450, -60, 60)
            this.arrowMove('H3', 150, 450, -60, 60)
            this.arrowMove('H4', 210, 450, -60, 60)
            this.arrowMove('H5', 270, 450, -60, 60)
            this.arrowMove('H6', 330, 450, -60, 60)
            this.arrowMove('H7', 390, 450, -60, 60)
            this.arrowMove('H8', 450, 450, -60, 60)
            this.arrowMove('H9', 510, 450, -60, 60)
            this.arrowMove('H10', 570, 450, -60, 60)
            this.arrowMove('H11', 630, 450, -60, 60)
            this.arrowMove('H12', 690, 450, -60, 60)
            this.arrowMove('H13', 750, 450, -60, 60)
            this.arrowMove('H14', 810, 450, -60, 60)
            this.arrowMove('H15', 870, 450, -60, 60)
            this.arrowMove('I2', 90, 510, -60, 60)
            this.arrowMove('I3', 150, 510, -60, 60)
            this.arrowMove('I4', 210, 510, -60, 60)
            this.arrowMove('I5', 270, 510, -60, 60)
            this.arrowMove('I6', 330, 510, -60, 60)
            this.arrowMove('I7', 390, 510, -60, 60)
            this.arrowMove('I8', 450, 510, -60, 60)
            this.arrowMove('I9', 510, 510, -60, 60)
            this.arrowMove('I10', 570, 510, -60, 60)
            this.arrowMove('I11', 630, 510, -60, 60)
            this.arrowMove('I12', 690, 510, -60, 60)
            this.arrowMove('I13', 750, 510, -60, 60)
            this.arrowMove('I14', 810, 510, -60, 60)
            this.arrowMove('I15', 870, 510, -60, 60)
            }
            this.wagon.setTexture("WagonUL")
            this.moveUpdate()
        })

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 30, 'A1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 30, 'A1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 30, 'A1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A1', 'yellow')
        }
        else {
         this.add.sprite(30, 30, 'A1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 30, 'A2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 30, 'A2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 30, 'A2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A2', 'yellow')
        }
        else {
         this.add.sprite(90, 30, 'A2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 30, 'A3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 30, 'A3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 30, 'A3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A3', 'yellow')
        }
        else {
         this.add.sprite(150, 30, 'A3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 30, 'A4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 30, 'A4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 30, 'A4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A4', 'yellow')
        }
        else {
         this.add.sprite(210, 30, 'A4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 30, 'A5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 30, 'A5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 30, 'A5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A5', 'yellow')
        }
        else {
         this.add.sprite(270, 30, 'A5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 30, 'A6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 30, 'A6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 30, 'A6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A6', 'yellow')
        }
        else {
         this.add.sprite(330, 30, 'A6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 30, 'A7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 30, 'A7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 30, 'A7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A7', 'yellow')
        }
        else {
         this.add.sprite(390, 30, 'A7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 30, 'A8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 30, 'A8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 30, 'A8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A8', 'yellow')
        }
        else {
         this.add.sprite(450, 30, 'A8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 30, 'A9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 30, 'A9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 30, 'A9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A9', 'yellow')
        }
        else {
         this.add.sprite(510, 30, 'A9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 30, 'A10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 30, 'A10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 30, 'A10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A10', 'yellow')
        }
        else {
         this.add.sprite(570, 30, 'A10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 30, 'A11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 30, 'A11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 30, 'A11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A11', 'yellow')
        }
        else {
         this.add.sprite(630, 30, 'A11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 30, 'A12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 30, 'A12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 30, 'A12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A12', 'yellow')
        }
        else {
         this.add.sprite(690, 30, 'A12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 30, 'A13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 30, 'A13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 30, 'A13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A13', 'yellow')
        }
        else {
         this.add.sprite(750, 30, 'A13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 30, 'A14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('A14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 30, 'A14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('A14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 30, 'A14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('A14', 'yellow')
        }
        else {
         this.add.sprite(810, 30, 'A14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('A14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 90, 'B1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 90, 'B1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 90, 'B1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B1', 'yellow')
        }
        else {
         this.add.sprite(30, 90, 'B1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 90, 'B2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 90, 'B2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 90, 'B2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B2', 'yellow')
        }
        else {
         this.add.sprite(90, 90, 'B2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 90, 'B3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 90, 'B3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 90, 'B3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B3', 'yellow')
        }
        else {
         this.add.sprite(150, 90, 'B3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 90, 'B4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 90, 'B4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 90, 'B4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B4', 'yellow')
        }
        else {
         this.add.sprite(210, 90, 'B4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 90, 'B5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 90, 'B5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 90, 'B5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B5', 'yellow')
        }
        else {
         this.add.sprite(270, 90, 'B5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 90, 'B6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 90, 'B6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 90, 'B6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B6', 'yellow')
        }
        else {
         this.add.sprite(330, 90, 'B6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 90, 'B7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 90, 'B7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 90, 'B7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B7', 'yellow')
        }
        else {
         this.add.sprite(390, 90, 'B7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 90, 'B8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 90, 'B8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 90, 'B8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B8', 'yellow')
        }
        else {
         this.add.sprite(450, 90, 'B8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 90, 'B9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 90, 'B9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 90, 'B9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B9', 'yellow')
        }
        else {
         this.add.sprite(510, 90, 'B9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 90, 'B10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 90, 'B10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 90, 'B10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B10', 'yellow')
        }
        else {
         this.add.sprite(570, 90, 'B10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 90, 'B11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 90, 'B11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 90, 'B11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B11', 'yellow')
        }
        else {
         this.add.sprite(630, 90, 'B11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 90, 'B12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 90, 'B12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 90, 'B12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B12', 'yellow')
        }
        else {
         this.add.sprite(690, 90, 'B12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 90, 'B13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 90, 'B13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 90, 'B13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B13', 'yellow')
        }
        else {
         this.add.sprite(750, 90, 'B13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 90, 'B14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 90, 'B14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 90, 'B14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B14', 'yellow')
        }
        else {
         this.add.sprite(810, 90, 'B14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 90, 'B15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('B15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 90, 'B15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('B15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 90, 'B15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('B15', 'yellow')
        }
        else {
         this.add.sprite(870, 90, 'B15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('B15', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 150, 'C1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 150, 'C1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 150, 'C1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C1', 'yellow')
        }
        else {
         this.add.sprite(30, 150, 'C1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 150, 'C2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 150, 'C2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 150, 'C2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C2', 'yellow')
        }
        else {
         this.add.sprite(90, 150, 'C2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 150, 'C3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 150, 'C3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 150, 'C3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C3', 'yellow')
        }
        else {
         this.add.sprite(150, 150, 'C3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 150, 'C4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 150, 'C4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 150, 'C4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C4', 'yellow')
        }
        else {
         this.add.sprite(210, 150, 'C4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 150, 'C5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 150, 'C5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 150, 'C5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C5', 'yellow')
        }
        else {
         this.add.sprite(270, 150, 'C5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 150, 'C6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 150, 'C6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 150, 'C6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C6', 'yellow')
        }
        else {
         this.add.sprite(330, 150, 'C6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 150, 'C7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 150, 'C7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 150, 'C7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C7', 'yellow')
        }
        else {
         this.add.sprite(390, 150, 'C7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 150, 'C8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 150, 'C8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 150, 'C8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C8', 'yellow')
        }
        else {
         this.add.sprite(450, 150, 'C8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 150, 'C9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 150, 'C9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 150, 'C9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C9', 'yellow')
        }
        else {
         this.add.sprite(510, 150, 'C9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 150, 'C10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 150, 'C10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 150, 'C10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C10', 'yellow')
        }
        else {
         this.add.sprite(570, 150, 'C10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 150, 'C11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 150, 'C11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 150, 'C11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C11', 'yellow')
        }
        else {
         this.add.sprite(630, 150, 'C11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 150, 'C12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 150, 'C12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 150, 'C12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C12', 'yellow')
        }
        else {
         this.add.sprite(690, 150, 'C12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 150, 'C13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 150, 'C13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 150, 'C13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C13', 'yellow')
        }
        else {
         this.add.sprite(750, 150, 'C13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 150, 'C14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 150, 'C14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 150, 'C14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C14', 'yellow')
        }
        else {
         this.add.sprite(810, 150, 'C14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 150, 'C15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('C15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 150, 'C15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('C15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 150, 'C15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('C15', 'yellow')
        }
        else {
         this.add.sprite(870, 150, 'C15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('C15', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 210, 'D1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 210, 'D1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 210, 'D1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D1', 'yellow')
        }
        else {
         this.add.sprite(30, 210, 'D1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 210, 'D2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 210, 'D2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 210, 'D2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D2', 'yellow')
        }
        else {
         this.add.sprite(90, 210, 'D2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 210, 'D3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 210, 'D3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 210, 'D3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D3', 'yellow')
        }
        else {
         this.add.sprite(150, 210, 'D3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 210, 'D4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 210, 'D4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 210, 'D4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D4', 'yellow')
        }
        else {
         this.add.sprite(210, 210, 'D4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 210, 'D5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 210, 'D5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 210, 'D5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D5', 'yellow')
        }
        else {
         this.add.sprite(270, 210, 'D5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 210, 'D6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 210, 'D6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 210, 'D6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D6', 'yellow')
        }
        else {
         this.add.sprite(330, 210, 'D6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 210, 'D7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 210, 'D7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 210, 'D7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D7', 'yellow')
        }
        else {
         this.add.sprite(390, 210, 'D7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 210, 'D8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 210, 'D8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 210, 'D8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D8', 'yellow')
        }
        else {
         this.add.sprite(450, 210, 'D8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 210, 'D9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 210, 'D9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 210, 'D9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D9', 'yellow')
        }
        else {
         this.add.sprite(510, 210, 'D9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 210, 'D10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 210, 'D10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 210, 'D10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D10', 'yellow')
        }
        else {
         this.add.sprite(570, 210, 'D10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 210, 'D11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 210, 'D11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 210, 'D11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D11', 'yellow')
        }
        else {
         this.add.sprite(630, 210, 'D11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 210, 'D12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 210, 'D12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 210, 'D12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D12', 'yellow')
        }
        else {
         this.add.sprite(690, 210, 'D12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 210, 'D13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 210, 'D13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 210, 'D13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D13', 'yellow')
        }
        else {
         this.add.sprite(750, 210, 'D13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 210, 'D14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 210, 'D14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 210, 'D14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D14', 'yellow')
        }
        else {
         this.add.sprite(810, 210, 'D14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 210, 'D15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('D15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 210, 'D15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('D15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 210, 'D15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('D15', 'yellow')
        }
        else {
         this.add.sprite(870, 210, 'D15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('D15', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 270, 'E1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 270, 'E1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 270, 'E1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E1', 'yellow')
        }
        else {
         this.add.sprite(30, 270, 'E1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 270, 'E2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 270, 'E2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 270, 'E2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E2', 'yellow')
        }
        else {
         this.add.sprite(90, 270, 'E2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 270, 'E3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 270, 'E3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 270, 'E3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E3', 'yellow')
        }
        else {
         this.add.sprite(150, 270, 'E3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 270, 'E4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 270, 'E4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 270, 'E4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E4', 'yellow')
        }
        else {
         this.add.sprite(210, 270, 'E4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 270, 'E5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 270, 'E5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 270, 'E5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E5', 'yellow')
        }
        else {
         this.add.sprite(270, 270, 'E5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 270, 'E6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 270, 'E6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 270, 'E6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E6', 'yellow')
        }
        else {
         this.add.sprite(330, 270, 'E6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 270, 'E7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 270, 'E7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 270, 'E7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E7', 'yellow')
        }
        else {
         this.add.sprite(390, 270, 'E7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 270, 'E8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 270, 'E8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 270, 'E8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E8', 'yellow')
        }
        else {
         this.add.sprite(450, 270, 'E8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 270, 'E9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 270, 'E9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 270, 'E9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E9', 'yellow')
        }
        else {
         this.add.sprite(510, 270, 'E9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 270, 'E10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 270, 'E10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 270, 'E10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E10', 'yellow')
        }
        else {
         this.add.sprite(570, 270, 'E10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 270, 'E11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 270, 'E11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 270, 'E11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E11', 'yellow')
        }
        else {
         this.add.sprite(630, 270, 'E11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 270, 'E12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 270, 'E12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 270, 'E12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E12', 'yellow')
        }
        else {
         this.add.sprite(690, 270, 'E12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 270, 'E13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 270, 'E13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 270, 'E13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E13', 'yellow')
        }
        else {
         this.add.sprite(750, 270, 'E13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 270, 'E14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 270, 'E14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 270, 'E14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E14', 'yellow')
        }
        else {
         this.add.sprite(810, 270, 'E14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 270, 'E15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('E15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 270, 'E15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('E15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 270, 'E15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('E15', 'yellow')
        }
        else {
         this.add.sprite(870, 270, 'E15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('E15', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 330, 'F1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 330, 'F1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 330, 'F1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F1', 'yellow')
        }
        else {
         this.add.sprite(30, 330, 'F1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 330, 'F2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 330, 'F2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 330, 'F2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F2', 'yellow')
        }
        else {
         this.add.sprite(90, 330, 'F2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 330, 'F3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 330, 'F3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 330, 'F3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F3', 'yellow')
        }
        else {
         this.add.sprite(150, 330, 'F3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 330, 'F4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 330, 'F4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 330, 'F4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F4', 'yellow')
        }
        else {
         this.add.sprite(210, 330, 'F4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 330, 'F5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 330, 'F5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 330, 'F5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F5', 'yellow')
        }
        else {
         this.add.sprite(270, 330, 'F5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 330, 'F6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 330, 'F6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 330, 'F6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F6', 'yellow')
        }
        else {
         this.add.sprite(330, 330, 'F6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 330, 'F7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 330, 'F7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 330, 'F7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F7', 'yellow')
        }
        else {
         this.add.sprite(390, 330, 'F7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 330, 'F8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 330, 'F8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 330, 'F8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F8', 'yellow')
        }
        else {
         this.add.sprite(450, 330, 'F8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 330, 'F9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 330, 'F9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 330, 'F9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F9', 'yellow')
        }
        else {
         this.add.sprite(510, 330, 'F9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 330, 'F10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 330, 'F10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 330, 'F10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F10', 'yellow')
        }
        else {
         this.add.sprite(570, 330, 'F10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 330, 'F11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 330, 'F11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 330, 'F11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F11', 'yellow')
        }
        else {
         this.add.sprite(630, 330, 'F11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F11', 'black')
        }


        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 330, 'F12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 330, 'F12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 330, 'F12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F12', 'yellow')
        }
        else {
         this.add.sprite(690, 330, 'F12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 330, 'F13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 330, 'F13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 330, 'F13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F13', 'yellow')
        }
        else {
         this.add.sprite(750, 330, 'F13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 330, 'F14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 330, 'F14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 330, 'F14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F14', 'yellow')
        }
        else {
         this.add.sprite(810, 330, 'F14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 330, 'F15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('F15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 330, 'F15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('F15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 330, 'F15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('F15', 'yellow')
        }
        else {
         this.add.sprite(870, 330, 'F15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('F15', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 390, 'G1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 390, 'G1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 390, 'G1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G1', 'yellow')
        }
        else {
         this.add.sprite(30, 390, 'G1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 390, 'G2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 390, 'G2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 390, 'G2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G2', 'yellow')
        }
        else {
         this.add.sprite(90, 390, 'G2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 390, 'G3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 390, 'G3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 390, 'G3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G3', 'yellow')
        }
        else {
         this.add.sprite(150, 390, 'G3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 390, 'G4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 390, 'G4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 390, 'G4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G4', 'yellow')
        }
        else {
         this.add.sprite(210, 390, 'G4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 390, 'G5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 390, 'G5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 390, 'G5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G5', 'yellow')
        }
        else {
         this.add.sprite(270, 390, 'G5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 390, 'G6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 390, 'G6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 390, 'G6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G6', 'yellow')
        }
        else {
         this.add.sprite(330, 390, 'G6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 390, 'G7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 390, 'G7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 390, 'G7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G7', 'yellow')
        }
        else {
         this.add.sprite(390, 390, 'G7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 390, 'G8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 390, 'G8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 390, 'G8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G8', 'yellow')
        }
        else {
         this.add.sprite(450, 390, 'G8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 390, 'G9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 390, 'G9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 390, 'G9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G9', 'yellow')
        }
        else {
         this.add.sprite(510, 390, 'G9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 390, 'G10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 390, 'G10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 390, 'G10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G10', 'yellow')
        }
        else {
         this.add.sprite(570, 390, 'G10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 390, 'G11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 390, 'G11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 390, 'G11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G11', 'yellow')
        }
        else {
         this.add.sprite(630, 390, 'G11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 390, 'G12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 390, 'G12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 390, 'G12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G12', 'yellow')
        }
        else {
         this.add.sprite(690, 390, 'G12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 390, 'G13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 390, 'G13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 390, 'G13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G13', 'yellow')
        }
        else {
         this.add.sprite(750, 390, 'G13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 390, 'G14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 390, 'G14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 390, 'G14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G14', 'yellow')
        }
        else {
         this.add.sprite(810, 390, 'G14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 390, 'G15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('G15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 390, 'G15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('G15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 390, 'G15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('G15', 'yellow')
        }
        else {
         this.add.sprite(870, 390, 'G15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('G15', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(30, 450, 'H1')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H1', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 450, 'H1')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H1', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(30, 450, 'H1')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H1', 'yellow')
        }
        else {
         this.add.sprite(30, 450, 'H1')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H1', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 450, 'H2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 450, 'H2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 450, 'H2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H2', 'yellow')
        }
        else {
         this.add.sprite(90, 450, 'H2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 450, 'H3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 450, 'H3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 450, 'H3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H3', 'yellow')
        }
        else {
         this.add.sprite(150, 450, 'H3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 450, 'H4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 450, 'H4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 450, 'H4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H4', 'yellow')
        }
        else {
         this.add.sprite(210, 450, 'H4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 450, 'H5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 450, 'H5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 450, 'H5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H5', 'yellow')
        }
        else {
         this.add.sprite(270, 450, 'H5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 450, 'H6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 450, 'H6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 450, 'H6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H6', 'yellow')
        }
        else {
         this.add.sprite(330, 450, 'H6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 450, 'H7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 450, 'H7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 450, 'H7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H7', 'yellow')
        }
        else {
         this.add.sprite(390, 450, 'H7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 450, 'H8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 450, 'H8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 450, 'H8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H8', 'yellow')
        }
        else {
         this.add.sprite(450, 450, 'H8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 450, 'H9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 450, 'H9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 450, 'H9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H9', 'yellow')
        }
        else {
         this.add.sprite(510, 450, 'H9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 450, 'H10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 450, 'H10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 450, 'H10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H10', 'yellow')
        }
        else {
         this.add.sprite(570, 450, 'H10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 450, 'H11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 450, 'H11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 450, 'H11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H11', 'yellow')
        }
        else {
         this.add.sprite(630, 450, 'H11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 450, 'H12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 450, 'H12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 450, 'H12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H12', 'yellow')
        }
        else {
         this.add.sprite(690, 450, 'H12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 450, 'H13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 450, 'H13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 450, 'H13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H13', 'yellow')
        }
        else {
         this.add.sprite(750, 450, 'H13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 450, 'H14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 450, 'H14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 450, 'H14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H14', 'yellow')
        }
        else {
         this.add.sprite(810, 450, 'H14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 450, 'H15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('H15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 450, 'H15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('H15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 450, 'H15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('H15', 'yellow')
        }
        else {
         this.add.sprite(870, 450, 'H15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('H15', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(90, 510, 'I2')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I2', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 510, 'I2')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I2', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(90, 510, 'I2')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I2', 'yellow')
        }
        else {
         this.add.sprite(90, 510, 'I2')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I2', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(150, 510, 'I3')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I3', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 510, 'I3')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I3', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(150, 510, 'I3')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I3', 'yellow')
        }
        else {
         this.add.sprite(150, 510, 'I3')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I3', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(210, 510, 'I4')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I4', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 510, 'I4')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I4', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(210, 510, 'I4')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I4', 'yellow')
        }
        else {
         this.add.sprite(210, 510, 'I4')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I4', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(270, 510, 'I5')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I5', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 510, 'I5')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I5', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(270, 510, 'I5')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I5', 'yellow')
        }
        else {
         this.add.sprite(270, 510, 'I5')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I5', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(330, 510, 'I6')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I6', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 510, 'I6')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I6', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(330, 510, 'I6')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I6', 'yellow')
        }
        else {
         this.add.sprite(330, 510, 'I6')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I6', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(390, 510, 'I7')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I7', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 510, 'I7')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I7', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(390, 510, 'I7')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I7', 'yellow')
        }
        else {
         this.add.sprite(390, 510, 'I7')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I7', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(450, 510, 'I8')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I8', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 510, 'I8')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I8', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(450, 510, 'I8')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I8', 'yellow')
        }
        else {
         this.add.sprite(450, 510, 'I8')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I8', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(510, 510, 'I9')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I9', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 510, 'I9')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I9', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(510, 510, 'I9')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I9', 'yellow')
        }
        else {
         this.add.sprite(510, 510, 'I9')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I9', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(570, 510, 'I10')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I10', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 510, 'I10')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I10', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(570, 510, 'I10')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I10', 'yellow')
        }
        else {
         this.add.sprite(570, 510, 'I10')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I10', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(630, 510, 'I11')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I11', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 510, 'I11')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I11', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(630, 510, 'I11')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I11', 'yellow')
        }
        else {
         this.add.sprite(630, 510, 'I11')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I11', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(690, 510, 'I12')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I12', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 510, 'I12')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I12', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(690, 510, 'I12')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I12', 'yellow')
        }
        else {
         this.add.sprite(690, 510, 'I12')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I12', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(750, 510, 'I13')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I13', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 510, 'I13')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I13', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(750, 510, 'I13')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I13', 'yellow')
        }
        else {
         this.add.sprite(750, 510, 'I13')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I13', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(810, 510, 'I14')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I14', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 510, 'I14')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I14', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(810, 510, 'I14')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I14', 'yellow')
        }
        else {
         this.add.sprite(810, 510, 'I14')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I14', 'black')
        }

        if ((Phaser.Math.Between(1, 100)) <= 60)
        {
        this.add.sprite(870, 510, 'I15')
        .setTint(0x808080, 0x808080, 0x808080, 0x808080)
        this.data.set('I15', 'grey')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 510, 'I15')
         .setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
         this.data.set('I15', 'red')
        }
        else if ((Phaser.Math.Between(1, 100)) <= 50)
        {
         this.add.sprite(870, 510, 'I15')
         .setTint(0xffff00, 0xffff00, 0xffff00, 0xffff00)
         this.data.set('I15', 'yellow')
        }
        else {
         this.add.sprite(870, 510, 'I15')
         .setTint(0x18191a, 0x18191a, 0x18191a, 0x18191a)
         this.data.set('I15', 'black')
        }
        this.add.sprite(30, 510, 'I1')
        this.data.set('I1', 'white')

        this.add.sprite(870, 30, 'A15')
        .setTint(0x00ff00, 0x00ff00, 0x00ff00, 0x00ff00)
        .setDepth(2)
        this.data.set('A15', 'green')
    }
    update()
    {
        this.background.x = this.wagon.x
        this.background.y = this.wagon.y
        if (this.supplies < 0)
        {
            this.suppliesLabel.text = 0
        }
        if (this.crew <= 0)
        {
            this.crewLabel.text = 0
            setTimeout(() => {
                this.scene.start(TitleScreen)}, 500)
        }
        if (this.wagon.x == 870 && this.wagon.y == 30)
        {
            setTimeout(() => {
                this.scene.start(TitleScreen)}, 500)
        }
    }
    moveUpdate()
    {
        if (this.supplies > 0)
            {
                this.supplies -= this.crew
            }
            else {
                this.crew -= 1
            }
            this.suppliesLabel.text = this.supplies
            this.crewLabel.text = this.crew
    }
    arrowMove(Tile, xVal, yVal, xMov, yMov)
    {
        if ((this.wagon.x == xVal) && (this.wagon.y == yVal)) {
            if (this.data.get(Tile) == 'grey')
            {this.greytile()}
            else if (this.data.get(Tile) == 'red')
            {this.redtile()}
            else if (this.data.get(Tile) == 'yellow')
            {this.yellowtile()}
            else {
                this.wagon.y += yMov
                this.wagon.x -= xMov
            }
        } 
        if (this.wagon.x > 870)
        {
            this.wagon.x = 870
        }
        if (this.wagon.x < 30)
        {
            this.wagon.x = 30
        }
        if (this.wagon.y > 510)
        {
            this.wagon.y=510
        }
        if (this.wagon.y < 30)
        {
            this.wagon.y=30
        }
    }
    greytile()
    {
        if ((Phaser.Math.Between(1,12)) == 1)
        {
            console.log('Nothing Happened')
        }
        else if ((Phaser.Math.Between(1,11)) == 1)
        {
            console.log('Nothing Happened')
        }
        else if ((Phaser.Math.Between(1,10)) == 1)
        {
            console.log('Gain 1 crew')
            this.modifyResources(0, 1)
        }
        else if ((Phaser.Math.Between(1,9)) == 1)
        {
            console.log('Lose 1 crew')
            this.modifyResources(0, -1)
        }
        else if ((Phaser.Math.Between(1,8)) == 1)
        {
            console.log('Lose 1 crew, gain 2 supplies')
            this.modifyResources(2, -1)

        }
        else if ((Phaser.Math.Between(1,7)) == 1)
        {
            console.log('Gain 4 supplies')
            this.modifyResources(4, 0)
        }
        else if ((Phaser.Math.Between(1,6)) == 1)
        {
            console.log('Gain 8 supplies, lose 2 crew')
            this.modifyResources(8, -2)
        }
        else if ((Phaser.Math.Between(1,5)) == 1)
        {
            console.log('Gain 2 crew, lose 6 supplies')
            this.modifyResources(-6, 2)
        }
        else if ((Phaser.Math.Between(1,4)) == 1)
        {
            console.log('Lose 4 supplies')
            this.modifyResources(-4, 0)
        }
        else if ((Phaser.Math.Between(1,3)) == 1)
        {
            console.log('Surprise Shop!')
            this.box = this.add.sprite(470, 320, 'textBox')
        .setOrigin(.5)
        .setDepth(6)
        this.text1 = this.add.text(450, 270, "SURPRISE SHOP!", {
            fontFamily: Rye,
            fontSize: 35,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        this.text2 = this.add.text(300, 340, "Settlers for Supplies", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(4, -1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
        this.text3 = this.add.text(600, 340, "Supplies for Settlers", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(-3, 1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
        }
        else if ((Phaser.Math.Between(1,2)) == 1)
        {
            console.log('SURPRISE SCAM')
            this.box = this.add.sprite(470, 320, 'textBox')
        .setOrigin(.5)
        .setDepth(6)
        this.text1 = this.add.text(450, 270, "SURPRISE SCAM!", {
            fontFamily: Rye,
            fontSize: 35,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        this.text2 = this.add.text(300, 340, "Setlters for Supplies", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(1, -1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
        this.text3 = this.add.text(600, 340, "Suqplies fro Settlers", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(-6, 1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
        }
        else
        {
            console.log('Gain 1 Supply, Gain 1 crew')
            this.modifyResources(1, 1)
        }
    }
    redtile()
    {
        if ((Phaser.Math.Between(1,12)) == 1)
        {
            console.log('Gain 1 crew')
            this.modifyResources(0, 1)
        }
        else if ((Phaser.Math.Between(1,11)) == 1)
        {
            console.log('Gain 3 Supplies')
            this.modifyResources(3, 0)
        }
        else if ((Phaser.Math.Between(1,10)) == 1)
        {
            console.log('Gain 1 crew, lose 5 supplies')
            this.modifyResources(-5, 1)
        }
        else if ((Phaser.Math.Between(1,9)) == 1)
        {
            console.log('Gain 3 supplies, lose 1 crew')
            this.modifyResources(3, -1)
        }
        else if ((Phaser.Math.Between(1,8)) == 1)
        {
            console.log('Gain crew amount of supplies, lose 1 crew')
            this.modifyResources(this.crew, -1)
        }
        else if ((Phaser.Math.Between(1,7)) == 1)
        {
            console.log('Lose 1 crew, lose 4 supplies')
            this.modifyResources(-4, -1)
        }
        else if ((Phaser.Math.Between(1,6)) == 1)
        {
            console.log('Nothing Happens')
        }
        else if ((Phaser.Math.Between(1,5)) == 1)
        {
            console.log('lose 2 crew and 4 supplies')
            this.modifyResources(-4, -2)
        }
        else if ((Phaser.Math.Between(1,4)) == 1)
        {
            console.log('SURPRISE SCAM')
            this.box = this.add.sprite(470, 320, 'textBox')
        .setOrigin(.5)
        .setDepth(6)
        this.text1 = this.add.text(450, 270, "SURPRISE SCAM!", {
            fontFamily: Rye,
            fontSize: 35,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        this.text2 = this.add.text(300, 340, "Setlters for Supplies", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(1, -1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
        this.text3 = this.add.text(600, 340, "Suqplies fro Settlers", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(-6, 1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
        }
        else if ((Phaser.Math.Between(1,3)) == 1)
        {
            console.log('lose 2 crew, gain 4 supplies')
            this.modifyResources(4, -2)
        }
        else if ((Phaser.Math.Between(1,2)) == 1)
        {
            console.log('lose 1 crew, lose 1 supply')
            this.modifyResources(-1, -1)
        }
        else
        {
            console.log('lose 5 supplies')
            this.modifyResources(-5, 0)
        }
    }
    yellowtile()
    {
        this.box = this.add.sprite(470, 320, 'textBox')
        .setOrigin(.5)
        .setDepth(6)
        this.text1 = this.add.text(450, 270, "It's bargaining time!", {
            fontFamily: Rye,
            fontSize: 35,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        this.text2 = this.add.text(300, 340, "Settlers for Supplies", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(3, -1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
        this.text3 = this.add.text(600, 340, "Supplies for Settlers", {
            fontFamily: Rye,
            fontSize: 22,
            color: '#050505'
        })
        .setDepth(9)
        .setOrigin(.5)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.modifyResources(-4, 1)
            this.box.setVisible(false)
            this.text1.setVisible(false)
            this.text2.setVisible(false)
            .removeInteractive()
            this.text3.setVisible(false)
            .removeInteractive()
        })
    }
    modifyResources(supplyMod, crewMod)
    {
        this.supplies += supplyMod
            this.suppliesLabel.text = this.supplies
            this.crew += crewMod
            this.crewLabel.text = this.crew
    }
}