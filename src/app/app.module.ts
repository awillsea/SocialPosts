import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThoughtDetailsComponent } from './thought-details/thought-details.component';
import { ThoughtListComponent } from './thought-list/thought-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThoughtDetailsComponent,
    ThoughtListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
