import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  students: Student[] = [];

  constructor(private studentService:StudentService){
    this.studentService.getStudents()
      .subscribe(data =>{
        this.students = data;
      });
  }
}
