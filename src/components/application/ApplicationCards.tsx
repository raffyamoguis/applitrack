import React, { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ApplicationCard from "./applicationcard";

import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";

// Helper
import { formatDate } from "../../helpers/util";

type applicationTypes = {
  $id: string;
  $createdAt: string;
  name: string;
  info: string;
  position_applied: string;
  status: string;
};

interface ApplicationProps {
  sendTotalApplications: (total: number) => void;
}

const ApplicationCards: React.FC<ApplicationProps> = ({
  sendTotalApplications,
}) => {
  const [applications, setApplications] = useState<applicationTypes[] | null>(
    []
  );

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_APPLICATIONS
    );

    console.log("RESPONSE: ", response);
    setApplications(response.documents);
    sendTotalApplications(response.total);
  };
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} marginTop={4}>
      {applications?.map((application) => (
        <ApplicationCard
          key={application.$id}
          name={application.name}
          date={formatDate(application.$createdAt)}
          status={application.status}
          position={application.position_applied}
        />
      ))}
    </SimpleGrid>
  );
};

export default ApplicationCards;
