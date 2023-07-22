import React, { createContext, useState, useEffect, useContext } from "react";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import { account } from "../appwriteConfig";

interface AuthContextData {
  user: any; // Replace 'any' with the actual type of your user object
  handleUserLogin: (e: React.FormEvent, credentials: any) => void;
  handleUserRegister: (credentials: any) => void;
  handleUserLogout: () => void;
}

const AuthContext = createContext<AuthContextData>({
  user: null,
  handleUserLogin: (_e: React.FormEvent, _credentials: any) => {},
  handleUserRegister: (_credentials: any) => {},
  handleUserLogout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  const getUserOnLoad = async () => {
    try {
      const accountDetails = await account.get();

      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleUserLogin = async (e: React.FormEvent, credentials: any) => {
    e.preventDefault();

    try {
      await account.createEmailSession(credentials.email, credentials.password);

      const accountDetails = await account.get();

      setUser(accountDetails);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserRegister = async (credentials: any) => {
    try {
      await account.create(
        ID.unique(),
        credentials.email,
        credentials.password,
        credentials.name
      );

      await account.createEmailSession(credentials.email, credentials.password);

      const accountDetails = await account.get();

      setUser(accountDetails);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLogout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const contextData = {
    user,
    handleUserLogin,
    handleUserRegister,
    handleUserLogout,
  };

  useEffect(() => {
    getUserOnLoad();
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
