import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './../shared/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newEmployeeClicked = false;
  color;
  empList;
  searchText;

  constructor( private router: Router,private empService:EmployeeService ,) { }

  ngOnInit() {
    this.empList = this.empService.employees;
  }

  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
    this.router.navigateByUrl('create');
  }
  editEmployee(current){
    this.router.navigateByUrl('edit');
    this.empService.dataToEdit=this.empService.employees[current];
    this.empService.editValue=current;
  }
  deleteEmployee(i){
    if(confirm("Are you sure to delete this record ? ")){
         this.empService.employees.splice(i,1);
      }
    }
}
