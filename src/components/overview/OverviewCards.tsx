import React from "react";

import {
  Card,
  CardBody,
  Text,
  SimpleGrid,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import {
  IconLoader3,
  IconDeviceDesktopAnalytics,
  IconExclamationCircle,
  IconId,
} from "@tabler/icons-react";

const overviewData = [
  {
    title: "New",
    icon: IconDeviceDesktopAnalytics,
    numbers: "+200",
    note: "+20.1% from last month",
  },
  {
    title: "Pending",
    icon: IconLoader3,
    numbers: "+70",
    note: "+29.1% from last month",
  },
  {
    title: "Failed",
    icon: IconExclamationCircle,
    numbers: "+200",
    note: "+20.1% from last month",
  },
  {
    title: "Ongoing",
    icon: IconId,
    numbers: "+800",
    note: "+20.1% from last month",
  },
];

const OverviewCards: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} marginTop={10}>
      {overviewData.map((item, key) => (
        <Card borderRadius="xl" variant="outline" shadow="sm" key={key}>
          <CardBody>
            <Flex alignItems="gray">
              <Text as="b" colorScheme="nigga" fontSize="lg">
                {item.title}
              </Text>

              <Spacer />
              <item.icon color="gray" />
            </Flex>
            <VStack align="start" mt="4" spacing={0}>
              <Text fontSize="3xl" as="b">
                {item.numbers}
              </Text>
              <Text fontSize="sm">{item.note}</Text>
            </VStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default OverviewCards;
