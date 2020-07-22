import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArrowDivDirective } from './arrow-div.directive';
import {KeyBoardService} from './keyboard.service'


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ArrowDivDirective ],
  providers:[KeyBoardService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
