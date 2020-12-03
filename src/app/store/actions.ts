import { Action, createAction, props } from '@ngrx/store';



export const ActionTypes = {
    GetImportance: 'Get_Importance',
    GetImportanceSuccess: 'Get_ImportanceSuccess',
    GetImportanceFailed: 'Get_ImportanceFailed',
    AddTodo: 'Add_Todo'
} 

// export class GetImportance implements Action {
//     type = ActionTypes.GetImportance{
        
//     };
//     type = ActionTypes.GetImportance;
//     type = ActionTypes.GetImportance;
// }

export const AddInTaken = createAction(ActionTypes.GetImportance);
export const GetImportanceSuccess = createAction(ActionTypes.GetImportanceSuccess);
export const AddTodo = createAction(ActionTypes.AddTodo);


// export type Actions = GetImportance | GetImportanceSuccess;