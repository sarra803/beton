import { ChantierService } from './../chantier.service';
import { Chantier } from './../model/chantier.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom-chantier',
  templateUrl: './recherche-par-nom-chantier.component.html',
  styles: [
  ]
})
export class RechercheParNomChantierComponent implements OnInit {
 chantiers:Chantier[];
  constructor(private chantierSerice:ChantierService) { }

  ngOnInit(): void {
    this.chantiers=this.chantierSerice.listeChantiers();
  }

}
