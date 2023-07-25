import React from "react";
import { SimpleGrid, SkeletonText } from "@chakra-ui/react";
import ApplicationCard from "./applicationcard";
import { useAuth } from "../../utils/AuthContext";
import useDeleteApplication from "../../hooks/application/useDeleteApplication";
import useApplications from "../../hooks/application/useApplications";
import { Query } from "appwrite";

interface Props {
  search: string;
}

type applicationTypes = {
  $id: string;
  $createdAt: string;
  name: string;
  info: string;
  position_applied: string;
  status: string;
};

const ApplicationSearchCards: React.FC<Props> = ({ search }) => {
  const { user } = useAuth();

  const deleteItemApplication = useDeleteApplication();

  const {
    data: applications,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useApplications([
    Query.equal("user_id", user?.$id),
    Query.search("name", search),
  ]);

  const handleDeleteApplication = async (itemId: string) => {
    deleteItemApplication.mutate(itemId);
  };
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

export default ApplicationSearchCards;
