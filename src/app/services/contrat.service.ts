import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrat} from '../modules/Contrat';

const USR_API = 'http://localhost:8086/pi/contrat';
@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) {
  }

  listContrat(): Observable<Contrat[]>{
    return this.http.get<Contrat[]>(  'http://localhost:8086/pi/contrat/retrieve-all-contrats');
  }
  retrieveContrat(id: any){
    return this.http.get<Contrat>('http://localhost:8086/pi/contrat/retrieve-contrat/' + id);

  }

  addcontrat(c){
    return this.http.post('http://localhost:8086/pi/contrat/add-contrat', c);
  }

  deleteContrat(id: any){
    return this.http.delete<Contrat>('http://localhost:8086/pi/contrat/remove-contrat/' + id);
  }
  updateContrat( data: any){
    return this.http.put<Contrat>('http://localhost:8086/pi/contrat/modify-contrat', data);
  }

  Export() {
    return this.http.get('http://localhost:8086/pi/contrat/export', {
      responseType: 'text'
    });
  }
  Average() {
    return this.http.get('http://localhost:8086/pi/contrat/average');
  }
  Count() {
    return this.http.get('http://localhost:8086/pi/contrat/count');
  }
}
