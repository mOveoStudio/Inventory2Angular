export class LevelState extends Phaser.State {
    constructor(private events) {
        super();
    }

    preload() {
        this.game.load.image('seed', '../../../assets/images/seed.png');
    }

    create() {
        this.stage.setBackgroundColor("0xceea8b");
        this.game.input.onDown.add(this.jump, this);
    }

    jump(evt) {
        this.game.add.sprite(evt.x - 16, evt.y - 16, 'seed');
        this.events.onClick.dispatch(evt);
    }
}