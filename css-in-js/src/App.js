import React from 'react';
import './App.css';
import styled from 'styled-components';


const textStyles={
  color: 'red',
  fontSize: '24px',
}; 

const Text= styled.div`
color: pink;
font-size: 28px;
border: ${({isActive}) => isActive ? '1px solid green': '5px solid orange' }`;

function App() {

  return (
    <div className="App">
      <div style={textStyles} class='card'>I am component</div>
      <Text isActive={false}>I am component</Text>
    </div>
  );
}

export default App;
