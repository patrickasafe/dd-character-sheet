import { Box } from "@mui/material";
import { useQueryClient } from "react-query";

import { AlignmentsSelect } from "../components/Selects/AlignmentSelect";
import { BackgroundSelect } from "../components/Selects/BackgroundSelect";
import { ClassSelect } from "../components/Selects/ClassSelect";
import { DefaultTextField } from "../components/DefaultTextField";
import { RaceSelect } from "../components/Selects/RaceSelect";
import { Body } from "../components/Body";
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
    <>
      {/* Header */}
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
        <Box sx={{ flexDirection: "column", display: "flex", padding: "10px" }}>
          {/* RIGHT SIDE: UPPER SIDE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
            }}
          >
            <ClassSelect />
            <BackgroundSelect />
            <DefaultTextField
              value={player.name}
              helperText={"PLAYER NAME"}
              sx={{ maxWidth: 100 }}
            />
          </Box>
          {/* RIGHT SIDE: LOWER SIDE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
            }}
          >
            <RaceSelect />
            <AlignmentsSelect />

            {/* <SubClassSelect /> */}
          </Box>
        </Box>
      </Box>
      <Body />
    </>
  );
};

export default Home;
