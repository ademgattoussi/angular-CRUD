import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsShowComponent } from './sessions-show.component';

describe('SessionsShowComponent', () => {
  let component: SessionsShowComponent;
  let fixture: ComponentFixture<SessionsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
