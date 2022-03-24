import { useQuery } from 'react-query';

import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';

async function getAlignments() {
  const res = await axiosInstance.get('alignments/');
  
  const data = res.results
  return data;
}

interface UseAlignments {
  count: number;
  results: [];
}

export function useAlignments() {
  // for filtering staff by treatment


  const fallback = [];
  const { data: alignments = fallback } = useQuery(queryKeys.alignments, getAlignments);

  return { alignments };
}
