import axios from "axios";

export interface SetupAxiosDefaultsParams {
  locale?: string;
}

export const setupAxiosDefaults = ({ locale }: SetupAxiosDefaultsParams) => {
  axios.defaults.headers.common["X-Language"] = locale;
};
