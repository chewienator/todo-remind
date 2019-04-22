import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //object array for tasks
  tasks:any=[
    {
      id:1,
      description:'Clean Room',    
      done:false,
      dueDate:'2019-04-30',
    },
    {
      id:2,
      description:'Buy groceries',    
      done:false,
      dueDate:'2019-04-30',
    },
    {
      id:3,
      description:'Walk the dog',    
      done:false,
      dueDate:new Date("2019-04-30"),
    },
  ];
  constructor() { }
}
