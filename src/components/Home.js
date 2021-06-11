import React from 'react'
import styled from 'styled-components'

const Imagens=styled.img`
width:200px;
height:200px
`
const SepararTitulo=styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin:2px
`
const AlinharImagens=styled.div`
  border:1px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:2px
`


const QuantidadeNaTela=styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr  ;
  border: 1px solid black;
  padding:5px
`
export default class Home extends React.Component{
    state={
      opcao1:"Decrescente",
      
    }
    onClickOpcao=(event)=>{
      
      this.setState({opcao1:event.target.value})
      
    }
    render(){
        const listaDeProdutos=this.props.produtos.map((produto)=>{
           
            return (<AlinharImagens>
              <Imagens src={produto.imagem}/>
             <p>{produto.name}</p>
             <p>R${produto.valor}</p>
             <button onClick={() => this.props.adicionarCarrinho(produto.id)}>Adicionar ao carrinho</button>
            </AlinharImagens>
            )
        }) 
        console.log(listaDeProdutos)
        
        return(
            <div>
            <SepararTitulo>
                <h1>Produtos </h1>
                <div>
                <span> ordenar:</span>
                <select value={this.state.opcao1} onChange={this.onClickOpcao}>
                <option >Crescente</option>
                <option>Decrescente</option>
                </select>
            </div>
            </SepararTitulo>
                <QuantidadeNaTela>
                 
                {listaDeProdutos}
                  <p>carrinho 1 {this.props.contador} </p>
               </QuantidadeNaTela>
            </div>
        )
    }
}