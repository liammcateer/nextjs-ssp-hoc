import axios from "axios";

export const fetchData = async (
  query: string,
  context: "client" | "server"
) => {
  const res = await axios.get(
    `https://webhook.site/b92fff36-db33-453f-a92d-f4c91ecb0746?q=${query}&context=${context}`
  );

  return res.data;
};
