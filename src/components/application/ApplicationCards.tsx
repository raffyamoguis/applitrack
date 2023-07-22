import React from "react";
import { SimpleGrid, SkeletonText } from "@chakra-ui/react";
import ApplicationCard from "./applicationcard";
import useApplications from "../../hooks/application/useApplications";
import useDeleteApplication from "../../hooks/application/useDeleteApplication";
import { useAuth } from "../../utils/AuthContext";
// Helper

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
  const { user } = useAuth();
  //Delete mutation
  const deleteItemApplication = useDeleteApplication();
  // Fetch applications
  const {
    data: applications,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useApplications(user.$id);

  const handleDeleteApplication = async (itemId: string) => {
    deleteItemApplication.mutate(itemId);
  };

  if (isSuccess) {
    sendTotalApplications(applications.total);
  }

  if (isError) {
    return <div>Error: {String(error)}</div>;
  }
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} marginTop={4}>
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonText
              key={index}
              p="2"
              mt="10"
              noOfLines={4}
              spacing="4"
              skeletonHeight="2"
              borderRadius="xl"
            />
          ))
        : applications?.documents.map((application: applicationTypes) => (
            <ApplicationCard
              key={application.$id}
              application={application}
              onDelete={handleDeleteApplication}
            />
          ))}
    </SimpleGrid>
  );
};

export default ApplicationCards;
