import React from "react";
import { Query } from "appwrite";
import {
  Card,
  CardBody,
  Flex,
  Spacer,
  Text,
  VStack,
  Icon,
  SkeletonText,
} from "@chakra-ui/react";
import { IconExclamationCircle } from "@tabler/icons-react";

// Hooks
import useApplicationCount from "../../../hooks/overview/useApplicationCount";
import { useAuth } from "../../../utils/AuthContext";

const NoUpdate: React.FC = () => {
  const { user } = useAuth();

  const { data: applicationCount, isLoading } = useApplicationCount(
    [Query.equal("user_id", user?.$id), Query.equal("status", "No Update")],
    "noupdateTotal"
  );
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        {isLoading ? (
          <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
        ) : (
          <>
            <Flex alignItems="gray">
              <Text as="b" colorScheme="nigga" fontSize="lg">
                No Update
              </Text>

              <Spacer />
              <Icon as={IconExclamationCircle} />
            </Flex>
            <VStack align="start" mt="4" spacing={0}>
              <Text fontSize="3xl" as="b">
                {applicationCount}
              </Text>
              {/* <Text fontSize="sm">Keep going.</Text> */}
            </VStack>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default NoUpdate;
