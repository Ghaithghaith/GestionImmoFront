import { Component, OnInit } from '@angular/core';
import {Contrat} from '../../modules/Contrat';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ContratService} from '../../services/contrat.service';
import {Reclamation} from '../../modules/Reclamation';
import {ReclamationService} from '../../services/Reclamationservice/reclamation.service';

@Component({
  selector: 'app-modifier-reclamation',
  templateUrl: './modifier-reclamation.component.html',
  styleUrls: ['./modifier-reclamation.component.scss']
})
export class ModifierReclamationComponent implements OnInit {

  reclamation = new Reclamation();
  reclamationUpdate = new Reclamation();

  formReclamation: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private reclamationService: ReclamationService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formReclamation = this.formBuilder.group({
      status: [null, Validators.required],
      description: [null, Validators.required],
    });
    this.route.paramMap.subscribe(
      params => {
        const selectedId = params.get('idReclamation');
        console.log(selectedId);
        if (selectedId) {
          this.reclamationService.retrieveReclamation(selectedId).subscribe(comp => {
            this.reclamation = comp;
            console.log(this.reclamation);
          });

        }
      }
    );
    console.log(this.reclamation);
  }
  updateReclamation(data: any){
    console.log(data);
    this.reclamationUpdate = this.formReclamation.value;
    this.reclamationUpdate.idReclamation = this.reclamation.idReclamation;
    this.reclamationService.updateReclamation(this.reclamationUpdate).subscribe(
      () => {
        console.log('updated');
      }
    );
  }

}
