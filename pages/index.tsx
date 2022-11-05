import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useUsers } from "../data-access/useUsers";
import { getGetUsersQueryKey, getUsers } from "../generated/src/users";
import { getSSPQueryContext } from "../util/getSSPQueryContext";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { userId },
  } = context;

  const { queryClient, axiosConfig } = getSSPQueryContext(context);
  const params = { userId: parseInt(userId as string) };

  queryClient.prefetchQuery(getGetUsersQueryKey(params), () =>
    getUsers(params, axiosConfig)
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default function Home() {
  useUsers({ userId: 1 });
  return <h1>Hello world</h1>;
}
