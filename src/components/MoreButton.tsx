import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  sendOffsetNumber: (total: number) => void;
  total: number;
  offset: number;
  isLoading: boolean;
}

const MoreButton: React.FC<Props> = ({
  sendOffsetNumber,
  total,
  offset,
  isLoading,
}) => {
  if (total <= 12) {
    return null;
  }

  const handleClick = () => {
    const bal = total - offset;

    if (bal <= 8) {
      offset += bal;
    } else {
      offset += 8;
    }
    sendOffsetNumber(offset);
  };

  return (
    <Button
      isLoading={isLoading}
      colorScheme="nigga"
      variant="ghost"
      size={{ base: "xs", sm: "sm", md: "md" }}
      onClick={handleClick}
    >
      Load More
    </Button>
  );
};

export default MoreButton;
