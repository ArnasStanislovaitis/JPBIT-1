import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinuteComponent } from './zinute.component';

describe('ZinuteComponent', () => {
  let component: ZinuteComponent;
  let fixture: ComponentFixture<ZinuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZinuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
