import React from "react";
import { SimpleGrid, SkeletonText, Text } from "@chakra-ui/react";
import ApplicationCard from "./applicationcard";
import useDeleteApplication from "../../hooks/application/useDeleteApplication";

interface Props {
  isLoading: boolean;
  applications: applicationTypes[];
}

type applicationTypes = {
  $id: string;
  $createdAt: string;
  name: string;
  info: string;
  position_applied: string;
  status: string;
};

const ApplicationSearchCards: React.FC<Props> = ({
  isLoading,
  applications,
}) => {
  const deleteItemApplication = useDeleteApplication();

  console.log(applications);

  const handleDeleteApplication = async (itemId: string) => {
    deleteItemApplication.mutate(itemId);
  };

  const noResult = applications?.length === 0;

  return (
    <>
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
          : applications?.map((application: applicationTypes) => (
              <ApplicationCard
                key={application.$id}
                application={application}
                onDelete={handleDeleteApplication}
              />
            ))}
      </SimpleGrid>
      {noResult && <Text mt="4">No search result.</Text>}
    </>
  );
};

export default ApplicationSearchCards;
