import React from "react";

import { SimpleGrid } from "@chakra-ui/react";

import OverviewRecent from "./OverviewRecent";
import OverviewTotal from "./OverviewTotal";

interface ApplicationProps {
  $id: string;
  $createdAt: string;
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

interface Props {
  applications: ApplicationProps[];
}

const OverviewStats: React.FC<Props> = ({ applications }) => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={4} marginTop={10}>
      <OverviewRecent applications={applications} />
      <OverviewTotal applications={applications} />
    </SimpleGrid>
  );
};

export default OverviewStats;
