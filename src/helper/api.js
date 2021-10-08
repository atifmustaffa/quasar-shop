import axios from "axios";
import { join } from "path";

const BASE_API = "api";
const PRODUCTS_PATH = "products";

const helper = {
  get(path) {
    return new Promise((resolve, reject) =>
      axios
        .get(path)
        .then(response => {
          if (response.status === 200) {
            resolve(response.data);
          }
        })
        .catch(reject)
    );
  },
  getProducts(callback, error) {
    helper
      .get(join(BASE_API, PRODUCTS_PATH))
      .then(callback)
      .catch(error);
  },
  getProduct(id, callback, error) {
    helper
      .get(join(BASE_API, PRODUCTS_PATH, String(id)))
      .then(callback)
      .catch(error);
  }
};
export default helper;
