/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts" />

import { Component, OnInit } from '@angular/core';
import {InventoryService} from "./../inventory.service";
import {Game} from "./game";

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit{

    private inventoryService:InventoryService;
    private game:Game;

    constructor(inventoryService: InventoryService){
        this.inventoryService = inventoryService;
    }

    onClick(){
        console.log(this.inventoryService.currentSeedId);
    }

    ngOnInit():void {
        this.game = new Game();
        this.game.events.onClick.add((e)=>{
            console.log("Place seed #" + this.inventoryService.currentSeedId + " in {" + e.x + "," + e.y + "}");
        })
    }
}