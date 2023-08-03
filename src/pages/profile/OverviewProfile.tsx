import React from "react";
import { Box } from "@chakra-ui/react";
import UpdateName from "../../components/profile/UpdateName";
import UpdateEmail from "../../components/profile/UpdateEmail";
import UpdatePassword from "../../components/profile/UpdatePassword";

const OverviewProfile: React.FC = () => {
  return (
    <Box boxSize={{ base: "xs", sm: "sm", md: "md" }} m="auto" mt="4">
      <UpdateName />
      <UpdateEmail />
      <UpdatePassword />
    </Box>
  );
};

export default OverviewProfile;
