import { createContext, useContext, useState } from "react";

const AccountVerifyContext = createContext();

export const AccountVerifyProvider = ({ children }) => {
  const [verified, setVerified] = useState(false);

  return (
    <AccountVerifyContext.Provider value={{ verified, setVerified }}>
      {children}
    </AccountVerifyContext.Provider>
  );
};

export const useVerify = () => {
  return useContext(AccountVerifyContext);
};
