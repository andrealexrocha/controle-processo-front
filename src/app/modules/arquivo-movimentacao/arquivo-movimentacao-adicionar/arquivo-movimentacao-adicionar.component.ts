import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Orgao } from 'src/app/shared/model/orgao.model.component';
import { ArquivoMovimentacao } from 'src/app/shared/model/arquivoMovimentacao.model.component';
import { ArquivoMovimentacaoService } from '../arquivo-movimentacao.service';
import { SetorService } from '../../setor/setor.service';
import { Setor } from 'src/app/shared/model/setor.model.component';

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
    this.reloadData();
  }

  reloadData() {

    this.setores = this.setorService.listarSetores()
    .pipe(
      map(response=>response.data)
    )
  }

  cancelar() {
    this.router.navigate(['arquivo-listar', this.beneficioId]);
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


    this.http.post('http://localhost:8080/v1/movimentacoes/save',arquivoMovimentacao).subscribe(resp => {
      console.log(resp)
      this.router.navigate(['listar-movimentacoes'], { queryParams: { beneficio: this.beneficioId , arquivo: this.arquivoId } });
    })
  }

}
