import React from "react";
import { Link, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  fontSize?: string;
  color?: string;
  as?: string;
}

const headerlink: React.FC<Props> = ({ title, fontSize, color, as }) => {
  return (
    <Link style={{ textDecoration: "none" }}>
      <Text fontSize={fontSize} color={color} as={as}>
        {title}
      </Text>
    </Link>
  );
};

export default headerlink;
