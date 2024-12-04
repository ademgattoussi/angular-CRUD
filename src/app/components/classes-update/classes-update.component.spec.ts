import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesUpdateComponent } from './classes-update.component';

describe('ClassesUpdateComponent', () => {
  let component: ClassesUpdateComponent;
  let fixture: ComponentFixture<ClassesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
