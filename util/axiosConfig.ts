import { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

export const createAxiosConfig = ({
  locale = "en-GB",
}: {
  locale?: string;
}): AxiosRequestConfig => {
  return {
    headers: {
      "X-Language": locale,
    },
  };
};

export const useAxiosConfig = () => {
  const { locale } = useRouter();

  return createAxiosConfig({ locale });
};
