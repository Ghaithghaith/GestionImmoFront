import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../services/Reclamationservice/reclamation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContratService} from '../../services/contrat.service';

@Component({
  selector: 'app-supprimer-reclamation',
  templateUrl: './supprimer-reclamation.component.html',
  styleUrls: ['./supprimer-reclamation.component.scss']
})
export class SupprimerReclamationComponent implements OnInit {

  id!: any;
  constructor(private service: ReclamationService,
              private acr: ActivatedRoute,
              private r: Router) { }

  ngOnInit(): void {
    this.id = this.acr.snapshot.params.id;

    this.service.deleteReclamation(this.id).subscribe(
      () => {
        alert('deleted');
        this.r.navigate(['admin/listreclamations']);
      },
      (error) => {
        alert('error');
      }
    );
  }

}
