import { writable } from 'svelte/store';
import {supabase} from "../supabase.js";
export const todos = writable([]);

export const loadTodos = async () => {
    const {data, error} = await supabase.from('todo').select();
    if(error) {
        return console.error(error);
    }
    todos.set(data);
}
loadTodos();

export const addTodo = async (text, user_id) => {
    const {data, error} = await supabase.from('todo').insert([{text, user_id}]);
    
    if(error) {
        return console.error(error);
    }

    todos.update(cur => [...cur, data[0]]);
};

export const deleteTodo = async (id) => {
    const {error} = await supabase.from('todo').delete().match({id});
    
    if(error) {
        return console.error(error);
    }

	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id, currentState) => {
    const {error} = await supabase.from('todo').update({completed: !currentState}).match({id})

    if(error) {
        return console.error(error);
    }

	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
