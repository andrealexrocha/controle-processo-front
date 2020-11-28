import { Component, OnInit } from '@angular/core';
import { Beneficio } from 'src/app/shared/model/beneficio.model.component';
import { Funcionario } from 'src/app/shared/model/funcionario.model.component';
import { BeneficioService } from '../beneficio.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FuncionarioService } from '../../funcionario/funcionario.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-beneficio-adicionar',
  templateUrl: './beneficio-adicionar.component.html',
  styleUrls: ['./beneficio-adicionar.component.css']
})
export class BeneficioAdicionarComponent implements OnInit {

  funcionarios: Observable<Funcionario[]>
  beneficio: Beneficio = new Beneficio();
  submitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private beneficioService: BeneficioService,
    private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      numero: ['', Validators.required],
      funcionario: ['', Validators.required]
    });

    this.reloadData();
    
  }

  reloadData() {

    this.funcionarios = this.funcionarioService.listarFuncionario()
    .pipe(
      map(response=>response.data)
    )
      console.log(this.funcionarios);
  }

  save() {
    this.beneficioService
    .createBeneficio(this.beneficio).subscribe(data => {
      console.log(data)
      this.beneficio = new Beneficio();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/beneficios']);
  }

  onSubmit() {
    this.beneficio = new Beneficio();
    this.beneficio.funcionario = new Funcionario();
    this.beneficio.funcionario.id = this.form.get('funcionario').value;
    
    console.log(this.form.get('funcionario').value);
    this.beneficio.numero = this.form.get('numero').value;
    this.save();
  
  }
  
}
