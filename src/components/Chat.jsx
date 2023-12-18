import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Chat({ local, message }) {
  return (
    <Stack alignItems={local ? "flex-start" : "flex-end"} spacing={2}>
      <Typography
        style={{
          background: local ? "#11B1A5" : "#35383F",
          borderRadius: local ? "20px 4px 16px 20px" : `4px 20px 20px 16px`,
          padding: "12px 20px",
          whiteSpace: "pre-wrap",
          maxWidth: "90%",
        }}
      >
        {message}
      </Typography>
    </Stack>
  );
}
