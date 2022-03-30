import { Grid, Stack } from "@mui/material";
import { AbilityScoreCard } from "../AbilityScoreCard";
import { Counter } from "../Counter";
import { Skills } from "../Skills";

export const Body = () => {
  const staticAS = [
    { index: "strength", name: "STRENGTH" },
    { index: "dexterity", name: "DEXTERITY" },
    { index: "constitution", name: "CONSTITUTION" },
    { index: "intelligence", name: "INTELLIGENCE" },
    { index: "wisdom", name: "WISDOM" },
    { index: "charisma", name: "CHARISMA" },
  ];

  return (
    // full body
    <Grid container spacing={1}>
      {/* First Column */}
      <Grid item id="ability score cards" xs={3} sm={2} md={1}>
        <Stack spacing={2}>
          {staticAS.map((abilityScore) => {
            return (
              <AbilityScoreCard number={10} key={abilityScore.index}>
                {abilityScore.name}
              </AbilityScoreCard>
            );
          })}
        </Stack>
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
      <Grid item id="skills" xs={3} sm={2} md={1}>
        <Skills />
      </Grid>

      {/* Second Column */}
      {/* Third Column */}
    </Grid>
  );
};
