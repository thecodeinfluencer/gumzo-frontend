import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../firebase/auth";
import { useDispatch } from "react-redux";
import { setOnboarded } from "../redux/slices/noticeSlice";

export default function Notice() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, authUser } = useAuth();

  useEffect(() => {
    if (!isLoading && authUser) navigate("/chat");
  }, [authUser, isLoading, navigate]);

  return (
    <Box className="page">
      <Stack alignItems="center">
        <Navbar />
        <Stack alignItems="center" sx={{ mt: 10, mb: 5 }}>
          <Typography variant="h4" textAlign="center" sx={{ mx: 2 }}>
            Welcome to Gumzo!
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
            This is a demo of the chat bot and you are limited to only a few
            chats for each chat bot.
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ mb: 5 }} spacing={1}>
          <Button
            variant="contained"
            onClick={() => dispatch(setOnboarded(true))}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
