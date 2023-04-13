import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student! : Student;

  constructor(private studentService: StudentService,
    private route: ActivatedRoute){
    //console.log("Wywołanie konstruktora!");
  }

  ngOnInit(): void {
   //console.log("Inicjalizacja komponentu zakończona prawidłowo!"); 
   const id = this.route.snapshot.paramMap.get("id");
  //  console.log("Id z url'a:" + id);
   this.studentService.getStudent(Number(id))
    .subscribe(data=>{
      this.student = data;
    });
  }

  save(){
    console.log(this.student);
  }

}
