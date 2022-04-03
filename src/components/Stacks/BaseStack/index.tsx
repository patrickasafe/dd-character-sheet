import { Stack, StackProps, Typography } from "@mui/material";

export interface BaseStackProps extends StackProps {
  title?: string;
}

export const BaseStack = ({ children, title, ...rest }: BaseStackProps) => {
  return (
    <Stack spacing={1} {...rest}>
      <Typography sx={{ textAlign: "center" }}>{title}</Typography>
      {children}
    </Stack>
  );
};
