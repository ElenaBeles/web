import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { ToggleComponent } from './components/ui/toggle/toggle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import { AboutFilmComponent } from './pages/about-film/about-film.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ButtonComponent,
    HeaderComponent,
    ToggleComponent,
    GenreSearchComponent,
    AboutFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
