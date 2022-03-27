import BasicSelect from "../BasicSelect";
import { useAlignments } from "./hooks/useAlignments";

export const AlignmentsSelect = () => {
  const { alignments } = useAlignments();

  return <BasicSelect options={alignments} placeholder={`ALIGNMENTS`} />;
};
