import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect({...props}) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          // labelId="demo-simple-select-label"
          // value={props.value}
          // onChange={handleChange}
        >
          {props.options?.map( option => {
           return <MenuItem key={option.index}>{option.name}</MenuItem>
          })}

        </Select>
      </FormControl>
    </Box>
  );
}