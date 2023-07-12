import React from "react";
import { Card, CardBody, Text, Flex, Spacer } from "@chakra-ui/react";

import Status from "./status";

interface Props {
  name: string;
  date: string;
  position: string;
}

const applicationcard: React.FC<Props> = ({ name, date, position }) => {
  return (
    <Card variant="outline" shadow="sm" borderRadius="xl">
      <CardBody>
        <Text as="b" fontSize="lg">
          {name}
        </Text>
        <Text fontSize="sm">{date}</Text>
        <Flex alignItems="center" mt="5" gap="2">
          <Text as="b" fontSize="sm">
            {position}
          </Text>
          <Spacer />
          <Status />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default applicationcard;
