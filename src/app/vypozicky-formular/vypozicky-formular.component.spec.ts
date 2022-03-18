import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypozickyFormularComponent } from './vypozicky-formular.component';

describe('VypozickyFormularComponent', () => {
  let component: VypozickyFormularComponent;
  let fixture: ComponentFixture<VypozickyFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypozickyFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VypozickyFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
