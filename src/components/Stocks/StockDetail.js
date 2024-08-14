import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import StockService from "../../services/StockService";

const StockDetail = () => {
  const id = localStorage.getItem("uid");
  const [stock, setStock] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    loadStock();
  }, []);

  const loadStock = async () => {
    const result = await StockService.getStock(id);
    setStock(result.data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {stock.company_name}
          </Typography>
          <Typography variant="h6" component="h2">
            Quantity: {stock.number}
          </Typography>
          <Typography variant="h6" component="h2">
            Description: {stock.stock_description}
          </Typography>
          <Typography variant="h6" component="h2">
            Stock Value: ${stock.stock_value}
          </Typography>
          <Typography variant="h6" component="h2">
            Purchased Price: ${stock.purchased_price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => navigate(`/edit-stock/${id}`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ mt: 2, ml: 1 }}
            onClick={() => navigate("/")}
          >
            Back to List
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default StockDetail;
