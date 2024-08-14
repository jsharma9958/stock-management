import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { Container, Typography, Box } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.logout();
    navigate.push("/login");
  }, [navigate]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          You have been logged out.
        </Typography>
      </Box>
    </Container>
  );
};

export default Logout;
