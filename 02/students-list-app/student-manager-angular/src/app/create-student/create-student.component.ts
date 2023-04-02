import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  constructor(private studentService:StudentService){}

  addStudent(name: string, email: string){
    console.log("Przekazane wartości: imie i nazwisko:" + name + ", email:" + email);
    //alert("Przekazane wartości: imie i nazwisko:" + name + ", email:" + email);
  
    //WALIDACJA - email zawiera znak @, mamy dwie wartości wypełnione
    if(!name || !email){
      alert("Przynajmniej jedno z pól nie zawiera wartości");
      return;
    }

    if(email.indexOf('@') < 1){
      alert('Brak znaku @ w adresie mailowym');
      return;
    }
    //Wywołania StudentService do zapisu na serwerze POST
    this.studentService.postStudent({name, email} as Student)
      .subscribe(x=>{
        alert('Udało się dodać studenta do serwera. Wykonano operacje POST!');
      });
  }
}
