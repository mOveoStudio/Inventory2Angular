import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

    private _currentSeedId:number;

    private _currentSeedIdChanged = new Subject<number>();
    private _seedsChanged = new Subject<[any]>();

    public currentSeedIdChanged = this._currentSeedIdChanged.asObservable();
    public seedsChanged = this._seedsChanged.asObservable();

    get currentSeedId():number {
        return this._currentSeedId;
    }

    set currentSeedId(value:number) {
        this._currentSeedId = value;
        this._currentSeedIdChanged.next(value);
    }

    combineSeed(seeds:number[]):void {
        console.log(seeds, this._currentSeedId);
    }

    getSeedsList():Promise<any> {
        return Promise.resolve([
            {id: 0, name: "attack", nb: 4},
            {id: 1, name: "victory", nb: 4},
            {id: 2, name: "growth", nb: 4},
            {id: 3, name: "fertility", nb: 4},
            {id: 4, name: "growth", nb: 4},
            {id: 5, name: "defense", nb: 2}
        ]);
    }

}