import React from "react";
import styled from "styled-components";


const ContainerFiltro = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 2px;
`;

const Quantity = styled.div`
    
`

export default class Filtro extends React.Component {
  state={
    nome:"",
    valorMinimo:"",
    valorMaximo:""
  }

  onChangeNome=(event) =>{
    this.setState({nome: event.target.value})
  }
  onChangeValorMinimo=(event)=>{
      this.setState({valorMinimo: event.target.value})
  }
  onChangeValorMaximo=(event)=>{
    this.setState({valorMaximo: event.target.value})
}
  render() {
      const listaFiltrada=this.props.listaDeProdutos.filter((numero)=>{
        if(numero>this.props.min && numero<this.props.max){
            return true
        }else{return false}
        
      })
      console.log("filtro",listaFiltrada)
     
           
        
      //teste
      const filtraValor = this.props.produtos.filter((produto)=>{
        if(produto.valor === listaFiltrada[0]){
          return true
        }else if(produto.valor === listaFiltrada[1]){
          return true
        }else if(produto.valor === listaFiltrada[2]){
          return true
        }else if(produto.valor === listaFiltrada[3]){
          return true
        }else if(produto.valor === listaFiltrada[4]){
          return true
        }else if(produto.valor === listaFiltrada[5]){
          return true
        }else{
          return false
        }
      })
    

      console.log('Filtro Home', filtraValor)
    return (
      <ContainerFiltro>
         
        <h3>Filtro</h3>
        <label className="Quantity">
        <p>Valor Minimo</p>
        <input type="number" min="4000" max="6000" value={this.state.valorMinimo} onChange={this.onChangeValorMinimo} /> 
        </label>
        <p>Valor Máximo</p>
        <label className="Quantity">
        <input type="number" min="4000" max="6000" value={this.state.valorMaximo} onChange={this.onChangeValorMaximo}/>
        </label>      
        <p>Buscar Por Nome</p>  
        <label className="Quantity">
        <input placeholder="Buscar Por Nome" value={this.state.nome} onChange={this.onChangeNome}/>
        </label>
      </ContainerFiltro>
    );
  }
}

