import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoDetalharComponent } from './arquivo-detalhar.component';

describe('ArquivoDetalharComponent', () => {
  let component: ArquivoDetalharComponent;
  let fixture: ComponentFixture<ArquivoDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
