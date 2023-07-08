import { Component, OnInit } from '@angular/core';
import {ContratService} from '../../services/contrat.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-supprimer-contrat',
  templateUrl: './supprimer-contrat.component.html',
  styleUrls: ['./supprimer-contrat.component.scss']
})
export class SupprimerContratComponent implements OnInit {
  id!: any;
  constructor(private service: ContratService,
              private acr: ActivatedRoute,
              private r: Router) { }

  ngOnInit(): void {
    this.id = this.acr.snapshot.params.id;

    this.service.deleteContrat(this.id).subscribe(
      () => {
        alert('deleted');
        this.r.navigate(['admin/listcontrats']);
      },
      (error) => {
        alert('error');
      }
    );
  }

}
