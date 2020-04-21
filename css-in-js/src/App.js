import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';

const UseStateExample = () => {
  const [ name, setName]= useState('Hina');
  const [address, setAddress]=useState(null);

  useEffect(()=> {
    const fetchFunc = async () =>{
      const response= await fetch('https://jsonplacehodler.typicode.com')
      const resJson=await response.json();
      setName(resJson[0])
    }
    fetchFunc();
    console.log('hello')
  }, []); // empty array is must be given. so that it didnot call infinite times

  return (
    <div>
      <h1>Hina Khadim</h1>
      <button onClick={()=> setName('Andrie')}>Submit</button>
    </div>
  );
}

const textStyles={
  color: 'red',
  fontSize: '24px',
}; 

const Text= styled.div`
color: pink;
font-size: 28px;
border: ${({isActive}) => isActive ? '1px solid green': '5px solid orange' }`;

function App() {
  this.state={
    name:'hina',
    address:'majeed sre'
  }

  return (
    <div className="App">
      <div style={textStyles} class='card'>I am component</div>
      <Text isActive={false}>I am component</Text>
      <UseStateExample />
    </div>
  );
}

export default App;
