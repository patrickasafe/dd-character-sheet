import BasicSelect from "../BaseSelect";
import { useClasses } from "./hooks/useClasses";

export const ClassSelect = () => {
  const { classes } = useClasses();

  return <BasicSelect options={classes} placeholder={`CLASS`} />;
};
