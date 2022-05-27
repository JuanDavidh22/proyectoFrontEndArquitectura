import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private API_SERVER = "http://localhost:8080/proyect/";
  
  constructor(private httpClient: HttpClient) { }

  public getAllProyects(): Observable<any> {
   return this.httpClient.get(this.API_SERVER);
  }

  public addProyect(usuario: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "addProyect/", usuario);
  }

  public cambiarEstado(cambioEstado: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "cambiarEstado/", cambioEstado);
  }
}
