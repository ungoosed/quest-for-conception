import { Level } from "./level"
import { Hud } from "./hud"
import { Dead } from "./death"
import { Boot } from "./boot"
export class Load extends Phaser.Scene {
    constructor() {
        super({ key: 'load' })
    }

    create() {
        this.scene.add('level', Level)
        this.scene.add('hud', Hud)
        this.scene.add('dead', Dead)
        this.scene.add('boot', Boot)
        this.scene.start('boot')

    }
}
