import React from 'react';
import { Todo } from '../atoms/todo';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todo';

interface ItemProps {
  index: number;
  todoItem: Todo;
}

// MEMO: ステートはread onlyで再代入不可なので、sliceを使って新たな配列を作り、
// そこに新しいオブジェクトを挿入する。
const removeTodo = (todos: Todo[], i: number) => {
  // MEMO: 
  // [...ary.slice(0, 2)]・・・最初から２番目(インデックスじゃなくて要素の数でカウント)
  // [...ary.slice(2)]・・・インデックスで数えで2番目から、その後の要素全部
  return [...todos.slice(0, i), ...todos.slice(i + 1)];
}

const replaceTodo = (todos: Todo[], task: Todo, i: number) => {
  // MEMO: 間に変更したいオブジェクトを入れ込むことで変更できる
  return [...todos.slice(0, i), task, ...todos.slice(i + 1)]
}

const TodoItem: React.FC<ItemProps> = ({ index, todoItem }) => {
  // MEMO: useRecoilStateを使用すると値と変更用の関数が返ってくる
  // stateHooksの[値, 変更用の関数]みたいな感じ？
  const [todoState, setTodoState] = useRecoilState(todoListState);

  const deleteTodo = () => {
    const todo = removeTodo(todoState, index);

    setTodoState(todo);
  };

  const changeTodo = () => {
    const todo = replaceTodo(todoState, {
      ...todoItem, 
      isComplete: !todoItem.isComplete,
    }, index);

    setTodoState(todo);
  };

  return (
    <>
      <p>{index + 1}</p>
      <input
        type="checkbox"
        checked={todoItem.isComplete}
        onChange={changeTodo}
      />
      <p>{todoItem.text}</p>
      <p>{todoItem.isComplete ? 'やったわ': 'やってね'}</p>
      <button onClick={deleteTodo}>削除</button>
    </>
  );
};

export default TodoItem;
