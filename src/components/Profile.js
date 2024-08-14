import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  Avatar,
  CardContent,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserService from "../services/UserService"; // Service to fetch user data

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await UserService.getUserProfile(); // Assuming this returns user data
      setUser(response.data);
    };

    fetchUserData();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ p: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3}>
            <Box display="flex" justifyContent="center">
              <Avatar sx={{ width: 120, height: 120 }}>
                <AccountCircleIcon sx={{ fontSize: 80 }} />
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Email: {user.email}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Gender: {user.gender}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Profile;
