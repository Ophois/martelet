import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent implements OnInit {

  public titre: string = "Accueil";
  private nb: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeTitre() {
    this.nb++;
    this.titre= `J'ai changé le titre ${this.nb} fois`;
  }

}
