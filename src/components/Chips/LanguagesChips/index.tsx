import { BaseChips, BaseChipProps } from "../BaseChips";

const label = 'languages'
const languages = [
  "Common",
  "Dwarvish",
  "Elvish",
  "Giant",
  "Gnomish",
  "Goblin",
  "Halfling",
  "Orc",
  "Abyssal",
  "Celestial",
  "Deep Speech",
  "Draconic",
  "Infernal",
  "Primordial",
  "Sylvan",
  "Undercommon",
];

export const LanguageChips = () => {
  return <BaseChips options={languages} label={label} />;
};
