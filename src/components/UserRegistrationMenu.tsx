import { signIn } from "next-auth/client";
import { HiOutlineUserCircle } from "react-icons/hi";

import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Avatar,
  Icon,
  IconButton,
  Button,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";

const UserRegistrationMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        colorScheme="gray"
        aria-label="User Registration Menu"
        icon={<Icon as={HiOutlineUserCircle} color="gray.500" boxSize={8} />}
        transition="all 0.2s"
        variant="outline"
        borderRadius="full"
      />
      <MenuList borderRadius="2xl">
        <MenuItem py={3} fontWeight="semibold">
          Register
        </MenuItem>
        <MenuItem onClick={() => signIn()} py={3}>
          Login
        </MenuItem>
        <MenuDivider />
        <MenuItem py={3}>Help</MenuItem>
        <MenuItem py={3}>Contact Us</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserRegistrationMenu;
