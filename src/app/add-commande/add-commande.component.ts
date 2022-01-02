import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from '../model/commande.model';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
newCommande =new Commande();
  constructor(private commandeService : CommandeService) { }

  ngOnInit(): void {
  }
  addCommande(){
    this.commandeService.ajouterCommandes(this.newCommande);
    }

}
