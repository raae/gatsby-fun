import React from "react";
import { Container } from "@theme-ui/components";

export const PageLayout = ({ children }) => {
  return (
    <Container as="main" p={4} sx={{ maxWidth: 800 }}>
      {children}
    </Container>
  );
};
