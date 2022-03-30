import BasicSelect from "../BaseSelect";
import { useAlignments } from "./hooks/useAlignments";

export const AlignmentsSelect = () => {
  const { alignments } = useAlignments();

  return <BasicSelect options={alignments} placeholder={`ALIGNMENTS`} />;
};
