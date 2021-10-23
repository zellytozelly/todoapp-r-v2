import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button
`
  background: #ffcd4a;
  &:hover {
    background: #ffb900;
  }
  &:active {
    background: #ffcd4a;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css
    `
      background: #ff6666;
      &:hover {
        background: #fc4e4e;
      }
      &:active {
        background: #ff8a8a;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div
`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form
`
  background: #ffffff;
  padding-left: 32px;
  padding-top: 40px;
  padding-right: 32px;
  padding-bottom: 48px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #ffffff;
`;

const Input = styled.input
`
  color: #ffffff;
  font-weight: bold;
  background-color: #ffb900;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ffb900;
  width: 100%;
  height: 60px;
  outline: none;
  font-size: 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #ffffff;
    font-weight: bold;
  }
`;

function AddComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    nextId.current += 1;
    setOpen(false);
    setValue('');
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="새로운 할 일 추가 (Enter)"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(AddComponent);
