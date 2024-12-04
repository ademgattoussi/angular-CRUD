import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsUpdateComponent } from './subjects-update.component';

describe('SubjectsUpdateComponent', () => {
  let component: SubjectsUpdateComponent;
  let fixture: ComponentFixture<SubjectsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
