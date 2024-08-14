import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import StockService from "../../services/StockService";
import { useNavigate } from "react-router-dom";

const StockForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stockDescription, setStockDescription] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [purchasedPrice, setPurchasedPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = localStorage.getItem("uid");
    const newStock = {
      uid: uid,
      company_name: companyName,
      number: quantity,
      stock_description: stockDescription,
      stock_value: stockValue,
      purchased_price: purchasedPrice,
    };
    await StockService.addStock(newStock);
    navigate("/stocks");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Stock
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            margin="normal"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Quantity"
            variant="outlined"
            margin="normal"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            fullWidth
            label="Stock Description"
            variant="outlined"
            margin="normal"
            value={stockDescription}
            onChange={(e) => setStockDescription(e.target.value)}
          />
          <TextField
            fullWidth
            label="Stock Value"
            variant="outlined"
            margin="normal"
            value={stockValue}
            onChange={(e) => setStockValue(e.target.value)}
          />
          <TextField
            fullWidth
            label="Purchased Price"
            variant="outlined"
            margin="normal"
            value={purchasedPrice}
            onChange={(e) => setPurchasedPrice(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Add Stock
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default StockForm;
