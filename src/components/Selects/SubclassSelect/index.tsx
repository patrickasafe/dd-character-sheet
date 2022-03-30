import BasicSelect from "../BaseSelect";
import { useSubclasses } from "./hooks/useSubclasses";

export const SubClassSelect = () => {
  const { subclasses } = useSubclasses();

  return <BasicSelect options={subclasses} placeholder={`SUBCLASS`} />;
};
