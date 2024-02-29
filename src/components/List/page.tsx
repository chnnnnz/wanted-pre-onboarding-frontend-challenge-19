import React, { useState } from 'react'
import Button from '../common/button'
import Input from '../common/input'

export type TodoListProps = {
  text?: string
}

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue(''); 
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="w-[960px] m-auto mt-[50px]">
      <div>
        <h2 className="text-[18px] font-[500] mb-[20px]">TODO LIST 작성하기</h2>
        <div className="flex items-center justify-center w-full">
          <Input
            className="w-[calc(100%-30px)]"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={addTodo}>입력</Button>
        </div>
      </div>
      <div className="mt-[100px]">
        <h2 className="text-[18px] font-[500] mb-[20px]">TODO LIST</h2>
        <ul>
          {todos.map((todo, index) => (
            <li 
              key={index}
              className="border border-gray-03 rounded-[5px] mb-[20px] px-[20px] py-[20px] text-[16px] font-[500] flex items-center"  
            >
              <p 
                className="w-[50px] h-[50px] bg-gray-02 rounded-[50%] text-center leading-[50px] text-[20px] font-[600] mr-[20px]"
              >      
                {index+1}
              </p>
              <p className="w-[calc(100%-170px)]">{todo}</p>
              <Button 
                onClick={() => removeTodo(index)}
                className="bg-gray-02 w-[100px] !text-gray-09"
              >삭제</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;