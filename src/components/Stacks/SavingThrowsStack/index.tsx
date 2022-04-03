import { SavingThrowPaper } from "../../Papers/SavingThrowPaper";
import { BaseStack } from "../BaseStack";

const abilityScores = [
  { index: "strength", title: "STRENGTH", abbreviation: "STR", image: "/icons/strength.svg" },
  { index: "dexterity", title: "DEXTERITY", abbreviation: "DEX", image: "/icons/dexterity.svg"  },
  { index: "constitution", title: "CONSTITUTION", abbreviation: "CON", image: "/icons/constitution.svg"  },
  { index: "intelligence", title: "INTELLIGENCE", abbreviation: "INT", image: "/icons/intelligence.svg"  },
  { index: "wisdom", title: "WISDOM", abbreviation: "WIS", image: "/icons/wisdom.svg"  },
  { index: "charisma", title: "CHARISMA", abbreviation: "CHA", image: "/icons/charisma.svg"  },
];

// This need a better name
export const SavingThrowsStack = () => {
  return (
    <BaseStack title='SAVING THROWS'>
      {abilityScores.map((skill) => {
        return (
          <SavingThrowPaper
            key={skill.index}
            title={skill.title}
            image={skill.image}
          />
        );
      })}
    </BaseStack>
  );
};
