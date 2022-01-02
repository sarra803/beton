import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styles: [
  ]
})
export class UpdateClientComponent implements OnInit {

  currentClient = new Client();
  constructor(private activatedRoute: ActivatedRoute,
    private clientService: ClientService,private router:Router) { }
    

  ngOnInit(): void {
    this.currentClient = this.clientService.consulterClient(this.activatedRoute.snapshot.params.id);
console.log(this.currentClient);

  }
  updateClient()
{ //console.log(this.currentProduit);
this.clientService.updateClient(this.currentClient);
this.router.navigate(['clients']);

}


}
