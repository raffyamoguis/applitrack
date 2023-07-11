import React from "react";

import { SimpleGrid } from "@chakra-ui/react";

import OverviewRecent from "./OverviewRecent";

const OverviewStats: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={5} marginTop={10}>
      <OverviewRecent />
    </SimpleGrid>
  );
};

export default OverviewStats;
