import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arquivo } from 'src/app/shared/model/arquivo.model.component';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  private baseUrl = 'http://localhost:8080/v1/arquivos';

  constructor(private http: HttpClient) { }

  listarArquivos(beneficioId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/beneficio/${beneficioId}`);
  }

  listarArquivo(arquivoId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${arquivoId}`);
  }

  listarArquivoTipo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tipo`);
  }
  
  salvarArquivo(arquivo: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(`${this.baseUrl}/uploadFile`, arquivo, httpOptions);
  }
  
}
