import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdAddCircle } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div
`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  transform: rotate(45deg);
  display: none;
`;

const TodoBlock = styled.div
`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;

  &:hover {
    border-radius: 15px;
    box-shadow: 0px 2px 2px 0px rgba(207,207,207,.2);
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div
`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css
    `
      border: 1px solid #ffcd4a;
      color: #ffffff;
      background-color: #ffcd4a
    `}
`;

const Text = styled.div
`
  flex: 1;
  font-size: 21px;
  font-weight: bolder;
  color: #495057;
  ${props =>
    props.done &&
    css
    `
      color: #ced4da;
      text-decoration:line-through
    `}
`;

function TodoComponent({ id, done, text }) {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id
    });
  };

  return (
    <TodoBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdAddCircle />
      </Remove>
    </TodoBlock>
  );
}

export default React.memo(TodoComponent);
