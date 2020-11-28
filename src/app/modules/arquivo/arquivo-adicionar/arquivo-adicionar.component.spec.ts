import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoAdicionarComponent } from './arquivo-adicionar.component';

describe('ArquivoAdicionarComponent', () => {
  let component: ArquivoAdicionarComponent;
  let fixture: ComponentFixture<ArquivoAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
