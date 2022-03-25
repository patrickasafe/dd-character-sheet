import { Box } from "@mui/material";
import { useQueryClient } from "react-query";

import { AlignmentsSelect } from "../components/AlignmentSelect";
import { ClassSelect } from "../components/ClassSelect";
import { DefaultTextField } from "../components/DefaultTextField";

const Home = () => {
  const queryClient = useQueryClient();

  const title = `D&D CHARACTER SHEET`;

  const player = {
    name: `Patrick`,
    character: {
      class: `Mage`,
      level: 20,
      name: `Linus Torvalds`,
      race: `human`,
      background: `Academy Student`,
      alignment: `chaotic-good`,
      EXP: 0,
    },
  };

  return (
    
    <Box sx={{ display: "flex", alignContent: "center" }}>
      <Box sx={{ flexDirection: "column", display: "flex", padding: "10px" }}>
        <div>{title}</div>
        <DefaultTextField
          value={player.character.name}
          helperText={"CHARACTER NAME"}
        />
      </Box>
      <Box>
        <ClassSelect />
        <DefaultTextField
          value={player.character.background}
          helperText="BACKGROUND"
        />
        <AlignmentsSelect />
      </Box>
    </Box>
  );
};

export default Home;
