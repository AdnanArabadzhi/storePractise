import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/task.service';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  weekDays: any;
  list: any;
  counter: any;
  text: any;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private service: TaskService, private store: Store<any>) { 
    this.subscription = store.select((state) => state.app).subscribe(category => {
      this.list = category.category;
      console.log(this.list);
    })
  }

  ngOnInit(): void {
    this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.route.params.subscribe(
      (params: Params) => {
      }
    )
    this.store.dispatch({ type: actions.ActionTypes.GetImportance});

    // this.service.getImportance().subscribe((list: any) => {
    //   this.list = list;
    //   console.log(this.list);
    // });
  }
  createNewEffect() {
    this.store.dispatch({ type: actions.ActionTypes.GetImportance});
    
  }
  createNewTask(desc, weekDay, importance) {
    this.store.dispatch({ type: actions.ActionTypes.AddTodo, payload: desc, weekDay, importance});

  }


}



