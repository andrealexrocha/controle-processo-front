import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArquivoMovimentacaoAdicionarComponent } from './modules/arquivo-movimentacao/arquivo-movimentacao-adicionar/arquivo-movimentacao-adicionar.component';
import { ArquivoMovimentacaoListarComponent } from './modules/arquivo-movimentacao/arquivo-movimentacao-listar/arquivo-movimentacao-listar.component';
import { ArquivoAdicionarComponent } from './modules/arquivo/arquivo-adicionar/arquivo-adicionar.component';
import { ArquivoDetalharComponent } from './modules/arquivo/arquivo-detalhar/arquivo-detalhar.component';
import { ArquivoListarComponent } from './modules/arquivo/arquivo-listar/arquivo-listar.component';
import { BeneficioAdicionarComponent } from './modules/beneficio/beneficio-adicionar/beneficio-adicionar.component';
import { BeneficioListarComponent } from './modules/beneficio/beneficio-listar/beneficio-listar.component';


const routes: Routes = [
  { path: '', component: BeneficioListarComponent },
  { path: 'beneficio-adicionar', component: BeneficioAdicionarComponent },
  { path: 'adicionar-arquivo', component: ArquivoAdicionarComponent },
  { path: 'listar-arquivos', component: ArquivoListarComponent },
  { path: 'visualizar-arquivo', component: ArquivoDetalharComponent },
  { path: 'listar-movimentacoes', component: ArquivoMovimentacaoListarComponent },
  { path: 'adicionar-movimentacao', component: ArquivoMovimentacaoAdicionarComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
