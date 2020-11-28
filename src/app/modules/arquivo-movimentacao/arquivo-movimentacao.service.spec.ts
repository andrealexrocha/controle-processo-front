import { TestBed } from '@angular/core/testing';

import { ArquivoMovimentacaoService } from './arquivo-movimentacao.service';

describe('ArquivoMovimentacaoService', () => {
  let service: ArquivoMovimentacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquivoMovimentacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
