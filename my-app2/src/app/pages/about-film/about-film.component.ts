import {Component, OnInit, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ToggleComponent} from "../../components/ui/toggle/toggle.component";
import {ActivatedRoute, Router} from "@angular/router";

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
export class AboutFilmComponent implements OnInit {
  isFilmSearch: boolean = true;
  formSwitch: FormGroup;
  constructor(private fb: FormBuilder) {



    this.formSwitch = this.fb.group({
      toggle: [true]
    })
  }

  ngOnInit(): void {
  }

}
