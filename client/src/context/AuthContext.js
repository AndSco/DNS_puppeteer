import React, { createContext, useState } from "react";

const startingValue = {
  insertedEcasCredentials: false,
  ecasUsername: "",
  ecasPassword: "",
  saveEcasCredentials: () => {}
};

export const AuthContext = createContext(startingValue);

export const AuthContextProvider = ({ children }) => {
  const [insertedEcasCredentials, setInsertedEcasCredentials] = useState(false);
  const [ecasUsername, setEcasUsername] = useState("");
  const [ecasPassword, setEcasPassword] = useState("");

  React.useEffect(() => {
    console.log("ECAS U", ecasUsername);
    console.log("ECAS P", ecasPassword);
  }, [ecasUsername, ecasPassword]);

  const saveEcasCredentials = (username, password) => {
    setInsertedEcasCredentials(true);
    setEcasUsername(username);
    setEcasPassword(password);
  };

  const valuesToPass = {
    insertedEcasCredentials,
    ecasUsername,
    ecasPassword,
    saveEcasCredentials
  };

  return (
    <AuthContext.Provider value={{ ...valuesToPass }}>
      {children}
    </AuthContext.Provider>
  );
};
