import { auth as firebaseUiAuth } from "firebaseui";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import smileys from "../assets/smileys.png";
import Loading from "../components/Loading";
import { useAuth } from "../firebase/auth";
import { auth, uiConfig } from "../firebase/firebase";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

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
      <Card sx={{ pt: 2 }}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
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
          <Box component="div" id="firebaseui-auth-container"></Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
