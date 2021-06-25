import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public item$!: Observable<Client>;

  constructor(private clientService: ClientsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.item$ = this.clientService.getItemById(id);
    });
  }

  //mise à jour du client après soumission du formulaire
  edit(item: Client): void {
    this.clientService.update(item).subscribe((rep) => {
      //retour à la liste des clients
      this.router.navigate(['clients']);
    })
  }

  ngOnInit(): void {
  }

}
