import React, { useState, useEffect } from "react";
import { SimpleGrid, SkeletonText, Center } from "@chakra-ui/react";
import ApplicationCard from "./applicationcard";
import MoreButton from "../MoreButton";
import useApplications from "../../hooks/application/useApplications";
import useDeleteApplication from "../../hooks/application/useDeleteApplication";
import { useAuth } from "../../utils/AuthContext";
import { Query } from "appwrite";
import { useQueryClient } from "react-query";
import { renderMoreButton } from "../../helpers/util";
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
  options: Options;
}

type Options = {
  sort: string;
  filter: string;
};

const ApplicationCards: React.FC<ApplicationProps> = ({
  sendTotalApplications,
  options,
}) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  //Delete mutation
  const deleteItemApplication = useDeleteApplication();

  const initialQuery = [
    Query.equal("user_id", user?.$id),
    Query.orderDesc("$createdAt"),
    Query.limit(12),
  ];
  const [query, setQuery] = useState<any>(initialQuery);
  const [offset, setOffset] = useState<number>(12);

  // Fetch applications
  const {
    data: applications,
    isLoading,
    isFetching,
    isFetched,
    isError,
    error,
    isSuccess,
    refetch,
  } = useApplications(query);

  const handleRefetch = async () => {
    // Invalidate the query first
    await queryClient.invalidateQueries("applications");

    // Then trigger the refetch
    await refetch();
  };

  // Update the query whenever the options prop changes
  useEffect(() => {
    const newQuery = [
      Query.equal("user_id", user?.$id),
      options.sort === "desc"
        ? Query.orderDesc("$createdAt")
        : Query.orderAsc("$createdAt"),
      Query.limit(offset),
    ];

    // Add filter condition based on the options.filter value
    if (options.filter) {
      newQuery.push(Query.equal("status", options.filter));
    }

    // Update the query state
    setQuery(newQuery);
  }, [user?.$id, options.filter, options.sort, offset]);

  useEffect(() => {
    handleRefetch();
  }, [options.filter, options.sort]);

  useEffect(() => {
    setOffset(12);
  }, [options.filter]);

  const handleDeleteApplication = async (itemId: string) => {
    deleteItemApplication.mutate(itemId);
  };

  const handleMoreButton = (offset: number) => {
    setOffset(offset);
    handleRefetch();
  };

  if (isSuccess) {
    sendTotalApplications(applications.total);
  }

  if (isError) {
    console.log(String(error));
  }
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
          : applications?.documents.map((application: applicationTypes) => (
              <ApplicationCard
                key={application.$id}
                application={application}
                onDelete={handleDeleteApplication}
              />
            ))}
      </SimpleGrid>
      <Center mt="8">
        {renderMoreButton(isSuccess, isFetched, applications?.total, offset) ? (
          <MoreButton
            isLoading={isFetching}
            sendOffsetNumber={handleMoreButton}
            total={applications?.total}
            offset={offset}
          />
        ) : null}
      </Center>
    </>
  );
};

export default ApplicationCards;
