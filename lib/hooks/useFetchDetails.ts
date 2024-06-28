import { APILINK } from '@/config';
import { useQuery } from '@tanstack/react-query';

const queryFn = async (queryRout: string, id: string) => {
  const response = await fetch(`${APILINK}/${queryRout}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const useFetchById = ({
  queryKey,
  queryRout,
  id
}: {
  queryKey: [string];
  queryRout: string;
  id: string;
}) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn: () => queryFn(queryRout, id),
  });
  return { data, isLoading, isError, error };
};

export default useFetchById;
