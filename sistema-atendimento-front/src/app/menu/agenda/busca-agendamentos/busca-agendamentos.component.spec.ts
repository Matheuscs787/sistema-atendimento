import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaAgendamentosComponent } from './busca-agendamentos.component';

describe('BuscaAgendamentosComponent', () => {
  let component: BuscaAgendamentosComponent;
  let fixture: ComponentFixture<BuscaAgendamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaAgendamentosComponent]
    });
    fixture = TestBed.createComponent(BuscaAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
