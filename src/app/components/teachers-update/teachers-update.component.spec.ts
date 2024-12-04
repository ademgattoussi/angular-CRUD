import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersUpdateComponent } from './teachers-update.component';

describe('TeachersUpdateComponent', () => {
  let component: TeachersUpdateComponent;
  let fixture: ComponentFixture<TeachersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
