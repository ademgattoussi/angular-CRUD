import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsShowComponent } from './subjects-show.component';

describe('SubjectsShowComponent', () => {
  let component: SubjectsShowComponent;
  let fixture: ComponentFixture<SubjectsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
