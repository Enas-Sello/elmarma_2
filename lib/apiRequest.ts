import { APILINK } from '@/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import i18next from 'i18next';

const baseURL = APILINK || '';

const client = axios.create({
  baseURL
});

export const apiRequest = async <T>(
  options: AxiosRequestConfig,
  pagination?: boolean
): Promise<T> => {
  //@ts-ignore
  const currentLanguage = await i18next?.logger?.options?.lng;
  const onSuccess = (response: AxiosResponse) => {
    if (pagination) {
      return response.data.data;
    } else {
      return response.data.data;
    }
  };
  try {
    const response = await client({
      ...options,
      timeout: 5000,
      headers: {
        'Content-Type': `application/json`,
        'Accept-Language': currentLanguage || 'ar',
        ...options.headers
      }
    });
    return onSuccess(response);
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
  //   const endpoint = fetchOptions.id ? `${url}/${fetchOptions.id}` : url;
  //   let requestOptions: any = {
  //     method: fetchOptions.method
  //   };

  //   if (['POST', 'PUT', 'DELETE'].includes(fetchOptions.method)) {
  //     requestOptions.headers = {
  //       'Content-Type': 'application/json'
  //     };
  //     if (fetchOptions.method !== 'GET' && fetchOptions.body) {
  //       requestOptions.body = JSON.stringify(fetchOptions.body);
  //     }
  //   }
  //   console.log(requestOptions);

  //   const response = await fetch(`${APILINK}/${endpoint}`, requestOptions);

  //
  // //  if (!response.ok) {
  // //     throw new Error('Failed to fetch data');
  //   }

  //   return response.json();
};
