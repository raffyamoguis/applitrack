import React from "react";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

const Account: React.FC = () => {
  return (
    <Box boxSize={{ base: "xs", sm: "sm", md: "md" }}>
      {/* <Text as="b" fontSize="lg" textAlign="start">
        Automation
      </Text> */}
      <FormControl display="flex" alignItems="center" mt="2" mb="4">
        <FormLabel
          htmlFor="email-alerts"
          mb="0"
          flex="1"
          pr="4"
          fontWeight={500}
        >
          Enable auto fetch company info
        </FormLabel>
        <Switch id="email-alerts" colorScheme="nigga" />
      </FormControl>
      <Divider />
      <FormControl display="flex" alignItems="center" mt="2" mb="4">
        <FormLabel
          htmlFor="email-alerts"
          mb="0"
          flex="1"
          pr="4"
          fontWeight={500}
        >
          Enable integration with the extension
        </FormLabel>
        <Switch id="email-alerts" colorScheme="nigga" />
      </FormControl>
      <Divider />
      <FormControl display="flex" alignItems="center" mt="2" mb="4">
        <FormLabel
          htmlFor="email-alerts"
          mb="0"
          flex="1"
          pr="4"
          fontWeight={500}
        >
          Automatically change application status to no feedback if the
          application have no follow up for a month.
        </FormLabel>
        <Switch id="email-alerts" colorScheme="nigga" />
      </FormControl>
      <Divider mb="10" />
      {/* <Text as="b" fontSize="lg">
        Account
      </Text> */}
      <Flex mt="2" mb="4" fontWeight={500} alignItems="center">
        <Text>Delete your account.</Text>
        <Spacer />
        <Button colorScheme="red" variant="ghost" size="sm">
          Delete
        </Button>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Account;
