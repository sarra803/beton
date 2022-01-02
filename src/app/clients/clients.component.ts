import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Chantier } from '../model/chantier.model';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients : Client[];
  chantiers:Chantier[];
  constructor(private clientService : ClientService) { 
    this.clients = clientService.listeClients();
  }

  ngOnInit(): void {
  }

}
