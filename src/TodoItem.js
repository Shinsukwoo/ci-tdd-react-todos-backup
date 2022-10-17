import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    const {id, text, done} = todo;
    return (
            <li>
                <span 
                style={{
                    textDecoration: done ? 'line-through' : 'none'
                }}
                onClick={() => onToggle(id)}>{text}</span>
                <butoon onClick={() => onRemove(id)}>삭제</butoon>
            </li>);
};
export default TodoItem;