import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContratService} from '../../services/contrat.service';
import {Contrat} from '../../modules/Contrat';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-modifier-contrat',
  templateUrl: './modifier-contrat.component.html',
  styleUrls: ['./modifier-contrat.component.scss']
})
export class ModifierContratComponent implements OnInit {


  contrat = new Contrat();
  contratUpdate = new Contrat();

  formContrat: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private contratService: ContratService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formContrat = this.formBuilder.group({
      titre: [null, Validators.required],
      description: [null, Validators.required],
    });
    this.route.paramMap.subscribe(
      params => {
        const selectedId = params.get('idContrat');
        console.log(selectedId);
        if (selectedId) {
          this.contratService.retrieveContrat(selectedId).subscribe(comp => {
            this.contrat = comp;
            console.log(this.contrat);
          });

        }
      }
    );
    console.log(this.contrat);
  }
  updateContrat(data: any){
    console.log(data);
    this.contratUpdate = this.formContrat.value;
    this.contratUpdate.idContrat = this.contrat.idContrat;
    this.contratService.updateContrat(this.contratUpdate).subscribe(
      () => {
        console.log('updated');
      }
    );
  }
}
