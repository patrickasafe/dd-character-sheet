import { Grid, Stack } from "@mui/material";
import { AbilityScoreCard } from "../AbilityScoreCard";
import { Counter } from "../Counter";
import { StackedSkills } from "../StackedSkills";

export const Body = () => {
  const staticAS = [
    { index: "strength", name: "STRENGTH", abbreviation: "STR" },
    { index: "dexterity", name: "DEXTERITY", abbreviation: "DEX" },
    { index: "constitution", name: "CONSTITUTION", abbreviation: "CON" },
    { index: "intelligence", name: "INTELLIGENCE", abbreviation: "INT" },
    { index: "wisdom", name: "WISDOM", abbreviation: "WIS" },
    { index: "charisma", name: "CHARISMA", abbreviation: "CHA" },
  ];

  return (
    // full body
    <Grid container spacing={1}>
      {/* First Column */}
      <Grid item id="ability score cards" xs={6} sm={4} md={2}>
        <Stack spacing={2}>
          {staticAS.map((abilityScore) => {
            return (
              <AbilityScoreCard number={10} key={abilityScore.index}>
                {abilityScore.abbreviation}
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
      <Grid item id="skills" xs={6} sm={4} md={2}>
        <StackedSkills />
      </Grid>

      {/* Second Column */}
      {/* Third Column */}
    </Grid>
  );
};
