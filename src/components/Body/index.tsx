import { Grid, Stack } from "@mui/material";
import { AbilityScoreCard } from "../AbilityScoreCard";
import { Counter } from "../Counter";
import { AbilityScoreStack } from "../Stacks/AbilityScoresStack";
import { SkillsStack } from "../Stacks/SkillsStack";

export const Body = () => {
  return (
    // full body
    <Grid container spacing={1}>
      {/* First Column */}
      <Grid item id="ability score cards" xs={3} sm={2} md={1}>
        <AbilityScoreStack />
      </Grid>
      <Grid item id="inspiration" xs={3} sm={2} md={1}>
        <Counter label="Inspiration" />
      </Grid>
      <Grid item id="proficiency bonus" xs={3} sm={2} md={1}>
        <Counter label="Proficiency Bonus" />
      </Grid>
      <Grid item id="passive wisdom" xs={3} sm={2} md={1}>
        <Counter label="Passive Wisdom" />
      </Grid>
      <Grid item id="skills" xs={6} sm={4} md={2}>
        <SkillsStack />
      </Grid>

      {/* Second Column */}
      {/* Third Column */}
    </Grid>
  );
};
