import { Component, OnInit } from '@angular/core';
import { Beneficio } from 'src/app/shared/model/beneficio.model.component';
import { Observable } from "rxjs";
import { BeneficioService } from '../beneficio.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-beneficio-listar',
  templateUrl: './beneficio-listar.component.html',
  styleUrls: ['./beneficio-listar.component.css']
})
export class BeneficioListarComponent implements OnInit {
  beneficios: Observable<Beneficio[]>

  constructor(private beneficioService: BeneficioService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {

    this.beneficios = this.beneficioService.listarBeneficios()
    .pipe(
      map(response=>response.data)
    )
      console.log(this.beneficios);
  }

  adicionar(){
    this.router.navigate(['beneficio-adicionar']);
  }

  beneficioArquivos(id: number){
    this.router.navigate(['listar-arquivos'], { queryParams: { beneficio: id } });
  }

}
