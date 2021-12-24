import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./pages/search/search.component";
import {AboutFilmComponent} from "./pages/about-film/about-film.component";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'film/:id',
    component: AboutFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
