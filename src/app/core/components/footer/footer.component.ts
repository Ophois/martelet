import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { BehaviorSubject } from 'rxjs';
import { ProverbeService } from '../../services/proverbe.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public proverbe!: string;
  public madate = dayjs().format('YYYY');
  /* version$: le $ parce que c'est un observable.
               le ! parce que sans valeur au moment de la définition */
  public version$!: BehaviorSubject<number>;

  constructor(private vs: VersionService, private pvb: ProverbeService) {
    this.version$ = this.vs.version$;
  }
  ngOnInit(): void {
    this.proverbe = this.pvb.afficher();
  }

}
