import { GetServerSideProps } from "next";
import { setupAxiosDefaults } from "./setUpAxiosDefaults";

type WithAxiosSSP = (
  getServerSideProps: GetServerSideProps
) => GetServerSideProps;

export const withAxiosSSP: WithAxiosSSP = (getServerSideProps) => (context) => {
  setupAxiosDefaults({ locale: context.locale });
  return getServerSideProps(context);
};
