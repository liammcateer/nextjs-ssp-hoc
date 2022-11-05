/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Sample API
 * Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
 * OpenAPI spec version: 0.1.9
 */
import { useQuery } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import { usersClient } from "../usersClient";
export type GetUsersParams = { userId: number };

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * Optional extended description in CommonMark or HTML.
 * @summary Returns a list of users.
 */
export const getUsers = (
  params: GetUsersParams,
  options?: SecondParameter<typeof usersClient>,
  signal?: AbortSignal
) => {
  return usersClient<string[]>(
    { url: `/users`, method: "get", params, signal },
    options
  );
};

export const getGetUsersQueryKey = (params: GetUsersParams) => [
  `/users`,
  ...(params ? [params] : []),
];

export type GetUsersQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsers>>
>;
export type GetUsersQueryError = unknown;

export const useGetUsers = <
  TData = Awaited<ReturnType<typeof getUsers>>,
  TError = unknown
>(
  params: GetUsersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getUsers>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof usersClient>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetUsersQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsers>>> = ({
    signal,
  }) => getUsers(params, requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof getUsers>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};
