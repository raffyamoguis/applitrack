import { SimpleGrid } from "@chakra-ui/react";
import ApplicationFilter from "./application-filter";
import ApplicationSort from "./application-sort";
import ApplicationSearch from "./application-search";

import useApplications from "../../hooks/application/useApplications";
import { useApplicationSort } from "../../state/application/useApplicationSort";
import { useApplicationFilter } from "../../state/application/useApplicationFilter";
import { useApplicationSearch } from "../../state/application/useApplicationSearch";
import { useAuth } from "../../utils/AuthContext";

const ApplicationData = () => {
  const { user } = useAuth();
  const sortType = useApplicationSort((state) => state.sortType);
  const selectedFilter = useApplicationFilter((state) => state.selectedFilter);
  const searchQuery = useApplicationSearch((state) => state.searchQuery);
  const { data: applications } = useApplications({
    userId: user?.$id,
    sortType: sortType,
    filterType: selectedFilter,
  });

  console.log("Applications: ", applications);
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} marginTop={4}>
      index
    </SimpleGrid>
  );
};

export {
  ApplicationData,
  ApplicationFilter,
  ApplicationSort,
  ApplicationSearch,
};
