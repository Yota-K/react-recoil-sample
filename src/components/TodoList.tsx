import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atoms/todo';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

const TodoList = () => {
  // MEMO: atomsのstateの読み取るためのやつ
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem, i) => (
        <TodoItem key={i} index={i} todoItem={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
