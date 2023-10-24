import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackwardStringPipe } from './shared/pipes/backward-string.pipe';
import { SlotComponent } from './components/slot/slot.component';

@NgModule({
  declarations: [
    AppComponent,
    BackwardStringPipe,
    SlotComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
