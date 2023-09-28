import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export default function PageHeader({ children }: Props) {
  return (
    <Flex alignItems="center" mt="10" gap="2">
      {children}
    </Flex>
  );
}
