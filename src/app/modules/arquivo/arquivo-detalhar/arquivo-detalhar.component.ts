import { Component, OnInit } from '@angular/core';
import { Arquivo } from 'src/app/shared/model/arquivo.model.component';
import { ArquivoService } from '../arquivo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arquivo-detalhar',
  templateUrl: './arquivo-detalhar.component.html',
  styleUrls: ['./arquivo-detalhar.component.css']
})
export class ArquivoDetalharComponent implements OnInit {

  arquivoId: number;
  arquivo: Arquivo;

  constructor(private arquivoService: ArquivoService,
    private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    this.arquivo = new Arquivo();
    this.arquivoId = this.route.snapshot.params['arquivoId'];
    this.reloadData();
    
  }
  reloadData() {

    this.arquivoService.listarArquivo(this.arquivoId)
    .subscribe(response => {
      this.arquivo = response.data;
      console.log(response);
    }, error => console.log(error));

  }

}
