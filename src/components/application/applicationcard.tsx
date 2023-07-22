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
import { formatDate } from "../../helpers/util";
import { useNavigate } from "react-router-dom";

interface Application {
  $id: string;
  $createdAt: string;
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

interface Props {
  application: Application;
  onDelete: (itemId: string) => void;
}

const applicationcard: React.FC<Props> = ({ application, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/applications/${application.$id}`);
  };
  const handleDelete = () => {
    onDelete(application.$id);
  };
  return (
    <Card variant="outline" shadow="sm" borderRadius="xl">
      <CardBody>
        <Text as="b" fontSize="lg">
          {application.name}
        </Text>
        <Text fontSize="sm">{formatDate(application.$createdAt)}</Text>
        <Badge variant="solid" colorScheme="nigga" borderRadius="sm">
          {application.status}
        </Badge>
        <Flex alignItems="center" mt="5" gap="2">
          <Text as="b" fontSize="sm">
            {application.position_applied}
          </Text>
          <Spacer />
          <Status />
        </Flex>
        <HStack spacing="10px" align="center" justify="start" mt="5">
          <EditIcon
            color="gray"
            _hover={{ color: "black" }}
            onClick={handleEdit}
          />
          <DeleteIcon
            color="gray"
            _hover={{ color: "black" }}
            onClick={handleDelete}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default applicationcard;
