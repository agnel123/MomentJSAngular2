import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeAgoComponent } from './timeago.component';

import {MomentModule} from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoComponent
  ],
  imports: [
    BrowserModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
