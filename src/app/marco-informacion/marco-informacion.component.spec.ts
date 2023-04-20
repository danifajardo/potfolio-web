import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoInformacionComponent } from './marco-informacion.component';

describe('MarcoInformacionComponent', () => {
  let component: MarcoInformacionComponent;
  let fixture: ComponentFixture<MarcoInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
