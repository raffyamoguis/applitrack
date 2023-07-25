import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Text,
  Container,
  Flex,
  Select,
  Button,
  Spacer,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// Componetns
import ApplicationCards from "../components/application/ApplicationCards";
import ApplicationSearchCards from "../components/application/ApplicationSearchCards";
import useSearchApplication from "../hooks/application/useSearchApplication";
import { useAuth } from "../utils/AuthContext";

type Options = {
  sort: string;
  filter: string;
};

const Applications: React.FC = () => {
  const { user } = useAuth();
  const [totalApplications, setTotalApplications] = useState<number>(0);
  const [options, setOptions] = useState<Options>({ sort: "desc", filter: "" });
  const [search, setSearch] = useState<string>("");

  const { data: applications, isLoading } = useSearchApplication(
    search,
    user?.$id
  );

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
          disabled={search !== ""}
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
          disabled={search !== ""}
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
      <InputGroup mt="4">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search"
          focusBorderColor="#2f2f31"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      {search ? (
        <ApplicationSearchCards
          isLoading={isLoading}
          applications={applications?.documents}
        />
      ) : (
        <ApplicationCards
          sendTotalApplications={handleTotalApplications}
          options={options}
        />
      )}
    </Container>
  );
};

export default Applications;
