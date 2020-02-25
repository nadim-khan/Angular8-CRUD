import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    { id:1,name: 'Nadeem Khan', salary: '250000', designation: 'Front-End Dev' },
    { id:2,name: 'Amit Waghmare', salary: '2450000', designation: 'Back-End Dev' },
    { id:3,name: 'Vivek Ratre', salary: '440000', designation: 'Full-Stack Dev' }
  ];
  dataToEdit ;
  editValue;

  constructor() { 
  }
}
