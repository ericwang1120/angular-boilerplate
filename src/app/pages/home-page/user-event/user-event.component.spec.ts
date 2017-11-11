import { MatCardModule, MatListModule } from '@angular/material';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Event, generateMockEvent } from './../../../core/ngrx/events/models/event';
import { User, generateMockUser } from './../../../core/ngrx/users/models/user';
import { UserEventComponent } from './user-event.component';

describe('UserEventComponentWithoutData', () => {
  let component: UserEventComponent;
  let fixture: ComponentFixture<UserEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatListModule],
      declarations: [UserEventComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventComponent);
    component = fixture.componentInstance;
    component.currentUser = generateMockUser();
    component.userLoading = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('UserEventComponentWithData', () => {
  let component: UserEventComponent;
  let fixture: ComponentFixture<UserEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatListModule],
      declarations: [UserEventComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventComponent);
    component = fixture.componentInstance;
    component.events = [generateMockEvent()];
    component.userLoading = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
