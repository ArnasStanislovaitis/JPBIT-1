import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VartotojaiComponent } from './vartotojai.component';

describe('VartotojaiComponent', () => {
  let component: VartotojaiComponent;
  let fixture: ComponentFixture<VartotojaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VartotojaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VartotojaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
