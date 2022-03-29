import { Grid, Stack } from "@mui/material";
import { AbilityScoreCard } from "../AbilityScoreCard";
import { Counter } from "../Counter";

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
      <Grid item id="inspiration" xs={3} sm={2} md={1}>
        <Counter label='Inspiration' />
      </Grid>
      <Grid item id="proficiency bonus" xs={3} sm={2} md={1}>
        <Counter label='Proficiency Bonus' />
      </Grid>
      <Grid item id="passive wisdom" xs={3} sm={2} md={1}>
        <Counter label='Passive Wisdom' />
      </Grid>
      {/* Second Column */}
      {/* Third Column */}
    </Grid>
  );
};
