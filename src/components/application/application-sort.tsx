import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ArrowUpDownIcon } from "@chakra-ui/icons";

import { useApplicationSort } from "../../state/application/useApplicationSort";
import { sortTypes } from "../../lib/application";

export default function ApplicationSort() {
  const [sortType, changeSort] = useApplicationSort((state) => [
    state.sortType,
    state.changeSort,
  ]);

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        fontWeight="normal"
        color="gray"
        size="sm"
        leftIcon={<ArrowUpDownIcon color="gray" />}
      >
        {sortType}
      </MenuButton>
      <MenuList>
        {sortTypes.map((sortType: string) => (
          <MenuItem key={sortType} onClick={changeSort}>
            {sortType}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
