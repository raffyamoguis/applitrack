import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

interface Props {
  title: string;
  fontSize?: string;
  color?: string;
  w?: string;
  to: string;
}

const headerlink: React.FC<Props> = ({ title, fontSize, color, w, to }) => {
  return (
    <Link as={ReactLink} to={to} style={{ textDecoration: "none" }}>
      <Text fontSize={fontSize} color={color} as={w}>
        {title}
      </Text>
    </Link>
  );
};

export default headerlink;
