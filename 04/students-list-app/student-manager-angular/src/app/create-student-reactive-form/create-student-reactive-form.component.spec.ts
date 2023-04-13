import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentReactiveFormComponent } from './create-student-reactive-form.component';

describe('CreateStudentReactiveFormComponent', () => {
  let component: CreateStudentReactiveFormComponent;
  let fixture: ComponentFixture<CreateStudentReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
