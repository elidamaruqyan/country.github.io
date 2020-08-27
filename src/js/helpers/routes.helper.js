import { Config } from "../configs/config";

export const routes = {
  getAllCountries() {
    return `${Config.apiURLs.countries}/all`;
  },
};
