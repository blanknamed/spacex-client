import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import type { PropsWithChildren } from "types/utils";
import type { LayoutProps } from "./components/types";
import { Footer } from "./components/Footer";

export const Layout = ({ children, noFooter = false }: PropsWithChildren<LayoutProps>) => (
  <Box display="flex" flexDirection="column" height="100vh">
    <Header />
    <Box maxW="100%" flex="auto">
      {children}
    </Box>
    {!noFooter && <Footer/>}
  </Box>
);
