import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    { name: 'Nadeem Khan', salary: '250000', designation: 'Front-End Dev' },
    { name: 'Amit Waghmare', salary: '2450000', designation: 'Back-End Dev' },
    { name: 'Vivek Ratre', salary: '440000', designation: 'Full-Stack Dev' },
    { name: 'Sameer Khan', salary: '250000', designation: 'Front-End Dev' },
    { name: 'Rahul Waghmare', salary: '2450000', designation: 'Back-End Dev' },
    { name: 'Kunal Ratre', salary: '440000', designation: 'Full-Stack Dev' }
  ];
  dataToEdit ;
  editValue;

  constructor() { 
  }
}
