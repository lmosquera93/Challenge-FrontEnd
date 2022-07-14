import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travels } from '../models/travels';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  API_URI = 'https://localhost:44309';
  list: Travels[];

  constructor( private http: HttpClient) { }

  createTravel(travels: Travels) : Observable<Travels> {
    return this.http.post<Travels>(`${this.API_URI}/travels`, travels);
  }

  listTravels() {
    return this.http.get(`${this.API_URI}/travels`).toPromise().then(data => {
      this.list = data as Travels[];
    });
  }

  eliminarTravel(id: number) : Observable<Travels> {
    return this.http.delete<Travels>(`${this.API_URI}/travels/`+ id);
  }

  updateTravel(id: number, travel: Travels) : Observable<any> {
    return this.http.put(`${this.API_URI}/travels/`+ id, travel);
  }

}
