import { useState, useEffect } from "react";
import styled from "styled-components";


const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  letter-spacing: 0em;
  height: 10vh;
  background: rgba(255, 255, 255, 0.173);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  h1 {
    font: 800 48px/20px "Bricolage Grotesque", sans-serif;
    display: flex;
    color: #9765d8;
    &:hover {
      color: #000;
      cursor: default;
      transform: rotate(360deg) scale(1.2);
      transition: 0.6s;
    }
    transition: box-shadow 0.3s ease-in-out;
  }
  h2 {
    font: 700 24px/20px "Bricolage Grotesque", sans-serif;

    display: flex;
    color: #898989;
    &:hover {
      cursor: pointer;
      color: #d1d1d1;
    }
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    border-bottom: 1px solid #d1d1d1;
    margin-left: 60px;
  }
`;

const Header = () => {

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
    <HeaderWrapper
      style={{
        boxShadow: showShadow ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <h1>H</h1>
      <h2>Página Inicial</h2>
      <h2>Buscas Recentes</h2>
    </HeaderWrapper>
  );
};

export default Header;
