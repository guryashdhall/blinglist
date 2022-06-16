import { Container, Grid } from "@mui/material";
import React from "react";
import InputCard from "./InputCard";
import ReviewCard from "./ReviewCard";
import ReviewHeader from "./ReviewHeader";

function ReviewPage() {
  return (
    <Container
      fixed
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      sx={{
        backgroundColor: "#f3e5f5",
        borderRadius: "16px",
        mt: 8,
        mb: 2,
        p: 1,
      }}
    >
      <Grid item>
        <ReviewHeader />
      </Grid>
      <Grid item xs>
        <InputCard />
        <ReviewCard />
      </Grid>
    </Container>
  );
}

export default ReviewPage;
