import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../model/commande.model';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styles: [
  ]
})
export class UpdateCommandeComponent implements OnInit {

  currentCommande = new Commande();
  constructor(private activatedRoute: ActivatedRoute,
    private commandeService: CommandeService,private router :Router)

     { }
    

  ngOnInit(): void {
    this.currentCommande = this.commandeService.consulterCommande(this.activatedRoute.snapshot.params.id);
console.log(this.currentCommande);

  }
  updateCommande()
  { //console.log(this.currentProduit);
  this.commandeService.updateCommande(this.currentCommande);
  this.router.navigate(['commandes']);

  }
  
}
