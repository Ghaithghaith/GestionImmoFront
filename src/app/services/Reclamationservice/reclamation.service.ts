import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrat} from '../../modules/Contrat';
import {Reclamation} from '../../modules/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) {
  }

  listReclamation(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>('http://localhost:8086/pi/reclamation/retrieve-all-reclamations');
  }
  retrieveReclamation(id: any){
    return this.http.get<Reclamation>('http://localhost:8086/pi/reclamation/retrieve-reclamation/' + id);
  }

  addreclamation(r){
    return this.http.post('http://localhost:8086/pi/reclamation/add-reclamation', r);
  }
  deleteReclamation(id: any){
    return this.http.delete<Reclamation>('http://localhost:8086/pi/reclamation/remove-reclamation/' + id);
  }
  updateReclamation( data: any){
    return this.http.put<Reclamation>('http://localhost:8086/pi/reclamation/modify-reclamation', data);
  }
  Count() {
    return this.http.get('http://localhost:8086/pi/reclamation/count');
  }
  Average() {
    return this.http.get('http://localhost:8086/pi/reclamation/average');
  }
  Export() {
    return this.http.get('http://localhost:8086/pi/reclamation/export', {
      responseType: 'text'
    });
  }
}
