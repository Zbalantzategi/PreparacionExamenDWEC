import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Usuario} from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  urlApi:string = 'https://mockoon.maescloud.duckdns.org/users';

  constructor(private http: HttpClient) {
  }

  getUsuarios():Observable<any> {
  return this.http.get(this.urlApi);
  }

  postUsuarios(user:Usuario):Observable<any> {
    return this.http.post(this.urlApi, user);
  }

  putUsuarios(id:string, user:Usuario):Observable<any> {
    return this.http.post(`${this.urlApi}/${id}`, user);
  }

  deleteUsuarios(id:string):Observable<any> {
    return this.http.delete(`${this.urlApi}/${id}`);
  }


}
