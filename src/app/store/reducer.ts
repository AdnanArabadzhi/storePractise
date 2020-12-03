import { ActionTypes, GetImportanceSuccess, AddInTaken } from './actions';
import { Action, ActionReducerMap, on } from '@ngrx/store';
import * as Interfaces from './interfaces'


export interface IAppState {
    app: IState;
}

export interface IState {
    category: Array<any>;
}

// const initialState: IState = {
//     category: []

// }

// export const initialState: Interfaces.Category{
//     id: 0,
//     importance: 'sadasd'
// };
// export interface IState {
//     id: number,
//     importance: string
// }

const initialState: IState = {
    category: Array<any>()
}

// // export function reducer(state: IState = initialState, action: any ){
//     // initialState,
//     // on(AddInTaken, (state, {payload}))


//     // switch(action.type) {
//         // case 'INC': {
//         //     console.log(action.type);
//         //     return { 
//         //         id: state.id + 1,
//         //         importance: state.importance + 1
//         //     };
//         // }
//         case ActionTypes.AddInTaken: {
//             return{
//                 state
//             }
//         }
//         case ActionTypes.GetImportanceSuccess: {
//             console.log(action.payload);
//             return{
//                 ...state,
//                 category: action.payload
//             }
//         }
//         case ActionTypes.AddTodo: {
//             return {
//                 ...state,
//                 category: action.payload
//             }
//         }
//     }
    
//     return state;
// }

export function reducer(
    initialState,
    on(AddInTaken, state => return {...state}),
    on(ActionTypes.GetImportanceSuccess, (state, action) => {
        return {
         ...state, 
         category: action.payload,
        }
        }
) 

export const reducers: ActionReducerMap<IAppState> = { app: reducer };