import { GetServerSidePropsContext } from "next";
import { QueryClient } from "@tanstack/react-query";
import { createAxiosConfig } from "./axiosConfig";

export const getSSPQueryContext = (context: GetServerSidePropsContext) => {
  const { locale } = context;
  const queryClient = new QueryClient();
  const axiosConfig = createAxiosConfig({ locale });

  return { queryClient, axiosConfig };
};
