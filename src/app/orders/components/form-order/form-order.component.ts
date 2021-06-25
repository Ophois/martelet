import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';


@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() init!: Order;
  @Output() submitted: EventEmitter<Order> = new EventEmitter<Order>();
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  //liste des clients pour menu déroulant (tableau vide)
  // public clients!: Clients[];
  public clients: Client[] = [];

  constructor(private fb: FormBuilder,
              private clientService: ClientsService) {
    //récupération de la liste des clients
    clientService.collection.subscribe((data) => {
      //console.log(data);
      //this.clients = data;
      //parcours des données récupérées depuis l'API
      data.forEach((element) => {
        //console.log(element.state);
        //si state <> INACTIVE, on ajoute dans le tableau qui servira au Select
        if(element.state !== 'INACTIVE') this.clients.push(element);
      });

    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      comment: [this.init.comment],
      id: [this.init.id]
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }

}
