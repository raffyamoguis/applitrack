import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

interface Props {
  title: string;
  fontSize?: string;
  color?: string;
  to: string;
  onClick?: () => void;
}

const headerlink: React.FC<Props> = ({
  title,
  fontSize,
  color,
  to,
  onClick,
}) => {
  return (
    <Link
      as={ReactLink}
      to={to}
      style={{ textDecoration: "none" }}
      onClick={onClick}
    >
      <Text fontSize={fontSize} color={color}>
        {title}
      </Text>
    </Link>
  );
};

export default headerlink;
