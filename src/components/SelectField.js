import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const SelectField = (props) => {
  const { lable } = props;
  const { value, setValue } = useState("");

  const handleChange = () => {};
  return (
    <div>
      <Box mg={3} width="30%">
        <FormControl size= "small" fullWidth>
          <InputLabel>{lable}</InputLabel>
          <Select value={value} label={lable} onChange={handleChange}>
            <MenuItem>option 1</MenuItem>
            <MenuItem>option 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
export default SelectField;
