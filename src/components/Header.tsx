import React from "react";
import styled from "styled-components";

// criar interface de busca de usuarios no github e mostrar os dados

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  font: 800 48px/20px "Bricolage Grotesque", sans-serif;
  letter-spacing: 0em;
  height: 10vh;
  background: rgba(255, 255, 255, 0.173);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  h1 {
    display: flex;
    p {
      color: #9765d8;
    }
  }
  transition: box-shadow 0.3s ease-in-out;
`;

const Header = ({ showShadow }) => {
    return (
      <HeaderWrapper
        style={{
          boxShadow: showShadow ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <h1>
          <p>HUB</p>
          usca
        </h1>
      </HeaderWrapper>
    );
  };

export default Header;
