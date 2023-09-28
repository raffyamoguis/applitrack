import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title?: string;
}

export default function PageTitle({ title = "Page" }: Props) {
  return (
    <Flex alignItems="center" mt="5" gap="2">
      <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
        {title}
      </Text>
    </Flex>
  );
}
