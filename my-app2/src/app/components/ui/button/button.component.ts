import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent{

  @Input() theme: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';
  @Input() type: 'submit' | 'button' | 'reset' = 'button';

  @Output() changeInfo = new EventEmitter();
  constructor() {
  }

  handleClick(): void{
    this.changeInfo.emit();
  }
}
