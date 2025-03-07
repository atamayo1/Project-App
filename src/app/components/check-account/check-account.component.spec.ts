import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAccountComponent } from './check-account.component';

describe('CheckAccountComponent', () => {
  let component: CheckAccountComponent;
  let fixture: ComponentFixture<CheckAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
