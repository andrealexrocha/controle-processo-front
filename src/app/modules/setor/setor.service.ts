import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  private baseUrl = 'http://localhost:8080/v1/setores';

  constructor(private http: HttpClient) { }

  listarSetores(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
