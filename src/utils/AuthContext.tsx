import React, { createContext, useState, useEffect, useContext } from "react";

interface AuthContextData {
  user: any; // Replace 'any' with the actual type of your user object
}

const AuthContext = createContext<AuthContextData>({ user: null });

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  const contextData = {
    user,
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
