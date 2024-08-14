import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Registration Successful!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Please log in to continue.
      </Typography>
      <Button variant="contained" component={Link} to="/login" fullWidth>
        Go to Login
      </Button>
    </Container>
  );
};

export default Redirect;
