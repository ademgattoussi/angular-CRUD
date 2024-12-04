import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsUpdateComponent } from './sessions-update.component';

describe('SessionsUpdateComponent', () => {
  let component: SessionsUpdateComponent;
  let fixture: ComponentFixture<SessionsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
