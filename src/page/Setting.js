import { Box, Button } from "@mui/material";
import React from "react";
import SelectField from "../components/SelectField";
export const Setting = () => {
  const handleOnsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnsubmit}>
      <div>
        <SelectField lable="Category" />
        <SelectField lable="Difficulty" />
        <Box mt={3} width="10%">
          <Button fullWidth variant="container" type="submit">
            Create
          </Button>
        </Box>
      </div>
    </form>
  );
};
