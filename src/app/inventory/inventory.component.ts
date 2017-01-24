import { Component, OnInit } from '@angular/core';
import {InventoryService} from "./../inventory.service";

@Component({
    selector: 'inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
    private inventoryService:InventoryService;
    currentItem:number;
    combineSeeds:{};
    seeds:{};

    constructor(inventoryService: InventoryService){
        this.inventoryService = inventoryService;

        this.combineSeeds = {};
    }

    ngOnInit():void {
        this.inventoryService.currentSeedIdChanged.subscribe(value=>this.currentItem = value);
        this.inventoryService.seedsChanged.subscribe(seeds=>this.seeds = seeds);

        this.currentItem = this.inventoryService.currentSeedId;

        this.inventoryService.getSeedsList().then(seeds => this.seeds = seeds);
    }

    changeCurrentItem(item) {
        this.inventoryService.currentSeedId = item.id;
    }

    combine(seeds) {
        let seedIds = [];
        for (let seed in seeds) {
            if(seeds[seed]){
                seedIds.push(seed);
            }
        }
        this.inventoryService.combineSeed(seedIds);
    }
}
