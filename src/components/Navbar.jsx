import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import smilies from "../assets/smileys.png";
import { useAuth } from "../firebase/auth";

export default function Navbar({ fixed }) {
  const { authUser, signOut } = useAuth();
  const navigate = useNavigate();
  const avatar =
    authUser?.photoURL ||
    `https://ui-avatars.com/api/?name=${authUser?.displayName}`;

  return (
    <Box component={authUser ? Paper : "nav"} sx={{ width: "100%", mt: 2 }}>
      <Stack
        sx={{ p: authUser ? 2 : 0 }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center">
          <Avatar
            style={{ width: 30, height: 30, marginRight: 10 }}
            src={authUser ? avatar : smilies}
            alt="Logo"
          />
          <Typography>
            {authUser ? authUser?.displayName : "Gumzo AI"}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center">
          {!authUser && (
            <Button variant="contained" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
          )}
          {authUser && (
            <Button variant="contained" onClick={() => signOut()}>
              Sign Out
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
