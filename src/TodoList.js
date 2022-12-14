import React from 'react';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
};
export default TodoList;