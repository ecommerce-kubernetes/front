import { Navigate } from "react-router-dom";
import { useVerify } from "../../contexts/AccountVerifyContext";

export const AccountModifyProtectedRoute = ({ children }) => {
  const { verified } = useVerify();

  if (!verified) {
    return <Navigate to={"/my/account/verify"} replace />;
  }
  return children;
};
