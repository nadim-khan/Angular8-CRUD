import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmp'
})
export class FilterPipe implements PipeTransform {

  transform(empList: any[], searchText: string): any[] {
    if(!empList) return [];

    if(!searchText) return empList;

    return this.searchItems(empList, searchText.toLowerCase());
   }

   searchItems(list :any[], searchText): any[] {
     let results = [];
     list.forEach(val => {
          if(val.name.toLowerCase().includes(searchText)||val.designation.toLowerCase().includes(searchText)||val.salary.includes(searchText)){
              results.push(val);
          }
      });
      if(results.length < 1){
          alert("No Records found for your search");
      }
      console.log("results : ",results)
      return results;
   }
}