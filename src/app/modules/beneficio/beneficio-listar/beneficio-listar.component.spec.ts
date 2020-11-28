import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioListarComponent } from './beneficio-listar.component';

describe('BeneficioListarComponent', () => {
  let component: BeneficioListarComponent;
  let fixture: ComponentFixture<BeneficioListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficioListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
