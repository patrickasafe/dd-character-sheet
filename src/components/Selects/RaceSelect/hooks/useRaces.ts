import { useQuery } from "react-query";

import { axiosInstance } from "../../../../axiosInstance";
import { queryKeys } from "../../../../react-query/constants";
import { Race } from "../../../../types/types";

async function getRaces(): Promise<UseRaces> {
  const { data } = await axiosInstance.get("races/");
  return data;
}

// add the interface of payload
interface UseRaces {
  count: number;
  results: Race[];
}

interface useRacesPayload {
  races: Race[];
}

export function useRaces(): useRacesPayload {
  // for filtering staff by treatment
  const treatData = (data: UseRaces): Race[] => {
    const treatedData = data.results;

    return treatedData;
  };

  const fallback: [] = [];
  const { data = fallback } = useQuery(queryKeys.races, getRaces);

  const races = treatData(data);

  return { races };
}
