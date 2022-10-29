import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchData } from "../fetchData";
import { withAxiosSSP } from "../util/withAxiosSSP";

export const getServerSideProps = withAxiosSSP(async ({ query }) => {
  const data = await fetchData(query.q as string, "server");
  return { props: { data } };
});

export default function Home() {
  const { query } = useRouter();
  useEffect(() => {
    fetchData(query.q as string, "client");
  }, [query]);

  return <h1>Hello world</h1>;
}
