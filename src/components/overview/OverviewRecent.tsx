import React from "react";
import { Query } from "appwrite";
import {
  Card,
  CardBody,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  SkeletonText,
} from "@chakra-ui/react";

// Hooks
import useApplicationByDay from "../../hooks/overview/useApplicationByDay";
import { useAuth } from "../../utils/AuthContext";

interface ApplicationProps {
  $id: string;
  $createdAt: string;
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

const OverviewRecent: React.FC = () => {
  const { user } = useAuth();

  console.log(new Date().toISOString().split("T")[0]); // Output: 2023-07-22T07:26:51.151+00:00

  const dateStart =
    new Date().toISOString().split("T")[0] + "T00:00:00.000+00:00";
  const dateEnd =
    new Date().toISOString().split("T")[0] + "T23:59:59.999+00:00";

  const {
    data: applicationToday,
    isError,
    isSuccess,
    isLoading,
    error,
  } = useApplicationByDay(
    [
      Query.equal("user_id", user?.$id),
      Query.greaterThanEqual("$createdAt", dateStart),
      Query.lessThanEqual("$createdAt", dateEnd),
    ],
    "applicationToday"
  );

  if (isError) console.log(error);
  if (isSuccess) console.log(applicationToday);
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        <Text fontSize="xl" as="b">
          Recent Application
        </Text>
        <Text fontSize="sm" marginTop="1" marginBottom="10">
          {`You made ${applicationToday?.total} applications this day`}
        </Text>

        {isLoading ? (
          <SkeletonText mt="4" noOfLines={3} spacing="5" skeletonHeight="2" />
        ) : (
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Company</Th>
                  <Th>Position</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {applicationToday?.documents.map(
                  (item: ApplicationProps, key: number) => (
                    <Tr key={key}>
                      <Td>{item.name}</Td>
                      <Td>{item.position_applied}</Td>
                      <Td fontWeight={500}>{item.status}</Td>
                    </Tr>
                  )
                )}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </CardBody>
    </Card>
  );
};

export default OverviewRecent;
