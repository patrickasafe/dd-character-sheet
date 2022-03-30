import { TextField } from "@mui/material";

interface CounterProps {
  label?: string,
}

export const Counter = ({ label }: CounterProps) => {
  return (
    <TextField
      // id="outlined-number"
      label={label}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
