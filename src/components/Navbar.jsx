import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
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
    <Box component="nav" sx={{ width: "100%", pt: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Avatar
            style={{ width: 40, height: 40, marginRight: 10 }}
            src={authUser ? avatar : smilies}
            alt="Logo"
          />
          <Typography variant="h5">
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
