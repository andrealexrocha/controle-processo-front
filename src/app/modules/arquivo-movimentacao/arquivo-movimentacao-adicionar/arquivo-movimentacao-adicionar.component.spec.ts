import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoMovimentacaoAdicionarComponent } from './arquivo-movimentacao-adicionar.component';

describe('ArquivoMovimentacaoAdicionarComponent', () => {
  let component: ArquivoMovimentacaoAdicionarComponent;
  let fixture: ComponentFixture<ArquivoMovimentacaoAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoMovimentacaoAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoMovimentacaoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
