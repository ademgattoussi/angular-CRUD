import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersShowComponent } from './teachers-show.component';

describe('TeachersShowComponent', () => {
  let component: TeachersShowComponent;
  let fixture: ComponentFixture<TeachersShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
