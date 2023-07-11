import React from "react";

import {
  Card,
  CardBody,
  Text,
  Flex,
  Spacer,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";

import { IconApps } from "@tabler/icons-react";

const overviewData = [
  {
    title: "New Applicants",
    icon: IconApps,
    numbers: "+200",
    note: "+20.1% from last month",
  },
  {
    title: "Pending Applicants",
    icon: IconApps,
    numbers: "+70",
    note: "+29.1% from last month",
  },
  {
    title: "Failed Applications",
    icon: IconApps,
    numbers: "+200",
    note: "+20.1% from last month",
  },
  {
    title: "Ongoing Applications",
    icon: IconApps,
    numbers: "+800",
    note: "+20.1% from last month",
  },
];

const OverviewCards: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} marginTop={10}>
      {overviewData.map((item, key) => (
        <Card borderRadius="xl" key={key}>
          <CardBody>
            <Flex>
              <Text as="b">{item.title}</Text>
              <Spacer />
              <Icon as={item.icon} />
            </Flex>
            <Text fontSize="2xl" as="b" marginTop="3">
              +200
            </Text>
            <Text fontSize="sm" marginTop="1">
              {item.note}
            </Text>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default OverviewCards;
