import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProntuarioComponent } from './cad-prontuario.component';

describe('CadProntuarioComponent', () => {
  let component: CadProntuarioComponent;
  let fixture: ComponentFixture<CadProntuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadProntuarioComponent]
    });
    fixture = TestBed.createComponent(CadProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
