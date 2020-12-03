import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'todo'},
  { path: 'todo', component: TodoCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
