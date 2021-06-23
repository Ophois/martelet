import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public version$ = new BehaviorSubject(1);

  constructor() { }

  // on ajoute 1 à la version et on la réinjecte dans l'Observable
  public incrementVersion() : void {
    this.version$.next(this.version$.value + 1);
  }
}
