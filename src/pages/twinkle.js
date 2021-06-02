import React from "react";
import { Grid, Box } from "@theme-ui/components";

import { PageLayout } from "../components/PageLayout";
import { Twinkle } from "../components/Twinkle";

const TwinklePage = () => {
  const twinkleChildren = Array(50)
    .fill()
    .map((_, key) => {
      return (
        <Box key={key} p={1} bg="primary" className="test">
          Box
        </Box>
      );
    });

  return (
    <PageLayout>
      <title>Twinkle</title>
      <h1>Twinkle</h1>
      <p>My take on reactifying the code by changing as little as possible.</p>
      <h2>Twinkle component example</h2>
      <Grid gap={0} width="50px">
        <Twinkle freq={4}>{twinkleChildren}</Twinkle>
      </Grid>
    </PageLayout>
  );
};

export default TwinklePage;
