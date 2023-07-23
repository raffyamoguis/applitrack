import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Text,
  Container,
  Flex,
  Select,
  Button,
  Spacer,
} from "@chakra-ui/react";

// Componetns
import ApplicationCards from "../components/application/ApplicationCards";

type Options = {
  sort: string;
  filter: string;
};

const Applications: React.FC = () => {
  const [totalApplications, setTotalApplications] = useState<number>(0);
  const [options, setOptions] = useState<Options>({ sort: "asc", filter: "" });

  const handleTotalApplications = (total: number) => {
    // Update parent component state or perform actions with the received data
    setTotalApplications(total);
  };

  const handleSortOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions({ ...options, sort: e.target.value });
  };

  const handleFilterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions({ ...options, filter: e.target.value });
  };

  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" mt="5" gap="2">
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Applications
        </Text>
      </Flex>

      <Flex alignItems="center" mt="10" gap="2">
        <Text fontSize="sm" as="b">
          {totalApplications} total applications.
        </Text>

        <Spacer />

        <Select
          placeholder="Sortby"
          size={{ base: "xs", sm: "sm", md: "md" }}
          w={100}
          value={options.sort}
          onChange={handleSortOnChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Select
          placeholder="Filter"
          size={{ base: "xs", sm: "sm", md: "md" }}
          w={100}
          value={options.filter}
          onChange={handleFilterOnChange}
        >
          <option value="Assesment">Assesment</option>
          <option value="Initial Interview">Initial</option>
          <option value="Technical Interview">Technical</option>
          <option value="Final Interview">Final</option>
          <option value="Not Selected">Not Selected</option>
          <option value="No Update">No Update</option>
        </Select>
        <Button
          as={ReactLink}
          to="/applications/new"
          colorScheme="nigga"
          size={{ base: "xs", sm: "sm", md: "md" }}
        >
          Add New
        </Button>
      </Flex>
      <ApplicationCards
        sendTotalApplications={handleTotalApplications}
        options={options}
      />
    </Container>
  );
};

export default Applications;
