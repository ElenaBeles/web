import {Component, OnInit, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ToggleComponent} from "../../components/ui/toggle/toggle.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Film, FilmsService, MockFilms} from "../../services/films.service";

@Component({
  selector: 'app-about-film',
  templateUrl: './about-film.component.html',
  styleUrls: ['./about-film.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class AboutFilmComponent{
  formFilmInfo: FormGroup;
  formSwitch: FormGroup;

  currentFilm: Film | undefined = {
    id: 0,
    title: "000",
    year: 0,
    description: "что-нибудь",
    genre: "ужасы",
    image: "/assets/img/minari.svg"
  };

  isFilmSearch: boolean = true;
  constructor(private fb: FormBuilder,
              private  router: Router,
              private  route: ActivatedRoute,
              private filmService: FilmsService,
              private cdr: ChangeDetectorRef) {

    this.route.params.subscribe(params => {
      this.route.params.subscribe(params => {
        this.currentFilm = MockFilms.find(film => film.id === +params['id']);
        this.cdr.markForCheck;
      })
    })

    this.formSwitch = this.fb.group({
      toggle: [true]
    })

    this.formSwitch.valueChanges.subscribe(res => {
        this.isFilmSearch = res.toggle;
      }
    )

    this.formFilmInfo = this.fb.group({
        addFilmInput__title: [this.currentFilm?.title],
        addFilmInput__year: [this.currentFilm?.year],
        addFilmInput__description: [this.currentFilm?.description],
        addFilmInput__genres: [this.currentFilm?.genre]
      }
    )
  }

  addInfoFilm(ev: any):void {
    this.filmService.addFilm(
      String(this.formFilmInfo.get("addFilmInput__title")),
      String(this.formFilmInfo.get("addFilmInput__year")),
      String(this.formFilmInfo.get("addFilmInput__description")),
      String(this.formFilmInfo.get("addFilmInput__genres"))
    )
    this.isFilmSearch = true
  }
}
