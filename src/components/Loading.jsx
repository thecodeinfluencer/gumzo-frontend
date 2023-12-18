import { CircularProgress, Stack } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100vh" }}
    >
      <CircularProgress />
    </Stack>
  );
}
