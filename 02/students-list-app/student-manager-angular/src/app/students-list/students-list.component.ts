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
  isLoading: boolean = false;
  isStudentDeleted : boolean = false;
  deletedStudentText:string ='';

  constructor(private studentService:StudentService){
    this.studentService.getStudents()
      .subscribe(data =>{
        this.students = data;
      });
  }

  deleteStudent(student:Student){
    this.isLoading = true;
    this.isStudentDeleted = false;
    // Musimy wiedzieć jakiego studenta usuwamy
    console.log("Student name:"+student.name);
    console.log("Student id:"+student.id);
    
    //Usunac studenta z kolekcji
    this.students = this.students.filter(s=>s !== student);

    //Wysłać polecenie DELETE w StudentService do serwera
    this.studentService.deleteStudent(student)
      .subscribe(data=>{
        this.isStudentDeleted = true;
        this.isLoading=false;
        this.deletedStudentText = "Usunięto studenta: " + student.name;
      });
  }
}
