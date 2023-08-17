import React from "react";
import styled from "styled-components";

const WrapperUserInfo = styled.div`
  // Estilos para WrapperUserInfo
  display: flex;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 0 auto;
    display: block;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 10px 0;
    text-align: center;
    color: #000;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 10px 0;
    text-align: center;
    color: #898989;
  }
  div {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.6s;
  }
  &:sel
`;

const UserInfo = ({ user }) => {
  return (
    <WrapperUserInfo>
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h2>{user.name}</h2>
        <p>{user.login}</p>
        <p>{user.location}</p>
      </div>
    </WrapperUserInfo>
  );
};

export default UserInfo;
