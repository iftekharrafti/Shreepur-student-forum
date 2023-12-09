import axios from "axios";

export const BASE_URL = "https://laravel.amaderthikana.com/api/usasreepur";

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
