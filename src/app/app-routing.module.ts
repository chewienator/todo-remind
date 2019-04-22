import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'task', loadChildren: './task/task.module#TaskPageModule' },
  { path: 'edit-task', loadChildren: './edit-task/edit-task.module#EditTaskPageModule' },
  { path: 'create-task', loadChildren: './create-task/create-task.module#CreateTaskPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
