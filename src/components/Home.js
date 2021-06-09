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
        produtos: [
            {
            id: 1,
	          name: "Foguete da Missão Apollo 11",
	          valor: 4000,
	          imagem: "https://http2.mlstatic.com/D_NQ_NP_708469-MLB41500988641_042020-W.jpgg "
            },
            {
              id: 2,
              name: "Ônibus espacial Columbia",
              valor: 6000.0,
              imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg"
              },
              {
              id: 3,
              name: "Ônibus espacial Columbia",
              valor: 6000.0,
              imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg"
              },
              {
              id: 4,
              name: "Ônibus espacial Columbia",
              valor: 6000.0,
              imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg"
              },
              {
              id: 4,
              name: "Ônibus espacial Columbia",
              valor: 6000.0,
              imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg"
              },
              {
              id: 4,
              name: "Ônibus espacial Columbia",
              valor: 6000.0,
              imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg"
              },
              
          ]


        }
    render(){
        const listaDeProdutos=this.state.produtos.map((produto)=>{
            return (<AlinharImagens>
              <Imagens src={produto.imagem}/>
             <p>{produto.name}</p>
             <p>R${produto.valor}</p>
             <button>Adicionar ao carrinho</button>
            </AlinharImagens>
              
            )
        })
        return(
            <div>
            <SepararTitulo>
                <h1>Produtos </h1>
                <div>
                <span>ordenar:</span>
                <select>
                <option>Crescente</option>
                <option>Decrescente</option>
                </select>
            </div>
            </SepararTitulo>
                <QuantidadeNaTela>
                
                  {listaDeProdutos}
                  
               </QuantidadeNaTela>
            </div>
        )
    }
}