import { atom } from 'recoil';

export interface Todo {
  text: string;
  isComplete: boolean;
}

const initialTodo: Todo[] = [];

// MEMO: データストア
// recoilでは、データを種類ごとに最小限に絞り込んで保存する
export const todoListState = atom({
  key: 'todoListState',
  default: initialTodo,
});
