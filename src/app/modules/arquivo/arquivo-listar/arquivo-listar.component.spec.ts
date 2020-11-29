import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoListarComponent } from './arquivo-listar.component';

describe('ArquivoListarComponent', () => {
  let component: ArquivoListarComponent;
  let fixture: ComponentFixture<ArquivoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
