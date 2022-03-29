import { Grid } from "@mui/material";
import { AbilityScoreCard } from "../AbilityScoreCard";

export const Body = () => {
  return (
    // full body
    <Grid container spacing={4}>
      {/* First Column */}
      <Grid id="first column" item xs={8} sm={6} md={4}>
        <Grid item>
          <AbilityScoreCard number={10}>STRENGTH</AbilityScoreCard>
        </Grid>
        <Grid item>
          <AbilityScoreCard number={10}>DEXTERITY</AbilityScoreCard>
        </Grid>
        <Grid item>
          <AbilityScoreCard number={10}>CONSTITUTION</AbilityScoreCard>
        </Grid>
        <Grid item>
          <AbilityScoreCard number={10}>INTELLIGENCE</AbilityScoreCard>
        </Grid>
        <Grid item>
          <AbilityScoreCard number={10}>WISDOM</AbilityScoreCard>
        </Grid>
        <Grid item>
          <AbilityScoreCard number={10}>CHARISMA</AbilityScoreCard>
        </Grid>
      </Grid>
      {/* Second Column */}
      {/* Third Column */}
    </Grid>
  );
};
