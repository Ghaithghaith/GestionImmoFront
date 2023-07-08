import { Component, OnInit } from '@angular/core';
import {ContratService} from '../../services/contrat.service';
import {Router} from '@angular/router';
import {Contrat} from '../../modules/Contrat';


@Component({
  selector: 'app-ajout-contrat',
  templateUrl: './ajout-contrat.component.html',
  styleUrls: ['./ajout-contrat.component.scss']
})
export class AjoutContratComponent implements OnInit {

  constructor(private contrat: ContratService) { }
  ngOnInit(): void {
  }
  save(c){
    this.contrat.addcontrat(c).subscribe(
      () => {
        alert('c bonn');
      }
    );
  }


}
