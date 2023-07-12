import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ApplicationCard from "./applicationcard";

const applicationData = [
  {
    name: "Company X",
    date: "January 01, 2090",
    position: "Frontend Engineer",
    status: "Ongoing Application",
  },
  {
    name: "Company Y",
    date: "January 12, 2080",
    position: "Frontend Developer",
    status: "Ongoing Application",
  },
  {
    name: "Company Z",
    date: "February 01, 2090",
    position: "Software Engineer",
    status: "Initial Interview",
  },
  {
    name: "ABC Ltd.",
    date: "February 22, 2090",
    position: "Software Engineer",
    status: "Initial Interview",
  },
  {
    name: "Google",
    date: "February 01, 2090",
    position: "Head Software Engineer",
    status: "Initial Interview",
  },
  {
    name: "OpenAI",
    date: "February 9, 2090",
    position: "AI Engineer",
    status: "Initial Interview",
  },
  {
    name: "Microsoft",
    date: "February 01, 2090",
    position: "Software Engineer",
    status: "Initial Interview",
  },
  {
    name: "Meta",
    date: "February 01, 2090",
    position: "Software Engineer",
    status: "Final Interview",
  },
  {
    name: "Tesla",
    date: "February 01, 2060",
    position: "Driver",
    status: "Initial Interview",
  },
];

const ApplicationCards: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} marginTop={4}>
      {applicationData.map((item, key) => (
        <ApplicationCard
          key={key}
          name={item.name}
          date={item.date}
          status={item.status}
          position={item.position}
        />
      ))}
    </SimpleGrid>
  );
};

export default ApplicationCards;
