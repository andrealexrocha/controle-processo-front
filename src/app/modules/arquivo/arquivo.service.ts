import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  private baseUrl = `${environment.apiUrl}/arquivos`;

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
  
  salvar(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/salvar`,formData);
  }
  
  baixar(arquivoId: number): any {
    return this.http.get(`${this.baseUrl}/baixar/${arquivoId}`, { responseType: 'blob' })
        .pipe(
            map((result: any) => {
                return result;
            })
        );
  }

  excluir(id: Number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/excluir/${id}`);
  }
  
}
