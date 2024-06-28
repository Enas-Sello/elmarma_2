'use client';
import { useFetch } from '@/lib/hooks/useQuery';
import React from 'react';

const TodoDetailes = ({ params: { id } }: any) => {
  const {
    data: title,
    isLoading,
    isError,
    error
  } = useFetch({
    queryKey: [`todo,${id}`],
    endpoint: `todos/${id}`,
    select: data => {
      return data.title;
    }
  });

  //

  return (
    <>
      {isLoading && <p>looding</p>}
      {isError && <p>{error?.message}</p>}
      {title && <div>todo name {title}</div>}
    </>
  );
};

export default TodoDetailes;
