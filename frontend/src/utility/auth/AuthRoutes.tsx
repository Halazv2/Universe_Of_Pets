import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { useAuthUser } from "../auth/AuthHooks";

interface AuthRoutesProps {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isLoading } = useAuthUser();
  return isLoading ? <div>Loading...</div> : <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
