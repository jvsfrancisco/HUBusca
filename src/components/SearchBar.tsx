import styled from "styled-components";

import UserInfo from "./UserInfo.tsx";
import { UserType } from "./../types/UserType.ts";

interface SearchBarProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    showUserInfo: boolean;
    userData: UserType; 
}

const WrapperSearchBar = styled.form`
  position: relative;
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
    border: 1px solid #0000002D;
    outline: none;
    padding: 0 10px 0 40px; 
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
    position: absolute; 
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    z-index: 1;
  }
`;

const UserInfoExtension = styled.div`
  position: absolute;
  top: 100%; /* Coloca o UserInfo abaixo da SearchBar */
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const SearchBar = ({ onSubmit, search, setSearch, showUserInfo, userData }: SearchBarProps) => {
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
        disabled={showUserInfo}
      />
      <UserInfoExtension show={showUserInfo}>
        {userData && <UserInfo user={userData} />}
      </UserInfoExtension>
    </WrapperSearchBar>
  );
};

export default SearchBar;
