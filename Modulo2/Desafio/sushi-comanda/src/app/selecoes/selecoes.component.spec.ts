import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecoesComponent } from './selecoes.component';

describe('SelecoesComponent', () => {
  let component: SelecoesComponent;
  let fixture: ComponentFixture<SelecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
