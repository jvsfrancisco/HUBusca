import React, { useState, useContext } from "react";
import styled from "styled-components";

import Header from "./../../components/Header.tsx";
import SearchBar from "./../../components/SearchBar.tsx";
import useSearchUser from "./../../hooks/api/useSearchUser.ts";
import UserContext from "./../../contexts/UserContext.tsx";

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

const Homepage = () => {
  const [search, setSearch] = useState("");
  const { searchUser } = useSearchUser();
  const { userData, setUserData } = useContext(UserContext);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const submitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await searchUser(search);
      setUserData(data);
      setShowUserInfo(true);
    } catch (err) {
      console.log(err);
    }
    return;
  };

  return (
    <>
      <Header />
      <LogoWrapper>
        <p>HUB</p>
        <h1>usca</h1>
      </LogoWrapper>
      <SearchBar
        onSubmit={submitSearch}
        search={search}
        setSearch={setSearch}
        showUserInfo={showUserInfo}
        userData={userData}
      />
    </>
  );
};

export default Homepage;
