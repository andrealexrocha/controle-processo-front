import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioAdicionarComponent } from './beneficio-adicionar.component';

describe('BeneficioAdicionarComponent', () => {
  let component: BeneficioAdicionarComponent;
  let fixture: ComponentFixture<BeneficioAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficioAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
