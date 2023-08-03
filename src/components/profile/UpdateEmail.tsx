import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Card,
  CardBody,
  Button,
  Box,
} from "@chakra-ui/react";
import { useAuth } from "../../utils/AuthContext";

const UpdateEmail: React.FC = () => {
  const { user } = useAuth();
  return (
    <Card variant="outline" shadow="sm" borderRadius="xl" mb="4">
      <CardBody>
        <form>
          <FormControl>
            <FormLabel fontSize="sm">Email</FormLabel>
            <Input type="text" defaultValue={user.email} />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Box textAlign="right">
            <Button colorScheme="nigga" mt="5" size="sm" isDisabled>
              Update
            </Button>
          </Box>
        </form>
      </CardBody>
    </Card>
  );
};

export default UpdateEmail;
