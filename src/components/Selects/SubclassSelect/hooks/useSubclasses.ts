import { useQuery } from "react-query";

import { axiosInstance } from "../../../../axiosInstance";
import { queryKeys } from "../../../../react-query/constants";
import { Subclass } from "../../../../types/types";

async function getSubclass(): Promise<UseSubclasses> {
  const { data } = await axiosInstance.get(`classes/{index}/subclasses/`);
  return data;
}

// add the interface of payload
interface UseSubclasses {
  count: number;
  results: Subclass[];
}

interface useSubclassesPayload {
  subclasses: Subclass[];
}

export function useSubclasses(): useSubclassesPayload {
  // for filtering staff by treatment
  const treatData = (data: UseSubclasses): Subclass[] => {
    const treatedData = data.results;

    return treatedData;
  };

  const fallback: [] = [];
  const { data = fallback } = useQuery(queryKeys.class, getSubclass);

  const subclasses = treatData(data);

  return { subclasses };
}
