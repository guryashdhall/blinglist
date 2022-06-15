import React from "react";
import { Stack, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ReviewHeader() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Typography variant="h3" sx={{ m: 2 }}>
          Reviews
        </Typography>
        <FormControl sx={{ m: 2, minWidth: "30%" }}>
          <InputLabel id="demo-simple-select-helper-label">Stars</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Stars"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={5}>five star</MenuItem>
            <MenuItem value={4}>four star</MenuItem>
            <MenuItem value={3}>three star</MenuItem>
            <MenuItem value={2}>two star</MenuItem>
            <MenuItem value={1}>one star</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}

export default ReviewHeader;
