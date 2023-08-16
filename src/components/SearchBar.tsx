import React from "react";
import styled from "styled-components";

const WrapperSearchBar = styled.form`
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
const SearchBar = ({ onSubmit, search, setSearch }) => {
  return (
    <WrapperSearchBar onSubmit={onSubmit}>
      <img
        src="https://img.icons8.com/ios/50/000000/search--v1.png"
        alt="lupa"
      />
      <input
        type="text"
        value={search}
        placeholder="Buscar usuário"
        onChange={(e) => setSearch(e.target.value)}
      />
    </WrapperSearchBar>
  );
};

export default SearchBar;
