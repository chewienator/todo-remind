import { Component } from '@angular/core';
import { DataService } from '../data.service'; //import data service
import { Router, NavigationExtras } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  myTasks:Array<Task>; //here we will hold all the list of tasks

  constructor(
    private dataService:DataService,
    private router:Router   
  ){}

  ionViewDidEnter(){
    console.log("loaded");
    //when view loads, get the list object from data service
    this.myTasks = this.dataService.tasks;
  }

  //Go to task page
  editTask(task){
    /*
      we need to send extra params fo the edit page knows what 
      task are we talking about
    */
    let navigationExtras: NavigationExtras = {
      state: {
        id: task.id
      }
    };
    this.router.navigate(['/edit-task'], navigationExtras);

    console.log("clicked on task: "+task.description);    
  }

  deleteTask(task){
    console.log("deleting task "+task.description);
  }

  changeStatus(task){
    console.log("Change status of task "+task.description);
  }
}
