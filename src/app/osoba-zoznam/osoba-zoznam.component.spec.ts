import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaZoznamComponent } from './osoba-zoznam.component';

describe('OsobaZoznamComponent', () => {
  let component: OsobaZoznamComponent;
  let fixture: ComponentFixture<OsobaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsobaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
