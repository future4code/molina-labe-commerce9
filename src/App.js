import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import Car from "./components/Car";
import Filtro from "./components/Filtro"

const DividirTela = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;
const AlinharImagens=styled.div`
  border:1px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:2px
`
const Imagens=styled.img`
width:200px;
height:200px
`
export default class App extends React.Component {
   state={
    produtos: [
        {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        valor: 4000,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_708469-MLB41500988641_042020-W.jpgg ",
        quantidade: 0
      },
        {
          id: 2,
          name: "Ônibus espacial Columbia",
          valor: 6000.0,
          imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg",
          quantidade: 0
        },
          {
          id: 3,
          name: "Ônibus espacial marte",
          valor: 8000.0,
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdT-FUiDTgOBUJAqEr4Ofyf7yVhJHy052EQ&usqp=CAU",
          quantidade: 0
        },
          {
          id: 4,
          name: "Ônibus espacial Columbia",
          valor: 11000.0,
          imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Apollo_11_Lunar_Lander_-_5927_NASA.jpg/220px-Apollo_11_Lunar_Lander_-_5927_NASA.jpg",
          quantidade: 0
        },
          {
          id: 5,
          name: "Ônibus espacial Columbia",
          valor: 122000.0,
          imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg",
          quantidade: 0
          },
          {
          id: 6,
          name: "Ônibus espacial Columbia",
          valor: 23200.0,
          imagem: "https://acervofolha.blogfolha.uol.com.br/files/2018/02/Columbia4.jpg",
          quantidade: 0
          }
          
      ],
      carrinho:[],
      valores:[]
    }
    adicionarArray=()=>{
      const listaDeProdutos=this.state.produtos.map((produto)=>{
        return produto.valor
      })
      console.log('lista',listaDeProdutos)
    }
    adicionarCarrinho=(id)=>{   
            const produtoNoCarrinho=this.state.carrinho.find((produto)=>{
              return produto.id === id
            })
            if(produtoNoCarrinho){
              const novoCarrinho = this.state.produtos.map((produto)=>{
                  if(produto.id===id){
                    return {...produto,quantidade:produto.quantidade+1}
                  }
                  return produto
              })
              this.setState({carrinho:novoCarrinho})
            }else{
              const produtoAdicionar=this.state.produtos.find((produto)=>{
              return produto.id === id
            }) 
              const novoCarrinho= [...this.state.carrinho, {...produtoAdicionar,quantidade:1}]
              this.setState({carrinho:novoCarrinho})
            }
            const novoValor=this.state.contador+1
            this.setState({contador:novoValor})    
    }   
    adicionarCarrinho1=()=>{   
            const novoValor=this.state.contador+1
            this.setState({contador1:novoValor})    
    }   
  render() {
    const listaDeProdutos=this.state.produtos.map((produto)=>{
        return produto.valor
      })

      console.log('lista',listaDeProdutos)

    /*console.log('array',this.state.valores)
    console.log('array produto', this.state.produtos)*/
    return (
      <DividirTela>
        <div><Filtro produtos={this.state.produtos} listaDeProdutos={listaDeProdutos} min={4000} max={23200}/></div>
        <Home produtos={this.state.produtos} listaDeProdutos={listaDeProdutos} adicionarCarrinho={this.adicionarCarrinho} contador={this.state.contador} />
        <div>
          <Car produtos={this.state.produtos} min={4000} max={23200} adicionarCarrinho={this.adicionarCarrinho} contador={this.state.contador} />
        </div>
        
      </DividirTela>
     
    );
  }
}

