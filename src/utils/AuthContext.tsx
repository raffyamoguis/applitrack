import React, { createContext, useState, useEffect, useContext } from "react";
import { Box, AbsoluteCenter, useToast } from "@chakra-ui/react";
import { ID } from "appwrite";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { account } from "../appwriteConfig";
import Ripple from "../components/ripple/Ripple";

interface AuthContextData {
  user: any; // Replace 'any' with the actual type of your user object
  isLoggingIn: boolean;
  isCreatingAcc: boolean;
  handleUserLogin: (credentials: any) => void;
  handleUserRegister: (credentials: any) => void;
  handleUserLogout: () => void;
}

const AuthContext = createContext<AuthContextData>({
  user: null,
  isLoggingIn: false,
  isCreatingAcc: false,
  handleUserLogin: (_credentials: any) => {},
  handleUserRegister: (_credentials: any) => {},
  handleUserLogout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);
  const [isLoggingIn, setLoggingIn] = useState<boolean>(false);
  const [isCreatingAcc, setCreatingAcc] = useState<boolean>(false);

  const getUserOnLoad = async () => {
    try {
      const accountDetails = await account.get();

      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleUserLogin = async (credentials: any) => {
    setLoggingIn(true);
    try {
      await account.createEmailSession(credentials.email, credentials.password);

      const accountDetails = await account.get();

      setUser(accountDetails);
      setLoggingIn(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoggingIn(false);
      toast({
        title: "Error.",
        description: "" + error,
        status: "error",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUserRegister = async (credentials: any) => {
    setCreatingAcc(true);
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
      setCreatingAcc(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setCreatingAcc(false);
      toast({
        title: "Error.",
        description: "" + error,
        status: "error",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUserLogout = async () => {
    await account.deleteSession("current");
    setUser(null);
    queryClient.clear();
  };

  const contextData = {
    user,
    isLoggingIn,
    isCreatingAcc,
    handleUserLogin,
    handleUserRegister,
    handleUserLogout,
  };

  useEffect(() => {
    getUserOnLoad();
  }, []);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <Box position="relative" h="100vh">
          <AbsoluteCenter p="4" axis="both">
            <Ripple />
          </AbsoluteCenter>
        </Box>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
