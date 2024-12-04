import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsUpdateComponent } from './rooms-update.component';

describe('RoomsUpdateComponent', () => {
  let component: RoomsUpdateComponent;
  let fixture: ComponentFixture<RoomsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
