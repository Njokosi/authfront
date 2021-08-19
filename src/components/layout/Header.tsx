import { signIn, signOut, useSession } from "next-auth/client";
import { Box, Flex, Avatar, SkeletonCircle } from "@chakra-ui/react";
import Image from "next/image";
import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";

import UserRegistrationMenu from "../UserRegistrationMenu";
import React from "react";

const Header = () => {
  const [session, loading] = useSession();

  return (
    <Flex as="header" width="full" align="center" py={5}>
      <AccessibleLink href="/">
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          alt="Launching Illustration"
        />
      </AccessibleLink>
      <Box marginLeft="auto">
        {/* <ThemeToggle /> */}
        {/* {loading && <SkeletonCircle size="12" />} */}
        <UserRegistrationMenu />
        {/* {!loading && !session && <UserRegistrationMenu />} */}
        {/* {session && <p>{session.user?.email}</p>} */}
      </Box>
    </Flex>
  );
};

export default Header;
