import React from 'react';
import styled from 'styled-components';
import TodoComponent from './TodoComponent';
import { useTodoState } from '../TodoContext';

const ListBlock = styled.div
`
  flex: 1;
  padding: 20px 20px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function ListComponent() {
  const todos = useTodoState();
  return (
    <ListBlock>
      {todos.map(todo => (
        <TodoComponent
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </ListBlock>
  );
}

export default ListComponent;
