import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaInfoComponent } from './busca-info.component';

describe('BuscaInfoComponent', () => {
  let component: BuscaInfoComponent;
  let fixture: ComponentFixture<BuscaInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaInfoComponent]
    });
    fixture = TestBed.createComponent(BuscaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
