import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface Film {
  id: number,
  title: string,
  year: number,
  description: string,
  genre?: string,
  image: string
}

export const MockFilms: Array<Film> = [
  {
    id: 1,
    title: "Минари",
    year: 2020,
    description: "что-нибудь",
    genre: "ужасы",
    image: "/assets/img/minari.svg"
  },
  {
    id: 2,
    title: "Довод",
    year: 2020,
    description: "что-нибудь",
    genre: "ужасы",
    image: "/assets/img/tenet.svg"
  },
  {
    id: 3,
    title: "Довлатов",
    year: 2019,
    description: "что-нибудь",
    genre: "ужасы",
    image: "/assets/img/dovlatov.svg"
  }
]


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  films$: BehaviorSubject<Array<Film>> = new BehaviorSubject<Array<Film>>([])

  searchFilm(filmName: string): void {
    if( !filmName || filmName.length < 1) {
      this.films$.next([])
    }

    const value = MockFilms.filter(film => film.title.startsWith(filmName))

    this.films$.next(value)
  }

  clean(): void {
    this.films$.next([])
  }

  id: number = 4;
  addFilm(title: string, year: string, description: string, genres?: string): void {
    MockFilms.push(
      {
        id: this.id,
        title: title,
        year: Number(year),
        description: description,
        genre: genres,
        image: "/assets/img/minari.svg"
      }
    )
    this.id++;
  }
}
