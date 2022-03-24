import BasicSelect from "../BasicSelect";
import { useAlignments } from "./hooks/useAlignments";

export const Alignments = () => {
  const { alignments } = useAlignments();

  return <BasicSelect options={alignments} placeholder={`Alignments`} />;
};
