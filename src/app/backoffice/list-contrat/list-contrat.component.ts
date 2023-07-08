import { Component, OnInit } from '@angular/core';
import {Contrat} from '../../modules/Contrat';
import {Router} from '@angular/router';
import {ContratService} from '../../services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.scss']
})
export class ListContratComponent implements OnInit {
  searchText;
  average!: any;
  count!: any;
  export!: any;
  contrats: Contrat[];
  constructor( private route: Router , private contratService: ContratService ) {}
    ngOnInit(): void {
      this.contratService.listContrat().subscribe((data: Contrat[]) => {
        this.contrats = data;
        console.log(data);
      });
  }
 save2(){
    this.contratService.Export().subscribe(
      (data) => {
        alert(data);
        console.log(data);
        this.route.navigate(['admin/listcontrats']);
      }
    );
  }
  save(){
    this.contratService.Count().subscribe(
      (data) => {
        alert(data);
        console.log(data);
        this.route.navigate(['admin/listcontrats']);
      }
    );
  }
  save3(){
    this.contratService.Average().subscribe(
      (data) => {
        alert(data);
        console.log(data);
        this.route.navigate(['admin/listcontrats']);
      }
    );
  }

  downloadContrats() {
    this.contratService.Export().subscribe(
      (csvContent: string) => {
        this.downloadFile(csvContent, 'contrats.csv');
      },
      (error) => {
        console.error('Error exporting contrats', error);
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
