import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from "./inventory.service";
import { GameComponent } from "./game/game.component";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        InventoryComponent,
        GameComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [InventoryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
