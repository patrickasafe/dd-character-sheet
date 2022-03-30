import BasicSelect from "../BaseSelect";

const backgrounds = [
  { index: "acolyte", name: "Acolyte" },
  { index: "charlatan", name: "Charlatan" },
  { index: "criminal", name: "Criminal " },
  { index: "entertainer", name: "Entertainer" },
  { index: "folk-hero", name: "Folk Hero" },
  { index: "guild-artisan ", name: "Guild Artisan" },
  { index: "hermit", name: "Hermit" },
  { index: "noble", name: "Noble" },
  { index: "outlander", name: "Outlander" },
  { index: "sage", name: "Sage" },
  { index: "sailor", name: "Sailor" },
  { index: "soldier", name: "Soldier" },
  { index: "urchin", name: "Urchin" },
];

export const BackgroundSelect = () => {
  // const { backgrounds } = useBackgrounds();

  return <BasicSelect options={backgrounds} placeholder={`BACKGROUND`} />;
};
