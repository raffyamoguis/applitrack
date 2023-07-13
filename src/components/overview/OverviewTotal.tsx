import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";

// Components
import OverviewProgressbar from "./OverviewProgressbar";

const OverviewTotal: React.FC = () => {
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        <Text fontSize="xl" as="b">
          Total Applications
        </Text>
        <Text fontSize="sm" marginTop="1" marginBottom="10">
          6000 total applications.
        </Text>

        <OverviewProgressbar title="Failed" value={70} />
        <OverviewProgressbar title="Initial" value={80} />
        <OverviewProgressbar title="Technical" value={40} />
        <OverviewProgressbar title="Final" value={20} />
        <OverviewProgressbar title="Not Selected" value={60} />
      </CardBody>
    </Card>
  );
};

export default OverviewTotal;
