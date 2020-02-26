import { EmployeeService } from './../shared/employee.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: any = {};
  model2: any = {};
  

  constructor(private fb: FormBuilder, private empService:EmployeeService , private router:Router) { }

  createEmployee = this.fb.group({
    name: ['', Validators.required],
    salary: ['', Validators.required],
    designation: ['', Validators.required]
  })

  ngOnInit() {
  }


  addEmployee() {
    this.model = this.createEmployee.value;
    this.empService.employees.push(this.model);
    this.model = {};
    this.router.navigateByUrl('/home');
  }
  
  


}
