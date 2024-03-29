import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UploadFormPageComponent } from './upload-form.component';

describe('UploadFormPageComponent', () => {
  let component: UploadFormPageComponent;
  let fixture: ComponentFixture<UploadFormPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
