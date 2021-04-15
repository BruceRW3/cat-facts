import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatSpeciesComponent } from './cat-species/cat-species.component';
import { CatSpecieComponent } from './cat-specie/cat-specie.component';

@NgModule({
  declarations: [
    AppComponent,
    CatSpeciesComponent,
    CatSpecieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
