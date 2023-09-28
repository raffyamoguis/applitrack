import React, { useState } from "react";
import {
  Text,
  Select,
  Button,
  Spacer,
  InputGroup,
  Input,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// Components
import { Page, PageHeader, PageTitle } from "../components/layout/page";
import {
  ApplicationData,
  ApplicationFilter,
  ApplicationSearch,
  ApplicationSort,
} from "../components/application";
import ApplicationCards from "../components/application/ApplicationCards";
import ApplicationSearchCards from "../components/application/ApplicationSearchCards";
import ApplicationFormModal from "./form/ApplicationModal";

// Hooks
import useSearchApplication from "../hooks/application/useSearchApplication";
import { useAuth } from "../utils/AuthContext";
import useCustomTitle from "../hooks/useCustomTitle";

type Options = {
  sort: string;
  filter: string;
};

const Applications: React.FC = () => {
  useCustomTitle("JA Tracker | Applications");
  const { user } = useAuth();
  const [totalApplications, setTotalApplications] = useState<number>(0);
  const [options, setOptions] = useState<Options>({ sort: "desc", filter: "" });
  const [search, setSearch] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const {
  //   data: applications,
  //   isLoading,
  //   isSuccess,
  // } = useSearchApplication(search, user?.$id);

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
    <Page>
      <PageTitle title="Applications" />

      <PageHeader>
        <Text fontSize="sm" as="b">
          {totalApplications} total applications.
        </Text>

        <Spacer />
        <ApplicationSort />
        <ApplicationFilter />
        <Button
          colorScheme="nigga"
          size={{ base: "xs", sm: "sm", md: "md" }}
          onClick={onOpen}
        >
          Add New
        </Button>

        <ApplicationFormModal isOpen={isOpen} onClose={onClose} />
      </PageHeader>

      <ApplicationSearch />

      {/* {search ? (
        <ApplicationSearchCards
          isLoading={isLoading}
          isSuccess={isSuccess}
          sendTotalApplications={handleTotalApplications}
          total={applications?.total}
          applications={applications?.documents}
        />
      ) : (
        <ApplicationCards
          sendTotalApplications={handleTotalApplications}
          options={options}
        />
      )} */}
      <ApplicationData />
    </Page>
  );
};

export default Applications;
