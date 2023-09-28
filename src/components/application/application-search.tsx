import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import { useApplicationSearch } from "../../state/application/useApplicationSearch";

export default function ApplicationSearch() {
  const [searchQuery, setSearchQuery] = useApplicationSearch((state) => [
    state.searchQuery,
    state.setSearchQuery,
  ]);

  return (
    <InputGroup mt="4">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <InputRightElement onClick={() => setSearchQuery("")}>
        {!!searchQuery && <CloseIcon color="gray.300" boxSize="3" />}
      </InputRightElement>
      <Input
        type="text"
        placeholder="Search"
        focusBorderColor="#2f2f31"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </InputGroup>
  );
}
