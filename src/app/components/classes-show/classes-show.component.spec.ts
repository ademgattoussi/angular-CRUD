import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesShowComponent } from './classes-show.component';

describe('ClassesShowComponent', () => {
  let component: ClassesShowComponent;
  let fixture: ComponentFixture<ClassesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
