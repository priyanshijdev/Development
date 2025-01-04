import React, {useState} from "react";
import { 
    useGetTodosQuery, 
    useAddTodoMutation, 
    useUpdateTodoMutation, 
    useDeleteTodoMutation 
        } from "./rtk/appSlice.tsx";

const Todo = () =>{

    const { data: todos = [], isLoading, isError } = useGetTodosQuery({});
    const [addTodo] = useAddTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = async () => {
        if (newTodo.trim()) {
          await addTodo({ title: newTodo, completed: false });
          setNewTodo('');
        }
      };

      const handleUpdateTodo = async (todo: any) => {
        await updateTodo({ ...todo, completed: !todo.completed });
      };
    
      const handleDeleteTodo = async (id: string) => {
        await deleteTodo(id);
      };    


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong</p>;

    return (
        <>
        <h1>Todo List</h1>
        <div>
            <input
            type="text"
            value={newTodo}
            onChange={(e) =>setNewTodo(e.target.value)}
            placeholder="Add a new to-do"
            />
            <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo: any) => (
            <li key={todo.id}>
                <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                }}
                onClick={() => handleUpdateTodo(todo)}
                >
                {todo.title}
                </span>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
            ))}
      </ul>
        </div>
    </>
    )
}

export default Todo;