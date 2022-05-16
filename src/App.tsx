import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layout";

export const App = () => (
  <ChakraProvider>
    <Layout>
      {"App"}
    </Layout>
  </ChakraProvider>
);
