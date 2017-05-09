import {LevelState} from "./level-state";
import Signal = Phaser.Signal;

export class Game extends Phaser.Game{
    levelState;
    events = {
        onClick:null
    };


    constructor(){
        //noinspection TypeScriptValidateTypes
        super(800, 600, Phaser.AUTO, 'game-content', null);
        this.levelState = this.state.add('Level', new LevelState(this.events));
        this.state.start('Level');

        //levelState
        this.events.onClick = new Signal();
    }
}
