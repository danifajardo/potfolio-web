import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoProyectosComponent } from './marco-proyectos.component';

describe('MarcoProyectosComponent', () => {
  let component: MarcoProyectosComponent;
  let fixture: ComponentFixture<MarcoProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
