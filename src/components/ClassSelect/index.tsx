import BasicSelect from "../BasicSelect";
import { useClasses } from "./hooks/useClasses";

export const ClassSelect = () => {
  const { classes } = useClasses();

  return <BasicSelect options={classes} placeholder={`CLASS`} />;
};
