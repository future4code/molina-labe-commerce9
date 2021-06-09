import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Car from './components/Car';



const DividirTela=styled.div`
display:grid;
grid-template-columns: 1fr 2fr 1fr
`

export default class App extends React.Component {
  render(){
    return (
      <DividirTela>
      <div>tela 2</div>
       
        <Home/>
        <div><Car/></div>
      </DividirTela>
    )
  }
  }
 
