import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficioAdicionarComponent } from './modules/beneficio/beneficio-adicionar/beneficio-adicionar.component';
import { BeneficioListarComponent } from './modules/beneficio/beneficio-listar/beneficio-listar.component';
import { ArquivoAdicionarComponent } from './modules/arquivo/arquivo-adicionar/arquivo-adicionar.component';
import { ArquivoDetalharComponent } from './modules/arquivo/arquivo-detalhar/arquivo-detalhar.component';
import { ArquivoListarComponent } from './modules/arquivo/arquivo-listar/arquivo-listar.component';
import { ArquivoMovimentacaoAdicionarComponent } from './modules/arquivo-movimentacao/arquivo-movimentacao-adicionar/arquivo-movimentacao-adicionar.component';
import { ArquivoMovimentacaoDetalharComponent } from './modules/arquivo-movimentacao/arquivo-movimentacao-detalhar/arquivo-movimentacao-detalhar.component';
import { ArquivoMovimentacaoListarComponent } from './modules/arquivo-movimentacao/arquivo-movimentacao-listar/arquivo-movimentacao-listar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeneficioAdicionarComponent,
    BeneficioListarComponent,
    ArquivoAdicionarComponent,
    ArquivoDetalharComponent,
    ArquivoListarComponent,
    ArquivoMovimentacaoAdicionarComponent,
    ArquivoMovimentacaoDetalharComponent,
    ArquivoMovimentacaoListarComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
