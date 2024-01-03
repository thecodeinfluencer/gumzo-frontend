import { Box, Card, Stack, Typography } from "@mui/material";
import { auth as firebaseUiAuth } from "firebaseui";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import smileys from "../assets/smileys.png";
import Loading from "../components/Loading";
import { useAuth } from "../firebase/auth";
import { auth, uiConfig } from "../firebase/firebase";

export default function Signin() {
  const { isLoading, authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && authUser) navigate("/chat");
  }, [authUser, isLoading, navigate]);

  useEffect(() => {
    var ui =
      firebaseUiAuth.AuthUI.getInstance() || new firebaseUiAuth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", uiConfig);
  }, []);

  if (isLoading || (!isLoading && !!authUser)) return <Loading />;

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ mb: 4 }}
      >
        <img
          src={smileys}
          className="d-inline-block align-text-top me-2"
          alt="Logo"
          width="40"
          height="40"
        />
        <Typography variant="h6">Gumzo AI</Typography>
      </Stack>
      <Card sx={{ px: 2, pt: 2, maxWidth: 216 }}>
        <Typography textAlign="center" sx={{ mb: 2 }}>
          Sign In to Gumzo AI
        </Typography>
        <Box component="div" id="firebaseui-auth-container"></Box>
      </Card>
    </Stack>
  );
}
