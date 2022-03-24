import { useQuery } from 'react-query';

import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';

async function getAlignments() {
  const { data } = await axiosInstance.get('alignments/');
  return data
  
}




// add the interface of payload
interface UseAlignments {
  count: number;
  results: [];
}

export function useAlignments() {
  // for filtering staff by treatment
  const treatData = (data) => {
    const treatedData = data.results
    return treatedData
  }

  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.alignments, getAlignments);

  const alignments = treatData(data)

  return { alignments };
}
