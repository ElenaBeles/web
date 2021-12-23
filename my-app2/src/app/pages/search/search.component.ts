import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ToggleComponent} from "../../components/ui/toggle/toggle.component";
import {Film, FilmsService} from "../../services/films.service";
import {delay, distinctUntilChanged} from "rxjs";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class SearchComponent {
  isFilmSearch: boolean = true;

  formSwitch: FormGroup;
  form: FormGroup;
  formFilmInfo: FormGroup;

  films$ = this.filmService.films$;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmsService) {
    this.formSwitch = this.fb.group({
      toggle: [true]
    })

    this.formSwitch.valueChanges.subscribe(res => {
      this.isFilmSearch = res.toggle;
      }
    )

    this.form = this.fb.group({
      searchInput: []
      }
    )

    this.form.get("searchInput")?.valueChanges
      .pipe(
        delay(100),
        distinctUntilChanged()
      )
      .subscribe(res =>
      this.filmService.searchFilm(res)
    )

    this.formFilmInfo = this.fb.group({
      addFilmInput__title: [],
      addFilmInput__year: [],
      addFilmInput__description: []
      }
    )
  }

  deleteSearchInput():void {
    this.filmService.clean();
    this.form.get("searchInput")?.reset();
  }

  addFilm():void {
    this.filmService.addFilm(
      String(this.formFilmInfo.get("addFilmInput__title")),
      String(this.formFilmInfo.get("addFilmInput__year")),
      String(this.formFilmInfo.get("addFilmInput__description"))
    )
  }
}
