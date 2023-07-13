import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Flex,
  Button,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import {
  IconReportAnalytics,
  IconInfoSquareRounded,
  IconReplaceFilled,
} from "@tabler/icons-react";

const ApplicationForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.md">
      <Flex alignItems="center" mt="4">
        <Button
          colorScheme="nigga"
          variant="ghost"
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
        <Spacer />
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Create new
        </Text>
      </Flex>

      <Box boxSize={{ base: "xs", sm: "sm", md: "md" }} m="auto">
        <Text mt="18" mb="2" fontSize="lg" fontWeight="500">
          Company
        </Text>
        <InputGroup mb="4">
          <InputLeftElement pointerEvents="none">
            <Icon as={IconReportAnalytics} color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Name" />
        </InputGroup>
        <InputGroup mb="4">
          <InputLeftElement pointerEvents="none">
            <Icon as={IconInfoSquareRounded} color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Info" />
        </InputGroup>
        <InputGroup mb="5">
          <InputLeftElement pointerEvents="none">
            <Icon as={IconReplaceFilled} color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Position" />
        </InputGroup>
        <Button w="100%" colorScheme="nigga">
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default ApplicationForm;
