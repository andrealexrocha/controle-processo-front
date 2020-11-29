import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  private baseUrl = `${environment.apiUrl}/beneficios`;

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  salvar(beneficio: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/salvar`, beneficio);
  }
  
  excluir(id: Number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/excluir/${id}`);
  }

}
