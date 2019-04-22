import { Component } from '@angular/core';
import { DataService } from '../data.service'; //import data service
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  myTasks:any; //here we will hold all the list items

  constructor(
    private data:DataService,
    private router:Router   
  ){}

  ionViewDidEnter(){
    console.log("loaded");
    //when view loads, get the list object from data service
    this.myTasks = this.data.tasks;
  }

  //Go to task page
  editTask(task){
    console.log("clicked on task: "+task.description);
    this.router.navigate(['/task']);
  }

  deleteTask(task){
    console.log("deleting task "+task.description);
  }

  changeStatus(task){
    console.log("Change status of task "+task.description);
  }
}
