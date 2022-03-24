import { TextField } from "@mui/material";

export const DefaultTextField = ({ ...props }) => {
  return (
    <TextField
      variant="standard"
      helperText={props.helperText}
      value={props.value}
    />
  );
};
