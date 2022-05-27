import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  private API_SERVER = "http://localhost:8080/estadisticas/";

  constructor(private httpClient: HttpClient) { }

  public getValorEsperadoPromedio(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "getValorEsperadoPromedio");

  }

  public getValorPromedioFinanciado(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "getValorPromedioFinanciado");
  }

}
