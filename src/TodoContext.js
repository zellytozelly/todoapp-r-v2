import React, { createContext, useReducer, useContext, useRef } from 'react';

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const initTodos = [
  {id: 1, text: '하단에서 할 일을 추가하세요.', done: false},
  {id: 2, text: '버튼을 누르면 작업이 완료됩니다.', done: true}
];

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
