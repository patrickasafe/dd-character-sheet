import { AbilityScoreCard } from "../../AbilityScoreCard";
import { BaseStack } from "../BaseStack";

const abilityScores = [
  { index: "strength", name: "STRENGTH", abbreviation: "STR" },
  { index: "dexterity", name: "DEXTERITY", abbreviation: "DEX" },
  { index: "constitution", name: "CONSTITUTION", abbreviation: "CON" },
  { index: "intelligence", name: "INTELLIGENCE", abbreviation: "INT" },
  { index: "wisdom", name: "WISDOM", abbreviation: "WIS" },
  { index: "charisma", name: "CHARISMA", abbreviation: "CHA" },
];

export const AbilityScoreStack = () => {
  return (
    <BaseStack>
      {abilityScores.map((abilityScore) => {
        return (
          <AbilityScoreCard number={10} key={abilityScore.index}>
            {abilityScore.abbreviation}
          </AbilityScoreCard>
        );
      })}
    </BaseStack>
  );
};
