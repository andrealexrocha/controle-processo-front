import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  private baseUrl = `${environment.apiUrl}/setores`;

  constructor(private http: HttpClient) { }

  listarSetores(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
