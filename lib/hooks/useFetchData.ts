import { APILINK } from '@/config';
import { useQuery } from '@tanstack/react-query';

const queryFn = async (queryRout: string) => {
  const response = await fetch(`${APILINK}/${queryRout}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const useFetchData = ({
  queryKey,
  queryRout
}: {
  queryKey: [string];
  queryRout: string;
}) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn: () => queryFn(queryRout)
  });
  return { data, isLoading, isError, error };
};

export default useFetchData;
