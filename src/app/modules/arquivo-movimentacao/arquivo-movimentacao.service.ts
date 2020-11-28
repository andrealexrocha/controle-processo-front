import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArquivoMovimentacao } from 'src/app/shared/model/arquivoMovimentacao.model.component';

@Injectable({
  providedIn: 'root'
})
export class ArquivoMovimentacaoService {

  private baseUrl = 'http://localhost:8080/v1/movimentacoes';

  constructor(private http: HttpClient) { }

  listarMovimentacoesArquivo(arquivoId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/arquivo/${arquivoId}`);
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
