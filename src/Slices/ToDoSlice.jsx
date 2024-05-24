import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        "id": 1,
        "todo": "Wake Up At morning at 5 O clock",
        "completed": false,
        "userId": 2
    },
    {
        "id": 2,
        "todo": "Learn react for 1 hour",
        "completed": false,
        "userId": 3
    },
    {
        "id": 3,
        "todo": "Go To Collage",
        "completed": false,
        "userId": 4
    }

]
const ToDoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers: {
        addInput: (state, action) => {
            const id = state.length;
            if(action.payload){
                state.push({
                    "id": id + 1,
                    "todo": action.payload,
                    "completed": false,
                    "userId": id + 2
                })
            }
            
        },
        delInput:(state,action)=>{
            const deleteindex = action.payload;
            return state.filter((task)=>task.id !== deleteindex)
            
        },
        isChechked:(state,action)=>{
            const val = action.payload;    
            const listitems = state.map((item)=> item.id === val ? {...item,completed:!item.completed} : item);
            return listitems
            
        }
    }
})

export const {addInput, delInput, isChechked} = ToDoSlice.actions;
export default ToDoSlice.reducer;
export const toDoListItems = (state)=> state.ToDo;
