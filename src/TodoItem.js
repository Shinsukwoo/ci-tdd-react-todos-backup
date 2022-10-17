import React from 'react';

const TodoItem = ({ todo }) => {
    const {id, text, done} = todo;
    return (
            <li>
                <span 
                style={{
                    textDecoration: done ? 'line-through' : 'none'
                }}>{text}</span>
                <butoon>삭제</butoon>
            </li>);
};
export default TodoItem;