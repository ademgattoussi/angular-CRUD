import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsShowComponent } from './students-show.component';

describe('StudentsShowComponent', () => {
  let component: StudentsShowComponent;
  let fixture: ComponentFixture<StudentsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
