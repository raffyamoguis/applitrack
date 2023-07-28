import React from "react";
import { Query } from "appwrite";
import { Card, CardBody, Text } from "@chakra-ui/react";

// Hooks
import useApplicationByDay from "../../hooks/overview/useApplicationByDay";
import { useAuth } from "../../utils/AuthContext";

// Compoents
import ShowRecent from "./ShowRecent";

const OverviewRecent: React.FC = () => {
  const { user } = useAuth();

  const dateStart =
    new Date().toISOString().split("T")[0] + "T00:00:00.000+00:00";
  const dateEnd =
    new Date().toISOString().split("T")[0] + "T23:59:59.999+00:00";

  const {
    data: applicationToday,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useApplicationByDay(
    [
      Query.equal("user_id", user?.$id),
      Query.greaterThanEqual("$createdAt", dateStart),
      Query.lessThanEqual("$createdAt", dateEnd),
      Query.orderDesc("$createdAt"),
    ],
    "applicationToday"
  );

  if (isError) console.log(error);
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        <Text fontSize="xl" as="b">
          Recent Application
        </Text>
        {isSuccess && (
          <Text fontSize="sm" marginTop="1" marginBottom="10">
            {`You made ${applicationToday?.total} applications this day`}
          </Text>
        )}

        <ShowRecent
          isLoading={isLoading}
          total={applicationToday?.total}
          applications={applicationToday?.documents}
        />
      </CardBody>
    </Card>
  );
};

export default OverviewRecent;
