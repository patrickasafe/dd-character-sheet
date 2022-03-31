import { TextField, TextFieldProps } from "@mui/material";

export const Counter = (props: TextFieldProps) => {
  return (
    <TextField
      // id="outlined-number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};
