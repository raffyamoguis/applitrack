import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const status: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        size="sm"
        variant="outline"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Status
      </MenuButton>
      <MenuList>
        <MenuItem>Ongoing</MenuItem>
        <MenuItem>Initial Interview</MenuItem>
        <MenuItem>Technical Interview</MenuItem>
        <MenuItem>Final Interview</MenuItem>
        <MenuItem>Not Selected</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default status;
