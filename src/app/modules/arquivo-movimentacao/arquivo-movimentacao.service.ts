import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArquivoMovimentacao } from 'src/app/shared/model/arquivoMovimentacao.model.component';
import { environment } from 'src/environments/environment'
 
@Injectable({
  providedIn: 'root'
})
export class ArquivoMovimentacaoService {

  private baseUrl = `${environment.apiUrl}/movimentacoes`;

  constructor(private http: HttpClient) { }

  listarMovimentacoesArquivo(arquivoId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/arquivo/${arquivoId}`);
  }

  salvar(arquivoMovimentacao: ArquivoMovimentacao): Observable<Object> {
    return this.http.post(`${this.baseUrl}/salvar`, arquivoMovimentacao);
  }
  
  excluir(id: Number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/excluir/${id}`);
  }
}
