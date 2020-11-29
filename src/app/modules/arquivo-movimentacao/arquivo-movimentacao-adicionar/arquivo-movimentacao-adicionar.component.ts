import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ArquivoMovimentacao } from 'src/app/shared/model/arquivoMovimentacao.model.component';
import { ArquivoMovimentacaoService } from '../arquivo-movimentacao.service';
import { SetorService } from '../../setor/setor.service';
import { Setor } from 'src/app/shared/model/setor.model.component';
import { AlertService } from 'src/app/shared/alert';

@Component({
  selector: 'app-arquivo-movimentacao-adicionar',
  templateUrl: './arquivo-movimentacao-adicionar.component.html',
  styleUrls: ['./arquivo-movimentacao-adicionar.component.css']
})
export class ArquivoMovimentacaoAdicionarComponent implements OnInit {
  beneficioId: number;
  arquivoId: number;
  form: FormGroup;
  setores: Observable<Setor[]>

  constructor(public formBuilder: FormBuilder, private http: HttpClient,
    private arquivoMovimentacaoService: ArquivoMovimentacaoService,
    private setorService: SetorService,
    public alertService: AlertService,
    private route: ActivatedRoute, private router: Router,) { 
      this.beneficioId = Number(this.route.snapshot.queryParamMap.get("beneficio"));
      this.arquivoId = Number(this.route.snapshot.queryParamMap.get("arquivo"));
      this.form = this.formBuilder.group({
        origem: [''],
        destino: [''],
        parecer: ['']
      })
    }

  ngOnInit(): void {
    this.atualizarDados();
  }

  atualizarDados() {

    this.setores = this.setorService.listarSetores()
    .pipe(
      map(response=>response.data)
    )
  }

  voltarArquivos() {
    this.router.navigate(['listar-arquivos'], { queryParams: { beneficio: this.beneficioId } });
  }

  voltarMovimentacoes() {
    this.router.navigate(['listar-movimentacoes'], { queryParams: { beneficio: this.beneficioId , arquivo: this.arquivoId } });
  }

  submitForm() {
    var arquivoMovimentacao: ArquivoMovimentacao = new ArquivoMovimentacao();
    arquivoMovimentacao.data_tramitacao = new Date();
    arquivoMovimentacao.parecer = this.form.get('parecer').value;
    arquivoMovimentacao.setorDestino = new Setor();
    arquivoMovimentacao.setorDestino.id = this.form.get('destino').value;
    arquivoMovimentacao.setorOrigem = new Setor();
    arquivoMovimentacao.setorOrigem.id = this.form.get('origem').value;
    arquivoMovimentacao.arquivo_id = this.arquivoId;

    this.salvar(arquivoMovimentacao);
  }

  salvar(arquivoMovimentacao: ArquivoMovimentacao){
    this.arquivoMovimentacaoService.salvar(arquivoMovimentacao).subscribe(resp => {
      console.log(resp)
      this.voltarMovimentacoes();
    }, error => {
      this.alertService.error(error.error.message);
    })
  }

}
