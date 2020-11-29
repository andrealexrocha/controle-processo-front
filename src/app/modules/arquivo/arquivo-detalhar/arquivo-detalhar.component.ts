import { Component, OnInit, ViewChild } from '@angular/core';
import { Arquivo } from 'src/app/shared/model/arquivo.model.component';
import { ArquivoService } from '../arquivo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-arquivo-detalhar',
  templateUrl: './arquivo-detalhar.component.html',
  styleUrls: ['./arquivo-detalhar.component.css']
})
export class ArquivoDetalharComponent implements OnInit {

  beneficioId: number;
  arquivoId: number;
  @ViewChild('pdfViewer') public pdfViewer;

  constructor(private arquivoService: ArquivoService, private http: HttpClient,
    private route: ActivatedRoute,private router: Router,) { 
      this.beneficioId = Number(this.route.snapshot.queryParamMap.get("beneficio"));
      this.arquivoId = Number(this.route.snapshot.queryParamMap.get("arquivo"));

      this.arquivoService.baixar(this.arquivoId).subscribe(
          (res) => {
            console.log(res);
              this.pdfViewer.pdfSrc = res; 
              this.pdfViewer.refresh(); 
          }
      );
    }

  ngOnInit(): void {
    
  }

  cancelar() {
    this.router.navigate(['listar-arquivos'], { queryParams: { beneficio: this.beneficioId } });
  }

}
