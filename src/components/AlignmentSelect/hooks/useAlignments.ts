import { useQuery } from "react-query";

import { axiosInstance } from "../../../axiosInstance";
import { queryKeys } from "../../../react-query/constants";
import { Alignment } from "../../../types/types";

async function getAlignments(): Promise<UseAlignments> {
  const { data } = await axiosInstance.get("alignments/");
  return data;
}

// add the interface of payload
interface UseAlignments {
  count: number;
  results: Alignment[];
} 

interface useAlignmentsPayload {
  alignments: Alignment[]
}

export function useAlignments(): useAlignmentsPayload {
  // for filtering staff by treatment
  const treatData = (data: UseAlignments): Alignment[] => {
    const treatedData = data.results;

    return treatedData;
  };

  const fallback: [] = [];
  const { data = fallback } = useQuery(queryKeys.alignments, getAlignments);

  const alignments = treatData(data);

  return { alignments };
}
