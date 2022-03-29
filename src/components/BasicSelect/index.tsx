import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Alignment } from '../../types/types';

interface BasicSelectProps {
  options: any,
  placeholder: string,
}

export default function BasicSelect({options, placeholder}: BasicSelectProps) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{minWidth: 120, maxWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={value}
          onChange={handleChange}
        >
          {options?.map( (option: Alignment) => {
           return <MenuItem value={option.name} key={option.index}>{option.name}</MenuItem>
          })}

        </Select>
      </FormControl>
    </Box>
  );
}