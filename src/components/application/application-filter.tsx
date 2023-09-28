import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ArrowUpDownIcon } from "@chakra-ui/icons";

import { useApplicationFilter } from "../../state/application/useApplicationFilter";
import { filters } from "../../lib/application";

export default function ApplicationFilter() {
  const [selectedFilter, setFilter] = useApplicationFilter((state) => [
    state.selectedFilter,
    state.setFilter,
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
        {selectedFilter}
      </MenuButton>
      <MenuList>
        {filters.map((filter: string) => (
          <MenuItem key={filter} onClick={() => setFilter(filter)}>
            {filter}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
