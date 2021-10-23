import React from 'react';
import { createGlobalStyle } from 'styled-components';
import LayoutComponent from './components/LayoutComponent';
import FrontComponent from './components/FrontComponent';
import ListComponent from './components/ListComponent';
import AddComponent from './components/AddComponent';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle
`
  body {
    background: #ffe294
  }
`;
function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <LayoutComponent>
        <FrontComponent />
        <ListComponent />
        <AddComponent />
      </LayoutComponent>
    </TodoProvider>
  );
}

export default App;
