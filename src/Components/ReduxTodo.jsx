import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInput, delInput, isChechked, toDoListItems } from '../Slices/ToDoSlice'
import '../Styles/Todo.css'

const ReduxTodo = () => {
    const items = useSelector(toDoListItems);
    const dispatch = useDispatch();
    const [itemss, setitems] = useState('');
    const AddItems = () => {
        dispatch(addInput(itemss));
        setitems('')
    }
    return (
        <div className='container'>
            <h1>To Do List</h1>
            <div className="row d-flex input-row ">
                <div className="col-md-8 Add-input-box ">
                    <input type='text' placeholder='Add Your ToDo' value={itemss} onChange={(e) => setitems(e.target.value)} />
                </div>
                <div className="col-md-4 input-btn-">
                    <button className='add-btn' onClick={() => { AddItems() }} > Add</button>
                </div>
            </div>
            {items.map((data) => {
                return (
                    <> 
                    <div className="row todo-items">
                        <div className="col-md-8 col-mbl-2  text-center  d-flex justify-content-start align-items-center">
                            <input className='check-box d-flex' onChange={() => dispatch(isChechked(data.id))} type='checkbox' />
                            <div className={(data.completed) ? 'line' : null} >{data.todo}</div>
                        </div>
                        <div className="col-md-4 col-mbl">
                            <button className='del' onClick={() => dispatch(delInput(data.id))} >Delete</button>
                        </div>
                    </div>
                    </>
                )
            })}
            
        </div>
    )
}

export default ReduxTodo