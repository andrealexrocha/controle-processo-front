import { Component, OnInit } from '@angular/core';
import { Arquivo } from 'src/app/shared/model/arquivo.model.component';
import { Observable } from "rxjs";
import { ArquivoService } from '../arquivo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-arquivo-listar',
  templateUrl: './arquivo-listar.component.html',
  styleUrls: ['./arquivo-listar.component.css']
})
export class ArquivoListarComponent implements OnInit {

  beneficioId: number;
  arquivos: Observable<Arquivo[]>

  constructor(private arquivoService: ArquivoService,
    private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {

    this.beneficioId = Number(this.route.snapshot.queryParamMap.get("beneficio"));
    
    this.reloadData();

  }

  reloadData() {
    this.arquivos = this.arquivoService.listarArquivos(this.beneficioId)
    .pipe(
      map(response=>response.data)
    )
  }

  adicionar(){
    this.router.navigate(['adicionar-arquivo'], { queryParams: { beneficio: this.beneficioId } });
  }

  arquivoVisualizar(arquivo: Arquivo){
    this.router.navigate(['arquivo-detalhar', arquivo]);
  }

  arquivoMovimentacoes(id: number){
    this.router.navigate(['listar-movimentacoes'], { queryParams: { beneficio: this.beneficioId , arquivo: id } });
  }
}
