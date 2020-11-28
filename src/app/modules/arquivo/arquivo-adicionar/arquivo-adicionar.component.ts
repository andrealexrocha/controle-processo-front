import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ArquivoTipo } from 'src/app/shared/model/arquivoTipo.model.component';
import { Observable } from "rxjs";
import { ArquivoService } from '../arquivo.service';
import { map } from 'rxjs/operators';
import { Arquivo } from 'src/app/shared/model/arquivo.model.component';
import { Beneficio } from 'src/app/shared/model/beneficio.model.component';
import { ArquivoUpload } from 'src/app/shared/model/arquivoUpload.model.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-arquivo-adicionar',
  templateUrl: './arquivo-adicionar.component.html',
  styleUrls: ['./arquivo-adicionar.component.css']
})
export class ArquivoAdicionarComponent implements OnInit {

  beneficioId: number = 0;

  form: FormGroup;
  arquivoTipos: Observable<ArquivoTipo[]>

  constructor(public fb: FormBuilder, private http: HttpClient,
    private arquivoService: ArquivoService,
    private route: ActivatedRoute, private router: Router,) {
    this.form = this.fb.group({
      name: [''],
      arquivoTipo: [''],
      avatar: [null]
    })
  }

  ngOnInit() { 
    this.reloadData();
    this.beneficioId = this.route.snapshot.params['beneficioId'];
  }

  reloadData() {

    this.arquivoTipos = this.arquivoService.listarArquivoTipo()
    .pipe(
      map(response=>response.data)
    )
      console.log(this.arquivoTipos);
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("arquivo", this.form.get('avatar').value);
    formData.append("descricao", this.form.get('name').value);
    formData.append("beneficioId", "2");
    formData.append("arquivoTipoId", this.form.get('arquivoTipo').value);


    this.http.post('http://localhost:8080/v1/arquivos/upload',formData).subscribe(resp => {
      console.log(resp)
      this.router.navigate(['arquivo-listar', this.beneficioId]);
    })

  }

  cancelar() {
    this.router.navigate(['arquivo-listar', this.beneficioId]);
  }

}
