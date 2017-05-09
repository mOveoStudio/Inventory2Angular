import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class InventoryService {

    private _currentSeedId:number;
    private _socket;

    private _currentSeedIdChanged = new Subject<number>();
    private _seedsChanged = new Subject<[any]>();

    public currentSeedIdChanged = this._currentSeedIdChanged.asObservable();
    public seedsChanged = this._seedsChanged.asObservable();

    constructor(){
        this._socket = io("http://localhost:3000");
        this._socket.on('update-inventory', this.getSeeds.bind(this));
    }

    getSeeds(seeds){
        console.log(seeds);
        this._seedsChanged.next(seeds)
    }

    get currentSeedId():number {
        return this._currentSeedId;
    }

    set currentSeedId(value:number) {
        this._currentSeedId = value;
        this._currentSeedIdChanged.next(value);
    }

    combineSeed(seeds:number[]):void {
        this._socket.emit('combineSeeds', seeds);
        console.log(seeds, this._currentSeedId);
    }

    addSeed(cuurentSeed):void {
        this._socket.emit('add-seed', cuurentSeed);
    }
}