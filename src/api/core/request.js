import axios from "axios";

const Api = import.meta.env.VITE_APP_API_URL

const client = axios.create({
  baseURL: Api,
  json: true,
});

const defaultConfigure = {
  data: {},
  headers: {
    Accept: "*/*",
  },
  params: {},
}

export default {
  /** 
   * if req success returns response.data straight, either return full errorResponse
   * @param {String} method 
   * @param {String} resource 
   * @param {Object} data 
   * @param {Object} headers 
   * @param {Object} params 
   * @returns Promise
   */
  async execute(
    method,
    url,
    configure = defaultConfigure,
  ) {
    return client({
      crossdomain: true,
      method,
      url,
      ...configure,
      headers: {
        Accept: "*/*",
        ...configure.headers,
      },
    }).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(
          "Ошибка в запросе по пути " +
          resource +
          " | status: " +
          error.request.status
        );
        try {
          return JSON.parse(error.request.response);
        } catch (e) {
          return error.request.response;
        }
      }
    );
  },
};
