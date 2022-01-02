import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
 newClient =new Client();
  constructor(private clientService : ClientService) {
   }

  ngOnInit(): void {
  }
  addClient(){
    this.clientService.ajouterClient(this.newClient);
    }
}
