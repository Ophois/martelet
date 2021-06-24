import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState!: string;
  //binder la propriété "class" de l'élément "td"
  @HostBinding('class') tdClassName!: string;

  constructor() { }

  ngOnChanges() {
    this.tdClassName = `state-${this.appState.toLocaleLowerCase()}`
  }
}
// si appState vaut CANCELED => state-canceled
// si appState vaut OPTION => state-option
// si appState vaut CONFIRMED => state-confirmed
