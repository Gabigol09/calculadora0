// Importando os componentes necessários do React e o estilo do Material-UI
import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

// Componente funcional para a Calculadora
export default function Calculator() {
// Variáveis de estado para o número atual, número antigo e operador
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

// Função para lidar com a entrada de números
  function inputNum(e) {
    var input = e.target.value;
// Atualiza o número atual com base na entrada
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }
// Função para limpar o número atual
  function clear() {
    setNum(0);
  }
// Função para calcular a porcentagem do número atual
  function porcentage() {
    setNum(num / 100);
  }
// Função para alterar o sinal do número atual
  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }
// Função para lidar com a entrada de operadores
  function operatorHandler(e) {
    var operatorInput = e.target.value;
        // Salva o número atual como o número antigo, define o operador e reinicia o número atual
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

// Função para realizar o cálculo com base no operador selecionado
  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

// Estrutura JSX para renderizar o componente da Calculadora
  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="result">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="X">
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
