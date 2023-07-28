import React from "react";
import { useQueryClient } from "react-query";
import {
  Card,
  CardBody,
  Text,
  Flex,
  Spacer,
  Badge,
  HStack,
  Select,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { formatDate } from "../../helpers/util";
import useUpdateApplication from "../../hooks/application/useUpdateApplication";
import UpdateApplicationModal from "../../pages/form/UpdateApplicationModal";

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
  const queryClient = useQueryClient();
  const useUpdateApplicationMutation = useUpdateApplication();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    onDelete(application.$id);
  };

  // Function to handle the onChange event
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    useUpdateApplicationMutation.mutate(
      {
        documentID: application.$id,
        application: { status: event.target.value },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("applications");
          toast({
            title: "Application status changed.",
            status: "success",
            position: "bottom-right",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
          });
        },
      }
    );
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
          <Select
            size="sm"
            w="28"
            placeholder="Status"
            value={application.status}
            onChange={handleSelectChange}
          >
            <option value="Initial Interview">Initial Interview</option>
            <option value="Technical Interview">Technical Interview</option>
            <option value="Final Interview">Final Interview</option>
            <option value="Assesment">Assesment</option>
            <option value="Not Selected">Not Selected</option>
            <option value="No Update">No Update</option>
          </Select>
        </Flex>
        <HStack spacing="10px" align="center" justify="start" mt="5">
          <EditIcon color="gray" _hover={{ color: "black" }} onClick={onOpen} />
          <UpdateApplicationModal
            isOpen={isOpen}
            onClose={onClose}
            id={application?.$id}
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
