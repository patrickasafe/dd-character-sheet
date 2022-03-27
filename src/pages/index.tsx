import { Box } from "@mui/material";
import { useQueryClient } from "react-query";

import { AlignmentsSelect } from "../components/AlignmentSelect";
import { BackgroundSelect } from "../components/BackgroundSelect";
import { ClassSelect } from "../components/ClassSelect";
import { DefaultTextField } from "../components/DefaultTextField";
import { RaceSelect } from "../components/RaceSelect";
// import { SubClassSelect } from "../components/SubclassSelect";

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
    //Header
    <Box sx={{ display: "flex", alignContent: "center" }}>
      {/* LEFT SIDE */}
      <Box sx={{ flexDirection: "column", display: "flex", padding: "10px" }}>
        <div>{title}</div>
        <DefaultTextField
          value={player.character.name}
          helperText={"CHARACTER NAME"}
        />
      </Box>
      {/* RIGHT SIDE */}
      <Box>
        <RaceSelect />
        <ClassSelect />
        <BackgroundSelect />
        {/* <SubClassSelect /> */}
        <AlignmentsSelect />
      </Box>
    </Box>
  );
};

export default Home;
