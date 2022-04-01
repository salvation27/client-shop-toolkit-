import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const QuantityBtn = ({item,num,inc,decrement}) => {
  return (
    <div className="quantity_item">
      <Box  sx={{ border: '1px solid green' }}>
        <Button onClick={() => decrement(item)} size="small" color="error">
          -
        </Button>
        <span>{num}</span>
        <Button onClick={() => inc(item)} size="small" color="error">
          +
        </Button>
      </Box>
    </div>
  );
};

export default QuantityBtn;
