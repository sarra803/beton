import { Component, OnInit } from '@angular/core';
import { ChantierService } from '../chantier.service';
import { Chantier } from '../model/chantier.model';

@Component({
  selector: 'app-add-chantier',
  templateUrl: './add-chantier.component.html',
  styleUrls: ['./add-chantier.component.css']
})
export class AddChantierComponent implements OnInit {
newChantier = new Chantier();
  constructor(private chantierService :ChantierService) { }

  
  addChantier(){
    //console.log(this.newChantier);
    this.chantierService.ajouterChantier(this.newChantier);
    }

    ngOnInit(): void {
    }
}
