import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Application Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stock Management
        </Typography>

        {/* Conditionally render the "Stock" and "Add Stock" buttons based on authentication */}
        {token && (
          <Box>
            <Button color="inherit" onClick={() => navigate("/profile")}>
              Profile
            </Button>
            <Button color="inherit" onClick={() => navigate("/stocks")}>
              Stock
            </Button>
            <Button color="inherit" onClick={() => navigate("/add-stock")}>
              Add Stock
            </Button>
          </Box>
        )}

        {/* Show "Logout" if authenticated, otherwise show "Login" and "Register" */}
        {token ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Box>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
