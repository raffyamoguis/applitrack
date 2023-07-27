import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

// Components
import Total from "./cards/Total";
import Ongoing from "./cards/Ongoing";
import NoUpdate from "./cards/NoUpdate";
import NotSelected from "./cards/NotSelected";

const OverviewCards: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} marginTop={10}>
      <Total />
      <Ongoing />
      <NoUpdate />
      <NotSelected />
    </SimpleGrid>
  );
};

export default OverviewCards;
