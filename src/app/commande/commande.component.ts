import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Client } from '../model/client.model';
import { Commande } from '../model/commande.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
clients : Client[];
commandes : Commande[];
  constructor(private commandeService : CommandeService) { 
    this.commandes = commandeService.listeCommandes();
  }

  ngOnInit(): void {
  }

}
