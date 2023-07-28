import React from "react";

import { SimpleGrid } from "@chakra-ui/react";

import OverviewRecent from "./OverviewRecent";
import OverviewTotal from "./OverviewTotal";

const OverviewStats: React.FC = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={4} marginTop={10}>
      <OverviewRecent />
      <OverviewTotal />
    </SimpleGrid>
  );
};

export default OverviewStats;
