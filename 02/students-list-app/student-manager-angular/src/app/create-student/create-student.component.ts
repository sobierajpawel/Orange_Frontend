import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  isValidationFieldRequired : boolean = false;
  isValidationEmailIncorrect: boolean = false;
  isSuccess: boolean = false;

  constructor(private studentService:StudentService){}

  addStudent(name: string, email: string){
    console.log("Przekazane wartości: imie i nazwisko:" + name + ", email:" + email);
    //alert("Przekazane wartości: imie i nazwisko:" + name + ", email:" + email);
    this.isValidationEmailIncorrect = false;
    this.isValidationFieldRequired = false;
    this.isSuccess = false;

    //WALIDACJA 
    if(!name || !email){
      //alert("Przynajmniej jedno z pól nie zawiera wartości");
      this.isValidationFieldRequired = true;
      return;
    }

    if(email.indexOf('@') < 1){
      //alert('Brak znaku @ w adresie mailowym');
      this.isValidationEmailIncorrect = true;
      return;
    }
    //Wywołania StudentService do zapisu na serwerze POST
    this.studentService.postStudent({name, email} as Student)
      .subscribe(x=>{
        //alert('Udało się dodać studenta do serwera. Wykonano operacje POST!');
        this.isSuccess = true;
      });
  }
}
