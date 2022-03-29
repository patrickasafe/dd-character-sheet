import { Grid, Stack } from "@mui/material";
import { AbilityScoreCard } from "../AbilityScoreCard";

export const Body = () => {
  return (
    // full body
    <Grid container spacing={1}>
      {/* First Column */}
      <Grid item id="ability score cards" xs={3} sm={2} md={1}>
        <Stack spacing={2}>
          <AbilityScoreCard number={10}>DEXTERITY</AbilityScoreCard>
          <AbilityScoreCard number={10}>DEXTERITY</AbilityScoreCard>
          <AbilityScoreCard number={10}>CONSTITUTION</AbilityScoreCard>
          <AbilityScoreCard number={10}>INTELLIGENCE</AbilityScoreCard>
          <AbilityScoreCard number={10}>WISDOM</AbilityScoreCard>
          <AbilityScoreCard number={10}>CHARISMA</AbilityScoreCard>
        </Stack>
      </Grid>
      {/* Second Column */}
      {/* Third Column */}
    </Grid>
  );
};
