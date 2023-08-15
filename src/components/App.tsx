import React, { useState, useEffect } from "react";
import Header from "./Header.tsx";

// criar interface de busca de usuarios no github e mostrar os dados

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header showShadow={showShadow} />
    </>
  );
}

export default App;
