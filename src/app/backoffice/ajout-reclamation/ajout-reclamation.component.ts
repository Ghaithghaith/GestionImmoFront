import { Component, OnInit } from '@angular/core';
import {ContratService} from '../../services/contrat.service';
import {ReclamationService} from '../../services/Reclamationservice/reclamation.service';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.scss']
})
export class AjoutReclamationComponent implements OnInit {

  constructor(private reclamation: ReclamationService) { }
  ngOnInit(): void {
  }
  save(r){
    this.reclamation.addreclamation(r).subscribe(
      () => {
        alert('c bonn');
      }
    );
  }

}
