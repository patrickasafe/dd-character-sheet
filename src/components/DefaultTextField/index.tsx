import { TextField } from "@mui/material";

interface DefaultTextFieldProps {
  helperText: string,
  value: string,
  sx?: any
}

export const DefaultTextField = ({helperText, value, sx }: DefaultTextFieldProps) => {
  return (
    <TextField
      variant="standard"
      helperText={helperText}
      value={value}
      sx={sx}
    />
  );
};
