import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, mergeMap, map } from 'rxjs/operators';
import { createAction } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AddInTaken, GetImportanceSuccess, ActionTypes, AddTodo } from './actions';


@Injectable()
export class TodoEffects {

    loadImportance$: Observable<any>;


    constructor(private service: TaskService, private actions$: Actions) { }

    loadImportance$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AddInTaken),
            mergeMap(() => {
                console.log(this.loadImportance$);
                return this.service.getImportance().pipe(
                    map(category => ({type: ActionTypes.GetImportanceSuccess, payload: category})),
                    // map(category => GetImportanceSuccess({payload: category})),
                    catchError((err) => GetImportanceSuccess)
                    )
                })
        )
    )

    // addTodo$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(AddTodo),
    //         mergeMap(() => {
    //             console.log(this.addTodo$$);
    //             return this.service.createList(payload).pipe(
    //                 map(category => ({type: ActionTypes.AddTodo, payload: todo})),
    //                 // map(category => GetImportanceSuccess({payload: category})),
    //                 catchError((err) => addTodo)
    //                 )
    //             })
    //     )
    // )
    
}