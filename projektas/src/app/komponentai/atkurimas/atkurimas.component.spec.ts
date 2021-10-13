import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtkurimasComponent } from './atkurimas.component';

describe('AtkurimasComponent', () => {
  let component: AtkurimasComponent;
  let fixture: ComponentFixture<AtkurimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtkurimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtkurimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
