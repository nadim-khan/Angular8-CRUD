import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../shared/employee.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentUser;
  myValue;
  modal2;
  editEmployeeForm;
  constructor(private fb: FormBuilder, private empService:EmployeeService , private router:Router) { }
  ngOnInit() {
  this.currentUser=this.empService.dataToEdit;
  if(this.currentUser){
    this.editEmployeeForm = this.fb.group({
      name: [this.currentUser.name, Validators.required],
      salary: [this.currentUser.salary, Validators.required],
      designation: [this.currentUser.designation, Validators.required]
    })
  }
  }
  saveEditEmployee(){
    let editEmployeeInfo = this.empService.editValue;
    for(let i = 0; i < this.empService.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.empService.employees[i] = this.editEmployeeForm.value;
        this.router.navigateByUrl('employee');
      }
    }
  }
  onCancel(){
    this.router.navigateByUrl('employee');
  }

}
