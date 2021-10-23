import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const FrontBlock = styled.div
`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

const TasksRight = styled.div`
  color: #ffb900;
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
  text-align: right;
`;

function FrontComponent() {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <FrontBlock>
      <h1>⭐오늘 할 일</h1>
      <div className="day">{dateString} {dayName}</div>
      <TasksRight>{undoneTasks.length} 남은 할 일 / {todos.length} 전체 할 일</TasksRight>
    </FrontBlock>
  );
}

export default FrontComponent;
