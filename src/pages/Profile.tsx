import React from "react";
import {
  Container,
  Text,
  Flex,
  VStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

// Hooks
import { useAuth } from "../utils/AuthContext";
import useCustomTitle from "../hooks/useCustomTitle";
import ProfileAvatar from "../components/ProfileAvatar";
import Account from "./profile/Account";
import OverviewProfile from "./profile/OverviewProfile";

const Profile: React.FC = () => {
  const { user, userAvatar } = useAuth();
  useCustomTitle(`JA Tracker | ${user.name}`);

  return (
    <Container maxW="container.md">
      <Flex alignItems="center" mt="5" gap="2">
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Profile
        </Text>
      </Flex>

      <VStack align="center" mt="5" spacing="1" mb="2">
        <ProfileAvatar user={user} avatar={userAvatar} />

        <Text as="b" fontSize="lg">
          {user.name}
        </Text>
      </VStack>
      <Tabs colorScheme="nigga" align="center">
        <TabList>
          <Tab fontSize="sm">Overview</Tab>
          <Tab fontSize="sm">Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <OverviewProfile />
          </TabPanel>
          <TabPanel>
            <Account />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Profile;
