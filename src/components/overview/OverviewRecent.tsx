import React from "react";

import {
  Card,
  CardBody,
  Text,
  Flex,
  Spacer,
  Badge,
  Avatar,
  VStack,
} from "@chakra-ui/react";

const recentData = [
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
  {
    icon: "https://bit.ly/ryan-florence",
    name: "Company X",
    address: "Company Address",
    status: "Something",
  },
];

const OverviewRecent: React.FC = () => {
  return (
    <Card borderRadius="xl">
      <CardBody>
        <Text fontSize="xl" as="b">
          Recent Application
        </Text>
        <Text fontSize="sm" marginTop="1" marginBottom="10">
          You made 200 applications this day
        </Text>

        {recentData.map((item, key) => (
          <Flex alignItems="center" gap="6" marginTop="4" key={key}>
            <Avatar size="sm" name="Raffy Amoguis" src={item.icon} />
            <VStack spacing="0" align="start">
              <Text fontSize="xs" as="b">
                {item.name}
              </Text>
              <Text fontSize="xs">{item.address}</Text>
            </VStack>
            <Spacer />
            <Badge variant="subtle" colorScheme="green">
              {item.status}
            </Badge>
          </Flex>
        ))}
      </CardBody>
    </Card>
  );
};

export default OverviewRecent;
