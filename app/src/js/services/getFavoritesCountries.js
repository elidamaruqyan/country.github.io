import { localStorageSet } from "../helper/helperFunctions";

const getFavoriteCountries = () => {
  localStorageSet("test", "test");
};

export default getFavoriteCountries();
