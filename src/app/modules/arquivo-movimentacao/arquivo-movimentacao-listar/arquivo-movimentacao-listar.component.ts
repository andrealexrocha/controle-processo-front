import { Component, OnInit } from '@angular/core';
import { ArquivoMovimentacao } from 'src/app/shared/model/arquivoMovimentacao.model.component';
import { Observable } from "rxjs";
import { ArquivoMovimentacaoService } from '../arquivo-movimentacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert';

@Component({
  selector: 'app-arquivo-movimentacao-listar',
  templateUrl: './arquivo-movimentacao-listar.component.html',
  styleUrls: ['./arquivo-movimentacao-listar.component.css']
})
export class ArquivoMovimentacaoListarComponent implements OnInit {

  beneficioId: number;
  arquivoId: number;
  movimentacoes: Observable<ArquivoMovimentacao[]>

  constructor(private arquivoMovimentacaoService: ArquivoMovimentacaoService,
    public alertService: AlertService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.beneficioId = Number(this.route.snapshot.queryParamMap.get("beneficio"));
    this.arquivoId = Number(this.route.snapshot.queryParamMap.get("arquivo"));
    
    this.atualizarDados();
  }

  atualizarDados() {
    this.movimentacoes = this.arquivoMovimentacaoService.listarMovimentacoesArquivo(this.arquivoId)
    .pipe(
      map(response=>response.data)
    )
  }

  adicionar(){
    this.router.navigate(['adicionar-movimentacao'], { queryParams: { beneficio: this.beneficioId, arquivo: this.arquivoId } });
  }

  cancelar() {
    this.router.navigate(['listar-arquivos'], { queryParams: { beneficio: this.beneficioId } });
  }

  excluir(id: number){
    this.arquivoMovimentacaoService.excluir(id).subscribe( data => {
      this.atualizarDados()
    }, error => {
      this.alertService.error(error.error.message);
    })
  }
}
