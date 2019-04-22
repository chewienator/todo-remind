import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Sample object array for tasks
  tasks:Array<Task> =[
    {
      id:1,
      description:'Clean Room',    
      status:false,
      dueDate:'2019-04-30',
    },
    {
      id:2,
      description:'Buy groceries',    
      status:false,
      dueDate:'2019-04-30',
    },
    {
      id:3,
      description:'Walk the dog',    
      status:false,
      dueDate:"2019-04-30",
    },
  ];

  constructor() { }

  /*
  This function searches for an object with a specific id 
  within the Tasks array, and returns that object
  */
  loadTask(id){
    //we will store the resulting object here
    var selectedTask:Task = null;
    //search within the current task array
    this.tasks.forEach((theTask, index)=>{
      //if id is found, set the object
      if(theTask.id == id){
        selectedTask = this.tasks[index];        
      }
    });
    return selectedTask;
  }
}
