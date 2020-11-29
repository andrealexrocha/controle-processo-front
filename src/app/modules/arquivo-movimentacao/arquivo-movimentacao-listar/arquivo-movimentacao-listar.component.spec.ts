import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoMovimentacaoListarComponent } from './arquivo-movimentacao-listar.component';

describe('ArquivoMovimentacaoListarComponent', () => {
  let component: ArquivoMovimentacaoListarComponent;
  let fixture: ComponentFixture<ArquivoMovimentacaoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoMovimentacaoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoMovimentacaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
