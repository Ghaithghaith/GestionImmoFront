import { Component, OnInit , Pipe} from '@angular/core';
import {ReclamationService} from '../../services/Reclamationservice/reclamation.service';
import {Router} from '@angular/router';
import {ContratService} from '../../services/contrat.service';
import {Contrat} from '../../modules/Contrat';
import {Reclamation} from '../../modules/Reclamation';


@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.scss']
})
export class ListReclamationComponent implements OnInit {
  searchText;
  export!: any;
  average!: any;
 count!: any;
  reclamations!: any;
  constructor( private route: Router , private reclamationService: ReclamationService ) {}
  ngOnInit(): void {
    this.reclamationService.listReclamation().subscribe((data: Reclamation[]) => {
      this.reclamations = data;
      console.log(data);
    });
  }
  save(){
    this.reclamationService.Count().subscribe(
      (data) => {
        alert(data);
        console.log(data);
        this.route.navigate(['admin/listreclamations']);
      }
    );
  }

  save1(){
    this.reclamationService.Average().subscribe(
      (data) => {
        alert(data);
        console.log(data);
        this.route.navigate(['admin/listreclamations']);
      }
    );
  }
  downloadReclamations() {
    this.reclamationService.Export().subscribe(
      (csvContent: string) => {
        this.downloadFile(csvContent, 'reclamations.csv');
      },
      (error) => {
        console.error('Error exporting reclamations', error);
      }
    );
  }

  downloadFile(content: string, filename: string) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
