import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todo';

const TodoItemCreator = () => {
  const [inputState, setInputState] = React.useState<string>('');

  const inputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  // MEMO: atomsのデータストアを更新するための関数
  // atomsを引数に渡す
  // ストアの値は不要なので、setRecoilStateの方を利用している
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    setTodoList(oldState => {
      return [...oldState, {text: inputState, isComplete: false}]
    });

    setInputState('');
  };

  return (
    <>
      <label>
        ラベル
        <input type="text" value={inputState} onChange={inputHandleChange} />
      </label>
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default TodoItemCreator;
