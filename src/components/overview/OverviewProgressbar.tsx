import React from "react";
import { Progress, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  value: number;
}

const OverviewProgressbar: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <Text fontSize="sm" as="b">
        {title}
      </Text>
      <Progress
        value={value}
        colorScheme="nigga"
        borderRadius="xl"
        height="25px"
        mb="20px"
      />
    </>
  );
};

export default OverviewProgressbar;
