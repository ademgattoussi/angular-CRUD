import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsCreateComponent } from './subjects-create.component';

describe('SubjectsCreateComponent', () => {
  let component: SubjectsCreateComponent;
  let fixture: ComponentFixture<SubjectsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
