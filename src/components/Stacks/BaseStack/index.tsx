import { Stack, StackProps } from "@mui/material";

export interface BaseStackProps extends StackProps {}

export const BaseStack = ({children, ...rest}: BaseStackProps) => {
  return (
    <Stack spacing={1} {...rest}>
      {children}
    </Stack>
  );
};
