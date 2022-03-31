import { Stack } from "@mui/material";
import { SkillPaper } from "../SkillPaper";

const skills = [
  { index: "acrobatics", title: "Acrobatics", image: "/icons/acrobatics.svg" },
  {
    index: "animal-handling",
    title: "Animal Handling",
    image: "/icons/animal-handling.svg",
  },
  { index: "arcana", title: "Arcana", image: "/icons/arcana.svg" },
  { index: "athletics", title: "Athletics", image: "/icons/athletics.svg" },
  { index: "deception", title: "Deception", image: "/icons/deception.svg" },
  { index: "history", title: "History", image: "/icons/history.svg" },
  { index: "insight", title: "Insight", image: "/icons/insight.svg" },
  {
    index: "intimidation",
    title: "Intimidation",
    image: "/icons/intimidation.svg",
  },
  {
    index: "investigation",
    title: "Investigation",
    image: "/icons/investigation.svg",
  },
  { index: "medicine", title: "Medicine", image: "/icons/medicine.svg" },
  { index: "nature", title: "Nature", image: "/icons/nature.svg" },
  { index: "perception", title: "Perception", image: "/icons/perception.svg" },
  {
    index: "performance",
    title: "Performance",
    image: "/icons/performance.svg",
  },
  { index: "persuasion", title: "Persuasion", image: "/icons/persuasion.svg" },
  { index: "religion", title: "Religion", image: "/icons/religion.svg" },
  {
    index: "sleight-of-hand",
    title: "Sleight of Hand",
    image: "/icons/sleight-of-hand.svg",
  },
  { index: "stealth", title: "Stealth", image: "/icons/stealth.svg" },
  { index: "survival", title: "Survival", image: "/icons/survival.svg" },
];

// This need a better name
export const StackedSkills = () => {
  return (
    <Stack spacing={1}>
      {skills.map((skill) => {
        return (
          <SkillPaper
            key={skill.index}
            title={skill.title}
            image={skill.image}
          />
        );
      })}
    </Stack>
  );
};
