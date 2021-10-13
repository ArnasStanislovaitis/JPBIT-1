import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokalbiaiComponent } from './pokalbiai.component';

describe('PokalbiaiComponent', () => {
  let component: PokalbiaiComponent;
  let fixture: ComponentFixture<PokalbiaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokalbiaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokalbiaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
