import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect({...props}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={value}
          onChange={handleChange}
        >
          {props.options?.map( option => {
           return <MenuItem value={option.name} key={option.index}>{option.name}</MenuItem>
          })}

        </Select>
      </FormControl>
    </Box>
  );
}