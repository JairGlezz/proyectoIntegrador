import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasAdmiinComponent } from './estadisticas-admiin.component';

describe('EstadisticasAdmiinComponent', () => {
  let component: EstadisticasAdmiinComponent;
  let fixture: ComponentFixture<EstadisticasAdmiinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasAdmiinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasAdmiinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
