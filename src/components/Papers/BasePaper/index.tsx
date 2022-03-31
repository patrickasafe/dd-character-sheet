import { Paper, Box, Switch } from "@mui/material";
import Image from "next/image";
import { Counter } from "../../Counter";

export interface BasePaperProps {
  title: string;
  image: string;
}

export const BasePaper = ({ title, image }: BasePaperProps) => {
  return (
    <Paper variant="outlined">
      <Box display={"flex"}>
        <Box height="100%" sx={{ borderRadius: "50%" }}>
          <Image src={image} alt="" width="100%" height="100%" />
        </Box>
        <Switch />
        <Counter variant="standard" label={title} />
      </Box>
    </Paper>
  );
};
