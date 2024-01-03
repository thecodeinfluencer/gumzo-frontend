import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import product from "../assets/product.png";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { useAuth } from "../firebase/auth";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Landing() {
  const navigate = useNavigate();
  const { isLoading, authUser } = useAuth();

  useEffect(() => {
    if (!isLoading && authUser) navigate("/chat");
  }, [authUser, isLoading, navigate]);

  if (isLoading || (!isLoading && !!authUser)) return <Loading />;

  return (
    <Box className="page">
      <Stack alignItems="center">
        <Navbar />
        <Stack alignItems="center" sx={{ mt: 10, mb: 5 }}>
          <Typography variant="h3" textAlign="center" sx={{ mx: 2 }}>
            Chat with AI 
          </Typography>
          <Typography variant="h6" textAlign="center">
            Test out different AI bots with different personalities
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ mb: 5 }} spacing={1}>
          <Button variant="contained" onClick={() => navigate("/auth")}>
            Try it now
          </Button>
          <Button variant="outlined" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
        </Stack>
      </Stack>
      <Stack alignItems="center" sx={{ mb: 2, mx: { xs: 3, md: 5 } }}>
        <img className="w-100" style={{ width: "80vw" }} src={product} alt="" />
      </Stack>
    </Box>
  );
}
