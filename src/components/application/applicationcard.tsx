import React from "react";
import {
  Card,
  CardBody,
  Text,
  Flex,
  Spacer,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import Status from "./status";

interface Props {
  name: string;
  date: string;
  position: string;
  status: string;
}

const applicationcard: React.FC<Props> = ({ name, date, position, status }) => {
  return (
    <Card variant="outline" shadow="sm" borderRadius="xl">
      <CardBody>
        <Text as="b" fontSize="lg">
          {name}
        </Text>
        <Text fontSize="sm">{date}</Text>
        <Badge variant="solid" colorScheme="nigga" borderRadius="sm">
          {status}
        </Badge>
        <Flex alignItems="center" mt="5" gap="2">
          <Text as="b" fontSize="sm">
            {position}
          </Text>
          <Spacer />
          <Status />
        </Flex>
        <HStack spacing="10px" align="center" justify="start" mt="5">
          <EditIcon color="gray" _hover={{ color: "black" }} />
          <DeleteIcon color="gray" _hover={{ color: "black" }} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default applicationcard;
