import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksPageComponent } from './attacks-page.component';

describe('AttacksPageComponent', () => {
  let component: AttacksPageComponent;
  let fixture: ComponentFixture<AttacksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttacksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
