import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnvironmentPageComponent } from './environment-page.component';

describe('EnvironmentPageComponent', () => {
  let component: EnvironmentPageComponent;
  let fixture: ComponentFixture<EnvironmentPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
