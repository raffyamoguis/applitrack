import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  Text,
  Flex,
  Spacer,
  Badge,
  VStack,
  Image,
} from "@chakra-ui/react";

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

const OverviewRecent: React.FC<Props> = ({ applications }) => {
  const [recentApplications, setRecentApplications] = useState<
    ApplicationProps[]
  >([]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];

    const filteredApplications = applications.filter(
      (application) => application.$createdAt.split("T")[0] === currentDate
    );

    setRecentApplications(filteredApplications);
  }, [applications]);
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        <Text fontSize="xl" as="b">
          Recent Application
        </Text>
        <Text fontSize="sm" marginTop="1" marginBottom="10">
          {`You made ${recentApplications.length} applications this day`}
        </Text>

        {recentApplications?.map((item, key) => (
          <Flex alignItems="center" gap="6" marginTop="4" key={key}>
            <Image
              boxSize="32px"
              objectFit="cover"
              alt="Company Icon"
              src="https://img.icons8.com/serif/32/575758/experimental-company-serif.png"
            />
            <VStack spacing="0" align="start">
              <Text fontSize="xs" as="b">
                {item.name}
              </Text>
              <Text fontSize="xs">{item.info}</Text>
            </VStack>
            <Spacer />
            <Badge variant="solid" colorScheme="nigga" borderRadius="sm">
              {item.status}
            </Badge>
          </Flex>
        ))}
      </CardBody>
    </Card>
  );
};

export default OverviewRecent;
