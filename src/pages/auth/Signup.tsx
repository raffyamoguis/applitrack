import React from "react";
import { Box, AbsoluteCenter } from "@chakra-ui/react";

const Login: React.FC = () => {
  return (
    <Box position="relative" h="100px">
      <AbsoluteCenter bg="tomato" p="4" color="white" axis="both">
        Hello
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;
