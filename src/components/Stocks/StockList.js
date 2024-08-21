import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import StockService from "../../services/StockService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const StockList = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("uid");
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    loadStocks();
  }, []);

  const loadStocks = async () => {
    const result = await StockService.getStock(id);
    setStocks(result.data);
  };

  const handleEdit = (stockId) => {
    navigate(`/update-stock/${stockId}`);
  };

  const handleDelete = async (stockId) => {
    try {
      await StockService.deleteStock(stockId);
      // Update the local state to remove the deleted stock
      setStocks(stocks.filter((stock) => stock.sid !== stockId));
      loadStocks();
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ mb: 4, color: "primary.main", fontWeight: "bold" }}
      >
        Stock List for {localStorage.getItem("name")}
      </Typography>
      {stocks.length === 0 ? (
        <Typography>No stocks</Typography>
      ) : (
        <List>
          {stocks.map((stock) => (
            <Paper
              key={stock.sid}
              elevation={3}
              sx={{
                mb: 3,
                p: 2,
                backgroundColor: "background.paper",
                borderRadius: 2,
              }}
            >
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ color: "text.primary" }}>
                      {stock.company_name}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography variant="body1">
                        Quantity: {stock.number}
                      </Typography>
                      <Typography variant="body1">
                        Description: {stock.stock_description}
                      </Typography>
                      <Typography variant="body1">
                        Stock Value: Rs.{stock.stock_value.toFixed(2)}
                      </Typography>
                      <Typography variant="body1">
                        Purchased Price: Rs.{stock.purchased_price.toFixed(2)}
                      </Typography>
                    </Box>
                  }
                />
                <Box sx={{ ml: 2 }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(stock.sid)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(stock.sid)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
            </Paper>
          ))}
        </List>
      )}
    </Container>
  );
};

export default StockList;
