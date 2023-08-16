import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header.tsx";

const SearchBar = styled.div`
  position: relative; /* Necessário para posicionar o ícone corretamente */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100%;

  input {
    width: 50vw;
    height: 8vh;
    border-radius: 30px;
    /*colocar borda no input*/
    border: 0.5px solid #0000001f;
    outline: none;
    padding: 0 10px 0 40px; /* Adicione um espaço à esquerda para o ícone */
    font-size: 1.5rem;
    font-weight: 300;
    font-family: "Bricolage Grotesque", sans-serif;
    color: #000;
    background: rgba(255, 255, 255, 0.173);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition: box-shadow 0.3s ease-in-out;

    &:focus {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  img {
    position: absolute; /* Posicione o ícone absolutamente dentro do input */
    left: 10px; /* Ajuste a posição do ícone conforme necessário */
    top: 50%; /* Centralize verticalmente */
    transform: translateY(-50%); /* Ajuste para centralizar verticalmente */
    width: 1.5rem;
    height: 1.5rem;
    z-index: 1;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000;
  font: 800 80px/20px "Bricolage Grotesque", sans-serif;
  letter-spacing: 0em;
  height: 10vh;
  p {
    color: #9765d8;
  }
  margin-bottom: 10vh;
`;

function App() {
  const [showShadow, setShowShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header showShadow={showShadow} />
      <LogoWrapper>
        <p>HUB</p>
        <h1>usca</h1>
      </LogoWrapper>
      <SearchBar>
        <img
          src="https://img.icons8.com/ios/50/000000/search--v1.png"
          alt="lupa"
        />
        <input type="text" placeholder="Buscar usuário" />
      </SearchBar>
    </>
  );
}

export default App;
