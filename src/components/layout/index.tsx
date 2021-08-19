import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxW="container.2xl" transition="0.5s ease-out" px={5}>
      <Box margin="0 auto">
        <Meta />
        <Box>
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
