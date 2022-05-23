import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API_SERVER = "http://localhost:8080/user/";

  constructor(private httpClient: HttpClient) { }

  public getAllUsuarios(): Observable<any> {
   return this.httpClient.get(this.API_SERVER);
  }

  public addUsuario(usuario: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/user/addUser", usuario);
  }
}
