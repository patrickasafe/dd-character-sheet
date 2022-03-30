import { Stack, Box, iconClasses } from "@mui/material";
import Image from "next/image";
import { Counter } from "../Counter";

export const Skills = () => {
  return (
    <Stack>
      <Box display="flex">
        <Image src={"/icons/acrobatics.svg"} alt="" width={50} height={50} />
        <Counter label="Acrobatics" />
      </Box>
    </Stack>
  );
};
