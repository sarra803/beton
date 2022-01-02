import { Component, OnInit } from '@angular/core';
import { ChantierService } from '../chantier.service';
import { Chantier } from '../model/chantier.model';

@Component({
  selector: 'app-chantier',
  templateUrl: './chantier.component.html',
  styleUrls: ['./chantier.component.css']
})
export class ChantierComponent implements OnInit {
  chantiers : Chantier[];
  constructor(private chantierService :ChantierService) {
    this.chantiers = chantierService.listeChantiers();
   }

  ngOnInit(): void {
  }

}
