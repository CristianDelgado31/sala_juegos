import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntadosMainComponent } from './preguntados-main.component';

describe('PreguntadosMainComponent', () => {
  let component: PreguntadosMainComponent;
  let fixture: ComponentFixture<PreguntadosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntadosMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntadosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
