import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignAgainComponent } from './sign-again.component';

describe('SignAgainComponent', () => {
  let component: SignAgainComponent;
  let fixture: ComponentFixture<SignAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
