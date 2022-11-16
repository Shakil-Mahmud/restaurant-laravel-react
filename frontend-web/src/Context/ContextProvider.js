import React, { useState, useEffect, createContext } from "react";
export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [user, setUser] = useState({
    name: "harry potter",
  });
  return (
    <PageContext.Provider
      value={{
        user: user,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
