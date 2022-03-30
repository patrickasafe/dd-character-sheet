import BasicSelect from "../BaseSelect";
import { useRaces } from "./hooks/useRaces";

export const RaceSelect = () => {
  const { races } = useRaces();

  return <BasicSelect options={races} placeholder={`RACE`} />;
};
