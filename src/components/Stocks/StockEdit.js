import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import StockService from "../../services/StockService";
import { useParams, useNavigate } from "react-router-dom";

const StockEdit = () => {
  const { id } = useParams();
  const [companyName, setCompanyName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stockDescription, setStockDescription] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [purchasedPrice, setPurchasedPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadStock();
  }, []);

  const loadStock = async () => {
    const result = await StockService.getSpecificStock(id);
    const stock = result.data;
    setCompanyName(stock.company_name);
    setQuantity(stock.number);
    setStockDescription(stock.stock_description);
    setStockValue(stock.stock_value);
    setPurchasedPrice(stock.purchased_price);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedStock = {
      sid: id,
      company_name: companyName,
      number: quantity,
      stock_description: stockDescription,
      stock_value: stockValue,
      purchased_price: purchasedPrice,
    };
    await StockService.updateStock(id, updatedStock);
    navigate("/stocks");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Stock
        </Typography>
        <form onSubmit={handleUpdate}>
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
            Update Stock
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default StockEdit;
