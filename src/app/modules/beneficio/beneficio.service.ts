import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  private baseUrl = 'http://localhost:8080/v1/beneficios';

  constructor(private http: HttpClient) { }

  listarBeneficios(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  createBeneficio(beneficio: Object): Observable<Object> {
    console.log(beneficio);
    return this.http.post(`${this.baseUrl}/save`, beneficio);
  }
  
}
