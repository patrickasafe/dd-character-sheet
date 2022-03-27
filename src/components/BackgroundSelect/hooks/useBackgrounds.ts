import { useQuery } from "react-query";

import { axiosInstance } from "../../../axiosInstance";
import { queryKeys } from "../../../react-query/constants";
import { Background } from "../../../types/types";

async function getBackgrounds(): Promise<UseClasses> {
  const { data } = await axiosInstance.get("classes/");
  return data;
}

// add the interface of payload
interface UseClasses {
  count: number;
  results: Class[];
}

interface useClassesPayload {
  classes: Class[];
}

export function useClasses(): useClassesPayload {
  // for filtering staff by treatment
  const treatData = (data: UseClasses): Class[] => {
    const treatedData = data.results;

    return treatedData;
  };

  const fallback: [] = [];
  const { data = fallback } = useQuery(queryKeys.class, getClass);

  const classes = treatData(data);

  return { classes };
}
