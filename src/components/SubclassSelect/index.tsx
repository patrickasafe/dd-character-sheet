import BasicSelect from "../BasicSelect";
import { useSubclasses } from "./hooks/useSubclasses";

export const SubClassSelect = () => {
  const { subclasses } = useSubclasses();

  return <BasicSelect options={subclasses} placeholder={`SUBCLASS`} />;
};
