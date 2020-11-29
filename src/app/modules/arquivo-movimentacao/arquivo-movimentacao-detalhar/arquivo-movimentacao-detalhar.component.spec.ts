import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoMovimentacaoDetalharComponent } from './arquivo-movimentacao-detalhar.component';

describe('ArquivoMovimentacaoDetalharComponent', () => {
  let component: ArquivoMovimentacaoDetalharComponent;
  let fixture: ComponentFixture<ArquivoMovimentacaoDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoMovimentacaoDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoMovimentacaoDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
