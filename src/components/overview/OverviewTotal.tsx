import React from "react";
import { Query } from "appwrite";
import { Card, CardBody, Text, Skeleton } from "@chakra-ui/react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Hooks
import { useAuth } from "../../utils/AuthContext";
import useApplicationCount from "../../hooks/overview/useApplicationCount";

const OverviewTotal: React.FC = () => {
  const { user } = useAuth();

  const { data: assesmentTotal, isLoading: isLoadingAssesment } =
    useApplicationCount(
      [Query.equal("user_id", user?.$id), Query.equal("status", "Assesment")],
      "applicationAssesmentCount"
    );
  const { data: initialTotal, isLoading: isLoadingInitial } =
    useApplicationCount(
      [
        Query.equal("user_id", user?.$id),
        Query.equal("status", "Initial Interview"),
      ],
      "applicationInitialCount"
    );
  const { data: technicalTotal, isLoading: isLoadingTechnical } =
    useApplicationCount(
      [
        Query.equal("user_id", user?.$id),
        Query.equal("status", "Technical Interview"),
      ],
      "applicationTechnicalCount"
    );
  const { data: finalTotal, isLoading: isLoadingfinal } = useApplicationCount(
    [
      Query.equal("user_id", user?.$id),
      Query.equal("status", "Final Interview"),
    ],
    "applicationFinalCount"
  );
  const { data: notselectedTotal, isLoading: isLoadingNotSelected } =
    useApplicationCount(
      [
        Query.equal("user_id", user?.$id),
        Query.equal("status", "Not Selected"),
      ],
      "applicationNotSelectedCount"
    );
  const { data: noupdateTotal, isLoading: isLoadingNoUpdate } =
    useApplicationCount(
      [Query.equal("user_id", user?.$id), Query.equal("status", "No Update")],
      "applicationNoUpdateCount"
    );

  const dataBar = [
    {
      name: "Assesment",
      total: assesmentTotal,
    },
    {
      name: "Initial",
      total: initialTotal,
    },
    {
      name: "Technical",
      total: technicalTotal,
    },
    {
      name: "Final",
      total: finalTotal,
    },
    {
      name: "Not Selected",
      total: notselectedTotal,
    },
    {
      name: "No Update",
      total: noupdateTotal,
    },
  ];

  const showBarChart =
    isLoadingAssesment &&
    isLoadingInitial &&
    isLoadingTechnical &&
    isLoadingfinal &&
    isLoadingNoUpdate &&
    isLoadingNotSelected;
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        <Text fontSize="xl" as="b">
          Total Applications
        </Text>
        <Text fontSize="sm" marginTop="1" marginBottom="10">
          Application graph
        </Text>
        <Skeleton isLoaded={!showBarChart}>
          <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
            <BarChart margin={{ left: -40 }} data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 13 }} />
              <YAxis tick={{ fontSize: 13 }} />
              <Tooltip />
              <Legend />
              <Bar barSize={30} dataKey="total" fill="#575758" />
            </BarChart>
          </ResponsiveContainer>
        </Skeleton>
      </CardBody>
    </Card>
  );
};

export default OverviewTotal;
