import React from 'react';
import "./TodoTotal.css"

const HeaderInput = ({inputText, onChange, onAddTodo}) => {
    return (
        <div className='header'>
            <h2>To do List</h2>
            <div>
                <input value={inputText} onChange={onChange}/>
                <button onClick={onAddTodo}>+</button>
            </div>
        </div>
    );
};

export default HeaderInput;