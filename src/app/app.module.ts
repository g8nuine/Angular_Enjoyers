import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {KnihaZoznamComponent} from "./kniha-zoznam/kniha-zoznam.component";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {KnihaFormularComponent} from "./kniha-formular/kniha-formular.component";

@NgModule({
  declarations: [
    AppComponent,
    KnihaFormularComponent,
    KnihaZoznamComponent,
    KnihaStrankaComponent,
    KnihaFormularComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
