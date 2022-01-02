import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChantierService } from '../chantier.service';
import { Chantier } from '../model/chantier.model';

@Component({
  selector: 'app-update-chantier',
  templateUrl: './update-chantier.component.html',
  styles: [
  ]
})
export class UpdateChantierComponent implements OnInit {
  currentChantier = new Chantier();
  constructor(private activatedRoute: ActivatedRoute,
    private chantierService: ChantierService,private router :Router) { }
    

  ngOnInit(): void {
    this.currentChantier = this.chantierService.consulterChantier(this.activatedRoute.snapshot.params.id);
console.log(this.currentChantier);

  }
 
  updateChantier()
  { //console.log(this.currentProduit);
  this.chantierService.updateChantier(this.currentChantier);
  this.router.navigate(['chantiers']);
  }
}
