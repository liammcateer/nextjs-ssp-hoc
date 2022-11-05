import Axios, { AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create(); // use your own URL here or environment variable

const isServer = () => typeof window === "undefined";

// add a second `options` argument here if you want to pass extra options to each generated query
export const usersClient = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    baseURL: isServer() ? "https://jsonplaceholder.typicode.com" : "/api",
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};