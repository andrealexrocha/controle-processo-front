import { Component, OnInit } from '@angular/core';
import { Beneficio } from 'src/app/shared/model/beneficio.model.component';
import { Funcionario } from 'src/app/shared/model/funcionario.model.component';
import { BeneficioService } from '../beneficio.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FuncionarioService } from '../../funcionario/funcionario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert';

@Component({
  selector: 'app-beneficio-adicionar',
  templateUrl: './beneficio-adicionar.component.html',
  styleUrls: ['./beneficio-adicionar.component.css']
})
export class BeneficioAdicionarComponent implements OnInit {

  funcionarios: Observable<Funcionario[]>
  beneficio: Beneficio = new Beneficio();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private beneficioService: BeneficioService,
    private funcionarioService: FuncionarioService,
    public alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      numero: ['', Validators.required],
      funcionario: ['', Validators.required]
    });

    this.atualizarDados();
    
  }

  atualizarDados() {
    this.funcionarios = this.funcionarioService.listarFuncionario()
    .pipe(
      map(response=>response.data)
    );

  }

  salvar() {
    this.beneficioService
    .salvar(this.beneficio).subscribe(data => {
       this.voltarBeneficios();
    }, error => {
      this.alertService.error(error.error.message);
    });
  }

  voltarBeneficios() {
    this.router.navigate(['']);
  }

  enviarForm() {
    
    this.beneficio = new Beneficio();
    this.beneficio.funcionario = new Funcionario();
    this.beneficio.funcionario.id = this.form.get('funcionario').value;
    this.beneficio.numero = this.form.get('numero').value;

    this.salvar();
  
  }
  
}
