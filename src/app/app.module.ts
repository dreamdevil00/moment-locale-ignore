import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MomentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
