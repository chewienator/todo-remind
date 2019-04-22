import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service'; //import data service
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  taskID: any;
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
    console.log(this.dataService.loadTask(this.taskID));
  }

}
