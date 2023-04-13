import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CreateStudentReactiveFormComponent } from './create-student-reactive-form/create-student-reactive-form.component';

const routes: Routes = [
  {path: 'students', component: StudentsListComponent},
  {path: 'add-student', component: CreateStudentComponent},
  {path:'students/edit/:id', component:EditStudentComponent},
  {path:'add-student-reactive', component:CreateStudentReactiveFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
