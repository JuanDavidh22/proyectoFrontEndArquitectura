import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  private API_SERVER = "http://localhost:8080/donacion/";
  
  constructor(private httpClient: HttpClient) { }

  public getAllDonacion(): Observable<any> {
   return this.httpClient.get(this.API_SERVER);
  }

  public addDonacion(donacion: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "addDonacion", donacion);
  }

  public getDonacionPorUsuario(donacion: String): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "getDonaciones/" + donacion);
  }
}
