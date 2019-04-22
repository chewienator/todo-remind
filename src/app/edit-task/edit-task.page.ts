import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service'; //import data service
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  taskID: any = null;
  task:Task; //just to test
 
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dataService:DataService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.taskID = this.router.getCurrentNavigation().extras.state.id;
      }
    });
  }

  ngOnInit() {
    console.log(this.taskID);
    //console.log(this.dataService.loadTask(this.taskID));
    //if there is an ID load the task
    if(this.taskID != null){
      this.task = this.dataService.loadTask(this.taskID);
    }
  }

  ionViewDidEnter(){
    //console.log("loaded");
    //when view loads, get the list object from data service
    //this.myTasks = this.dataService.tasks;
  }

}
