import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ArquivoTipo } from 'src/app/shared/model/arquivoTipo.model.component';
import { Observable } from "rxjs";
import { ArquivoService } from '../arquivo.service';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/alert';

@Component({
  selector: 'app-arquivo-adicionar',
  templateUrl: './arquivo-adicionar.component.html',
  styleUrls: ['./arquivo-adicionar.component.css']
})
export class ArquivoAdicionarComponent implements OnInit {

  beneficioId: number;

  form: FormGroup;
  arquivoTipos: Observable<ArquivoTipo[]>

  constructor(public formBuilder: FormBuilder, private arquivoService: ArquivoService,
    private route: ActivatedRoute, private router: Router,
    public alertService: AlertService) {

      this.beneficioId = Number(this.route.snapshot.queryParamMap.get("beneficio"));
      this.form = this.formBuilder.group({
        name: [''],
        arquivoTipo: [''],
        binario: [null]
      })
  }

  ngOnInit() { 
    this.reloadData();
  }

  reloadData() {

    this.arquivoTipos = this.arquivoService.listarArquivoTipo()
    .pipe(
      map(response=>response.data)
    );

  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      binario: file
    });
    this.form.get('binario').updateValueAndValidity()
  }

  submitForm() {

    var formData: any = new FormData();
    formData.append("arquivo", this.form.get('binario').value);
    formData.append("descricao", this.form.get('name').value);
    formData.append("arquivoTipoId", this.form.get('arquivoTipo').value);
    formData.append("beneficioId", this.beneficioId);

    this.salvar(formData);
  }

  salvar(form: FormData){
    this.arquivoService.salvar(form).subscribe(resp => {
      this.voltarArquivos();
    }, error => {
      console.log(error.error);
      this.alertService.error(error.error.message);
    })
  }

  voltarArquivos() {
    this.router.navigate(['listar-arquivos'], { queryParams: { beneficio: this.beneficioId } });
  }

}
