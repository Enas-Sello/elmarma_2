import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { apiRequest } from '../apiRequest';

type AxiosRequestConfig_withoutURL_TP = Omit<AxiosRequestConfig, 'url'>;
type Args_TP<T> = {
  queryKey: [string] | [string, string] | [string, number];
  endpoint: string;
  // eslint-disable-next-line no-unused-vars
  select?: (data: any) => T;
  enabled?: boolean;
  axiosOptions?: AxiosRequestConfig_withoutURL_TP;
  refetchInterval?: number;
  staleTime?: number;
  cacheTime?: number;
  pagination?: boolean;
};

export const useFetch = <T, ComingTP = T>({
  ...args
}: Args_TP<T>) => {
  const {
    queryKey,
    endpoint,
    select,
    enabled = true,
    pagination = false,
    axiosOptions,
    refetchInterval,
    staleTime
  } = args;

  const query = useQuery({
    queryKey,
    queryFn: () =>
      apiRequest<ComingTP>({ url: endpoint, ...axiosOptions }, pagination),
    enabled,
    refetchInterval,
    staleTime,
    select
  });

  return {
    ...query,
    isLoading: query.isLoading && query.fetchStatus !== 'idle'
  };
};
