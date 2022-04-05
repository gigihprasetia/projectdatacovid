import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  
  const {data}=props;
const{namaLabel}=props;
const {setSelect}=props;
const {select}=props;

  const handleChange = (event) => {
    setSelect(event.target.value);
    
  };
  return (
    <Box className={"mt-5"} sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{namaLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Age"
          onChange={handleChange}
        >
          {
data? data.map(val=>(
  <MenuItem key={val.key} value={val.value}>{val.value}</MenuItem>
)) : <MenuItem >choose Your Provinsi first</MenuItem>
          }
        </Select>
      </FormControl>
    </Box>
  );
}
