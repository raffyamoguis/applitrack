import React from "react";
import { Spinner, Text } from "@chakra-ui/react";

// Components
import OverviewCards from "./OverviewCards";
import OverviewStats from "./OverviewStats";

interface Props {
  isLoading: boolean;
  showOverview: boolean;
}

const ShowOverview: React.FC<Props> = ({ isLoading, showOverview }) => {
  if (isLoading) {
    return <Spinner color="nigga.500" />;
  }

  if (showOverview) {
    return (
      <>
        <OverviewCards />
        <OverviewStats />
      </>
    );
  }
  return <Text>No applications.</Text>;
};

export default ShowOverview;
