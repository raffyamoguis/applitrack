import React from "react";
import {
  SkeletonText,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

interface Props {
  isLoading: boolean;
  total: number;
  applications: Application[];
}

interface Application {
  name: string;
  position_applied: string;
  status: string;
}

const ShowRecent: React.FC<Props> = ({ isLoading, total, applications }) => {
  if (isLoading) {
    return <SkeletonText mt="4" noOfLines={3} spacing="5" skeletonHeight="2" />;
  }

  if (total !== 0) {
    return (
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
            {applications?.map((item: Application, key: number) => (
              <Tr key={key}>
                <Td>{item.name}</Td>
                <Td>{item.position_applied}</Td>
                <Td fontWeight={500}>{item.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }

  return <Text fontSize="sm">No data to display.</Text>;
};

export default ShowRecent;
