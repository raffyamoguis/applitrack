import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";

// Components
import OverviewProgressbar from "./OverviewProgressbar";
import useFilterByStatus from "../../hooks/overview/useFilterByStatus";
import { getPercentage } from "../../helpers/util";

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

const OverviewTotal: React.FC<Props> = ({ applications }) => {
  const { filteredData: totalFinal } = useFilterByStatus(
    applications,
    "Final Interview"
  );
  const { filteredData: totalInitial } = useFilterByStatus(
    applications,
    "Initial Interview"
  );
  const { filteredData: totalTechnical } = useFilterByStatus(
    applications,
    "Technical Interview"
  );
  const { filteredData: totalAssesment } = useFilterByStatus(
    applications,
    "Assesment"
  );
  const { filteredData: totalNotSelected } = useFilterByStatus(
    applications,
    "Not Selected"
  );
  const { filteredData: totalNoUpdate } = useFilterByStatus(
    applications,
    "No Update"
  );
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        <Text fontSize="xl" as="b">
          Total Applications
        </Text>
        <Text fontSize="sm" marginTop="1" marginBottom="10">
          {`${applications.length} total applications.`}
        </Text>

        <OverviewProgressbar
          title="Assesment"
          value={getPercentage(totalAssesment?.length, applications.length)}
        />
        <OverviewProgressbar
          title="Initial"
          value={getPercentage(totalInitial?.length, applications.length)}
        />
        <OverviewProgressbar
          title="Technical"
          value={getPercentage(totalTechnical?.length, applications.length)}
        />
        <OverviewProgressbar
          title="Final"
          value={getPercentage(totalFinal?.length, applications.length)}
        />
        <OverviewProgressbar
          title="Not Selected"
          value={getPercentage(totalNotSelected?.length, applications.length)}
        />
        <OverviewProgressbar
          title="No Update"
          value={getPercentage(totalNoUpdate?.length, applications.length)}
        />
      </CardBody>
    </Card>
  );
};

export default OverviewTotal;
