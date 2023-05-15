import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoladosComponent } from './volados.component';

describe('VoladosComponent', () => {
  let component: VoladosComponent;
  let fixture: ComponentFixture<VoladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoladosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
